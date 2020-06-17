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

There are a few ways to imagine how props get injected into your component. At the end of the day, Components are simply javascript functions that take a single object as a parameter and return another javascript function.

There has been some debate in the office about which method should be preferred.

A **HOC**, or Higher order component, is a function that takes another function and returns another function. 

```jsx
function HOCExample(Component){
  const extraProps = {...}
  return (props)=><Component {...props} {...extraProps} />
}
```
The idea is to be able to inject props into the component and hide them from the parent component.

**Hooks** are a much newer idea in React.

</section>

<section>

Babel helps with the return value of your components. 

Using the JSX syntax, you might write a component that looks like this:
```js
const HelloWorld = ({name}) => <div>hello {name}!</div>
```

babel will transpile that into
```js
"use strict";

const HelloWorld = ({
  name
}) => React.createElement("div", null, "hello ", name, "!");
```

</section>


</article>