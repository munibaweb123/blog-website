---
title: Typescript Tutorial
slug: typescript-tutorial
description: this is typescript tutorial and this is for learning typescript.
date: 30/11/2024
author: Muniba
image: /blog/blog3.jpg

---

# Table of Contents

1. Introduction
   - What is TypeScript?
   - Why use TypeScript?

2. Prerequisites 
   - JavaScript basics
   - Node.js installation
   - Code editor setup

3. Benefits of TypeScript
   - Strong typing system
   - Better IDE support 
   - Object Oriented features
   - Early error detection
   - Enterprise level development

4. Getting Started
   - Installation guide
   - TypeScript setup

# Introduction

What is TypeScript and why should we learn it? TypeScript is a superset of JavaScript that provides static typing. It is a programming language developed by Microsoft that makes JavaScript code more scalable and maintainable.

## Prerequisites 
- Basic knowledge of JavaScript
- Node.js installed
- Code editor (VS Code recommended)

## Benefits of TypeScript
1. Strong typing system
2. Better IDE support
3. Object Oriented features
4. Early error detection
5. Enterprise level development support

## Installation Guide
To install TypeScript, run this command in the command prompt:
```bash
npm install -g typescript
```
### Variables in TypeScript

```bash
// String variable
let name: string = "John";

// Number variable
const age: number = 25;

// Boolean variable
let isStudent: boolean = true;
```

### Arrays in TypeScript

```bash
// Number array
let numbers: number[] = [1, 2, 3, 4, 5];

// String array
let fruits: Array<string> = ["apple", "banana", "orange"];
```

### Loops in TypeScript

```bash
// For loop
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while(count < 5) {
    console.log(count);
    count++;
}

// ForEach loop with array
let colors: string[] = ["red", "blue", "green"];
colors.forEach(color => console.log(color));
```

### Conditional Statements
```bash
// If-else statement
let score: number = 85;
if(score >= 90) {
    console.log("Excellent!");
} else if(score >= 80) {
    console.log("Good job!");
} else {
    console.log("Keep trying!");
}

// Switch statement
let day: number = 1;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}
```