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
