+++
title = "Advent of Zig - 2015"
date = 2026-06-23
[extra]
tags = ["WIP", "Test"]
+++

# Late to the party

If you are in the programming space, I'm sure you know what [Advent of Code](https://adventofcode.com/) is.

Recently I finished all and every one of the 115 [Ziglings](https://codeberg.org/ziglings/exercises/) exercises and I was looking into what could be **the next thing**. A graphics engine is surely to come, but I really need to interiorize Zig's syntax first. All those years of C# and C++ are not helping.

Sharing my incredible feat with a friend of mine, they reminded me of the existence of the Advent, which I have known about for quite some time but never really looked into it. After solving the first puzzle from 2015, I think this could be the thing! It is definitely easier than studying chinese, but contrary to my expectations, it took more time than I was expecting.

## 2015 - Day 1
You are given an amount of parenthesis in the form of a string and the rule:

```
'(' += 1 
')' -= 1
```

Simple enough! Btw, `puzzle` is just the input string as `*const []u8`.

```zig
pub fn main(_: std.process.Init) !void {
    std.debug.print("part one: {d}\n", .{part_one()});
    std.debug.print("part two: {d}\n", .{part_two()});
}

fn part_one() i16 {
    var f: i16 = 0;

    for (puzzle) |c|
        switch (c) {
            '(' => f += 1,
            ')' => f -= 1,
            else => unreachable,
        };

    return f;
}

fn part_two() i16 {
    var f: i16 = 0;

    for (puzzle, 1..) |c, i| {
        switch (c) {
            '(' => f += 1,
            ')' => f -= 1,
            else => unreachable,
        }

        if (f == -1)
            return @intCast(i);
    }

    return puzzle.len - 1;
}
```

## 2015 - Day 2

Simple maths are harder the older you are, and I'm dying on this hill.

To make tokenization easier I took the liberty of replacing ever 'x' for a ',' on the input string. If you are using the Helix IDE or NeoVim, straighten the line with `999[shift]C[del],` and then replace the 'x' with `xrz[del],[enter]`. I'm sure there are better ways to do this but I'm still too noob with modal editors!

Anyway, this was fun! I got to use vectors (which are incredibly convenient) and remember some basic math. What else can I ask from a puzzle?

```zig
const std = @import("std");
const parseInt = std.fmt.parseInt;

const puzzle = "29,13,26...";
const by2: @Vector(3, u16) = @splat(2);

pub fn main(_: std.process.Init) !void {
    var it = std.mem.tokenizeAny(u8, puzzle, ",");

    var sum_wrap: u32 = 0;
    var sum_ribbon: u32 = 0;

    while (it.next()) |n| {
        const l = try parseInt(u16, n, 10);
        const w = try parseInt(u16, it.next() orelse "1", 10);
        const h = try parseInt(u16, it.next() orelse "1", 10);

        const areas = @Vector(3, u16){ l * w, w * h, l * h };
        const smallest_area = @reduce(.Min, areas);

        const perimeters = @Vector(3, u16){ 2 * (l + w), 2 * (w + h), 2 * (l + h) };
        const smallest_perimeter = @reduce(.Min, perimeters);

        sum_wrap += @reduce(.Add, areas * by2) + smallest_area;
        sum_ribbon += smallest_perimeter + l * w * h;
    }

    std.debug.print("Paper: {d}ft\n", .{sum_wrap});
    std.debug.print("Ribbon: {d}ft\n", .{sum_ribbon});
}
```

## 2015 - Day 3

Got to use packed unions!

I usually take using allocators and std as cheating for some reason, but I was kinda lazy as to making my own thing. And the packed union just got me a free i32 hash so...


```zig
const std = @import("std");
const print = std.debug.print;

const puzzle = "^><^>>>...";

const Coord = packed union(i32) {
    value: i32,
    pos: packed struct(i32) {
        x: i16,
        y: i16,
    },
};

pub fn main(_: std.process.Init) !void {
    var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
    defer arena.deinit();
    const sand = arena.allocator();

    print("part one: {d}\n", .{try part_one(sand)});
    print("part two: {d}\n", .{try part_two(sand)});
}

pub fn part_one(sand: std.mem.Allocator) !u32 {
    var houses = std.AutoHashMap(i32, void).init(sand);
    var addr: Coord = .{ .pos = .{ .x = 0, .y = 0 } };
    try houses.put(addr.value, {});

    for (puzzle) |c| {
        switch (c) {
            '^' => addr.pos.y += 1,
            'v' => addr.pos.y -= 1,
            '>' => addr.pos.x += 1,
            '<' => addr.pos.x -= 1,
            else => unreachable,
        }
        try houses.put(addr.value, {});
    }

    return houses.count();
}

pub fn part_two(sand: std.mem.Allocator) !u32 {
    var houses = std.AutoHashMap(i32, void).init(sand);
    var addr_snt: Coord = .{ .pos = .{ .x = 0, .y = 0 } };
    var addr_bot: Coord = .{ .pos = .{ .x = 0, .y = 0 } };
    try houses.put(addr_snt.value, {});

    for (puzzle, 0..) |c, i| {
        var coord: *Coord = if (i % 2 == 0) &addr_snt else &addr_bot;

        switch (c) {
            '^' => coord.pos.y += 1,
            'v' => coord.pos.y -= 1,
            '>' => coord.pos.x += 1,
            '<' => coord.pos.x -= 1,
            else => unreachable,
        }
        try houses.put(coord.value, {});
    }

    return houses.count();
}
```

## 2015 - Day 4

Just the answer to the first part since the second is trivial.


```zig
const std = @import("std");
const print = std.debug.print;

const puzzle = "ckczppom";
const zeros = "00000";

pub fn main(_: std.process.Init) !void {
    var in: [32]u8 = undefined;
    var out: [32]u8 = undefined;

    var n: u32 = 0;

    while (!std.mem.eql(u8, out[0..5], zeros[0..5])) : (n += 1) {
        const slice = try std.fmt.bufPrint(&in, "{s}{d}", .{ puzzle, n });
        try hash(slice, &out);
    }

    print("{s}\n", .{in});
    print("{s}\n", .{out});
}

fn hash(in: []u8, out: *[32]u8) !void {
    var hasher = std.crypto.hash.Md5.init(.{});
    hasher.update(in);
    var final: [16]u8 = undefined;
    hasher.final(&final);
    _ = try std.fmt.bufPrint(out, "{x}", .{final});
}
```

## 2015 - Day 5


```zig
const std = @import("std");
const print = std.debug.print;
const eql = std.mem.eql;

const puzzle = "uxcplgxnkwbdwhrp...";

pub fn main(_: std.process.Init) !void {
    var it = std.mem.tokenizeAny(u8, puzzle, ",");

    var count: i32 = 0;
    var total: i32 = 0;

    while (it.next()) |str| : (total += 1) {
        if (!isNaughty_partOne(str))
            count += 1;
    }

    print("\nPart one {d}/{d}\n", .{ count, total });

    count = 0;
    total = 0;
    it.reset();

    while (it.next()) |str| : (total += 1) {
        if (!isNaughty_partTwo(str))
            count += 1;
    }

    print("Part two {d}/{d}\n", .{ count, total });
}

fn isNaughty_partOne(str: []const u8) bool {
    var cond_vowels: u8 = 0;
    var cond_repeat = false;

    return for (str, 0..) |c, i| {
        if (c == 'a' or c == 'e' or c == 'i' or c == 'o' or c == 'u')
            cond_vowels += 1;

        if (i == str.len - 1)
            continue;

        const pair: []const u8 = str[i .. i + 2];

        if (eql(u8, pair, "ab") or eql(u8, pair, "cd") or eql(u8, pair, "pq") or eql(u8, pair, "xy"))
            return true;

        if (pair[0] == pair[1])
            cond_repeat = true;
    } else cond_vowels < 3 or !cond_repeat;
}

fn isNaughty_partTwo(str: []const u8) bool {
    var size: usize = 2;
    var bound = str.len - 2 + 1;

    const cond_pairs = blk: {
        for (0..bound) |i| for (0..bound) |j| {
            const w1 = str[i .. i + size];
            const w2 = str[j .. j + size];

            if (j != i -% 1 and j != i and j != i + 1)
                if (eql(u8, w1, w2))
                    break :blk true;
        };
        break :blk false;
    };

    size = 3;
    bound = str.len - 3 + 1;

    const cond_skip = for (0..bound) |i| {
        const w1 = str[i .. i + size];

        if (w1[0] == w1[2])
            break true;
    } else false;

    if (cond_pairs and cond_skip)
        return false;

    return true;
}
```
