+++
title = "Markdown Style"
date = 2024-08-14
[extra]
tags = ["Test"]
+++

# An H1 Header

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

## An H2 Header

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

### An H3 Header

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

#### An H4 Header

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

##### An H5 Header

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

###### An H6 Header

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

# Emphasis:

_This is italic text!_

**This is bold text!**

**_This is both text!_**

This is \*\*\_nothing\_\*\* text!

# Quote:

> Of all the things I've lost
> I miss my mind the most. - Mark Twain

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

> Measuring programming progress by lines of code is like measuring aircraft building progress by weight. — Bill Gates

# Lists:

- Item 1
  - Sub-item 1
  - Sub-item 2
- Item 2
- Item 3
  - Sub-item 1

1. Item 1
   1. Sub-item 1
2. Item 2
   - Sub-item 1
3. Item 3
4. Item 1
5. Item 2
6. Item 3

- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

  Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

  Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.

- Nulla facilisi. Mauris eleifend felis a purus pretium egestas

# Code:

Without code block:

    def fibonacci(number):
        if number <= 1:
            return number
        else:
            return fibonacci(number - 1) + fibonacci(number - 2)

With code block:

```
def fibonacci(number):
    if number <= 1:
        return number
    else:
        return fibonacci(number - 1) + fibonacci(number - 2)
```

With code block and language:

```python
def fibonacci(number):
    if number <= 1:
        return number
    else:
        return fibonacci(number - 1) + fibonacci(number - 2)
```

# Separators:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

# Links:

[Stack Abuse](http://stackabuse.com "Stack Abuse Title")

In JavaScript, use `console.log()` to print to the console.

A backtick `` ` `` is used for code blocks.

![My Alt Text](/../../images/pc_logo.png "My Optional Title Text")

![My Alt Text][id]

<http://stackabuse.com>

<address@example.com>

[id]: /../../images/pc_logo.png "My Optional Title Text"
