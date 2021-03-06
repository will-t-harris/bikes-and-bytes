---
path: "/rendering-elements-with-jsx"
title: "React: Rendering Elements with JSX"
date: "2020-05-25"
---

[Last week we introduced JSX](/jsx-basics) and discussed how it is a syntax extension to JavaScript that makes life easier when writing HTML and JavaScript in React.

Today, let's talk about how we can use JSX to render elements in the DOM.

## React Elements in the DOM

[The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) is an abstract representation of a document as a logical tree in memory.

In regular JavaScript, we typically access and change, or _mutate_, nodes on the tree directly using methods like `document.querySelector()`, `document.appendChild()`, and `document.removeChild()`. This involves traversing the DOM and directly changing elements in the tree.

So, if we wanted to insert a header into our HTML document using JavaScript we would do something like:

```javascript
// Assuming that we have a <div> element in our HTML document with an id of 'root'
const container = document.querySelector("#root")

const element = document.createElement("h1")
element.textContent = "Hello world!"

container.appendChild(element)
```

Unfortunately this process is relatively slow and inefficient, particularly in larger applications.

React does things a little differently. Rather than directly interacting with the DOM, in React we pass all of our DOM nodes to the `ReactDOM.render()` method:

```jsx
ReactDom.render(element, container[, callback])
```

The `render()` method takes the element that we want to render, and the container DOM node that we want to render into.

We can also pass an _optional_ callback function to the `render()` method, which will be executed after the element is rendered or updated.

The simplest example of how this plays out can be found in [the React docs](https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom):

```jsx
// Assuming that we have a <div> element in our HTML document with an id of 'root'

const element = <h1>Hello React!</h1>
ReactDOM.render(element, document.querySelector("#root"))
```

This example will display "Hello React!" on the screen, using `ReactDOM` to add our `h1` element to the DOM node with the id of `root`.

## React Elements are Immutable

Unlike normal DOM nodes, React elements are _immutable_.

In the above example, the only way for us to change the contents of our `h1` element would be to pass another, different element to `ReactDOM.render()`, essentially overwriting our entire application.

In practice, we usually make one call to `ReactDOM.render()` as our application starts, and then rely on `ReactDOM` to update pieces of our application as necessary. Again from [the React docs](https://reactjs.org/docs/react-dom.html#render):

> `ReactDOM.render()` controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called. Later calls use React’s DOM diffing algorithm for efficient updates.

In other words, when we pass elements off to `ReactDOM.render()` we are allowing React to act as our interface between the browser's DOM and the elements that we are writing in JSX.

As the state of our application changes, React deals with efficiently updating only the pieces of the DOM that _must_ be changed using its 'diffing algorithm.'

Because we can rely on React to do this efficiently, we no longer need to directly traverse the browser's DOM nodes with JavaScript to _mutate_ values. **This is a big part of React's secret sauce**, and we will spend much more time examining how exactly this happens in future posts.
