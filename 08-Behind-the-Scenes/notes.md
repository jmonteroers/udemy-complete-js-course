# Chapter 7. JS, Behind the scenes

## High-Level Overview

- High level
  - vs low level, such as C, where you have to manage resources
  - Related to garbage-collected (algorithm to remove unused objects)
- Interpreted/JIT compiled
  - Our instructions need to be compiled to machine-code as we type!
  - This JIT compilation takes place in the JS Engine
- Multi-paradigm (procedural, OO, functional or Imperative vs Declarative)
- Prototype-based object-oriented
  - Except primitives, everything is an object!
  - Prototype/inheritance based objects (Class as blueprints)
- First-class Functions
- Dynamic
  - Dynamically typed (vs strongly typed), not need to assign type to variables; variables can change their types over time
- Single-threaded
  - Thread: set of instructions that are executed by the CPU
- Non-blocking event loop

## JS Engine and Runtime

JS Engine = program that executes JS code, such as the V8 engine (Chrome, node js)

Components:

- Call Stack: where our code is executed, relies on the execution context
- Heap: where objects in memory are stored

### Compilation vs. interpretation

Compilation mode has two steps to execute a programme, compilation, and then execution.

In interpretation, source code is executed line by line.

Modern JS uses a mix between compilation and interpretation, called JIT compilation. Basically, the JS engine compiles _as much as it can_ and then executes it, without creating a binary file in between.

### Modern JIT

- Parsing, that builds the Abstract Syntax Tree (AST). This step also checks whether there any syntax errors
- Compilation, translates the AST into machine code
- Finally, there is a running optimization loop that keeps compiling and executing our code as we type! This is a completely separate process from the JS event loop.

### JS Runtime

The main runtimes are the browsers, 'boxes' that contain all the tools that we need to run JS. Runtimes always have:

- A JS Engine
- Web APIs, to interact with the DOM, console, timers...accessible by window object
- Callback queue, all data structures that are ready to be executed (callback functions for DOM event listeners, clicks, timers...). The Event Loop takes functions from the Callback queue and moves them to the Call Stack

## Execution Contexts and the Call Stack

Esse laborum dolor commodo nulla aliqua adipisicing qui adipisicing. Consectetur officia occaecat commodo proident eiusmod ipsum consequat irure excepteur quis anim proident labore. Mollit fugiat ad est incididunt. Ea reprehenderit nulla velit aliqua deserunt commodo voluptate ea. Duis ut ad elit deserunt tempor aute. Ipsum anim mollit elit cupidatat exercitation elit duis ad laborum voluptate. Consequat consectetur voluptate esse occaecat enim veniam mollit nulla anim.

Steps in running the code:

- Code compiled
- Global Execution Context created based on Top-level code
- Execution of top-level code
- Functions are created and engine waits for callbacks to be called
- We keep track of execution code using the Call Stack. The Call Stack works by First In, Last Out and contains the Execution Contexts (heap of pizza boxes)

### What is an execution context?

It is the environment where JS code is executed, and stored the information necessary for execution. It's like the pizza box for our code, that is the pizza.

It contains:

1. Variable Environment

- let, const, var declarations
- Functions
- `arguments` object

2. Scope chain. References outside functions
3. `this` keyword.

Note that the variable environments for _arrow functions_ do not have their own `arguments` and `this` objects, instead they use the parent execution context objects.

#### Example

Pariatur laborum Lorem officia non. Veniam cillum nulla sint aliqua ex dolor proident ut. Minim nulla occaecat nulla adipisicing voluptate ullamco consectetur labore non consequat nulla culpa. Duis culpa nulla culpa mollit aute non commodo eiusmod do consequat. Qui commodo aute ex sunt officia incididunt adipisicing excepteur cupidatat. Mollit mollit est incididunt esse consectetur.

## Scope and the Scope Chain

Mollit ex labore labore deserunt occaecat proident ad cillum deserunt exercitation voluptate aliquip et deserunt. Ipsum minim ut quis excepteur. Nulla fugiat ad pariatur aliqua sunt sunt. Pariatur in fugiat consectetur mollit ad esse labore incididunt do id sint consequat aliquip.ß
