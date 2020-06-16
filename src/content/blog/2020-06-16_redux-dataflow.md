---
title: Redux Dataflow
date: 2020-06-16T20:10:46.135Z
---
<article>
<h3 children={title}/>

<heading>
React VirtualDOM
</heading>

Its hard to explain redux data flow without first talking about the react's virtual dom.

The [React VirtualDOM](https://reactjs.org/docs/faq-internals.html) is probably the most complicated part of react, so I'll avoid discussing it in depth. 
React keeps track of components in a similar tree shaped structure to a regular [HTML DOM](https://www.w3schools.com/whatis/whatis_htmldom.asp). 
Parent components have children components. 
React provides hooks from each layer onto the next layer, using props.

The React virtual dom does some optimizations here, such that if the props that go into a component don't change, then the component doesn't change, and the actual DOM doesn't need to be updated.

In order to pass props into a component, without having to pass that prop into the parent of the component as well, React provides [Context](https://reactjs.org/docs/context.html).

<section>

This is a little complicated

</section>


</article>