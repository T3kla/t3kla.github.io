+++
title = "Advent of Zig"
date = 2026-06-23
[extra]
tags = ["WIP", "Test"]
+++

# Late to the party

If you are in the programing space, I'm sure you know what [Advent of Code](https://adventofcode.com/) is.

Recently I finished all and every one of the 115 [Ziglings](https://codeberg.org/ziglings/exercises/) excercises and I was looking into what could be **the next thing**. A graphics engine is surely to come, but I really need to interiorize Zig's syntaxis first. All those years of C# and C++ are not helping.

Sharing my incredible feat with a friend of mine, they reminded me of the existance of the Advent, which I have known about for quite some time but never really looked into it. After solving the first puzzle from 2015, I think this could be the thing! It is definitely easier than studying chinese, but contrary to my expectations, it took more time than I was expecting.

# 2015 - Day 1
You are given an amount of parenthesis in the form of a string and the rule:

```
'(' += 1 
')' -= 1
```

Simple enough!

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

I'll save the multi-threading for another occasion, but I was definitely tempted.
