---
title: The Line Length Rabbit Hole
date:
---

<article>

<heading>
Where do we begin?
</heading>

<section>

Line lengths 

It's a tail as old as time. Line lengths are a tensly discussed, highly polerized
space, and has been sine the dawn of computers. Opinions have been formed and 
won't change. There are no new facts to be gathered. Story over...  Done?

Our story begins, as most, with a code review. This was part of a proposed change

```diff
-ssize_t __kernel_write(struct file *file, const void *buf, size_t count, loff_t *pos)
+ssize_t __kernel_write(struct file *file, const void *buf, size_t count,
+               loff_t *pos)
```

> Please don't do these kinds of pointless whitespace changes.
>
> If you have an actual 80x25 vt100 sitting in a corner, it's not really
> conducive to kernel development any more.
>
> Yes, yes, we'd like to have shorter lines for new code, but no, don't
> do silly line breaks that just makes old code look and grep worse.

</section>

<section>

Linus Torvolds seems to think 80 charactor line lengths are to short. Maybe
he's right.

> But do we really have 80x25 terminals any more that
> we'd care about?

https://lkml.org/lkml/2020/5/29/1038

This got me thinking. Why did we choose 80 character line lengths?

</section>

<section>
Wiki article on line lengths

https://en.wikipedia.org/wiki/Line_length

> In typography, line length is the width of a
> block of typeset text, usually measured in
> units of length like inches or points or in
> characters per line (in which case it is a
> measure). A block of text or paragraph has a
> maximum line length that fits a determined
> design. If the lines are too short then the
> text becomes disjointed; if they are too
> long the content loses rhythm as the reader
> searches for the start of each line.

</section>

<section>
Mostly, I DO NOT CARE. Pick a number and never speak of it again, formatting
is best nit picked by compilers and I shouldn't have to mention it on a review
or read about it on a blog post.
</section>

</article>
