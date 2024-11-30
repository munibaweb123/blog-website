---
title: Next.js Tutorial
slug: nextjs-tutorial
description: this is next.js tutorial and this is for learning next.js.
date: 30/11/2024
author: Muniba
image: /blog/blog1.jpg
---

# Table of Contents

1. Introduction
   - What is Next.js?
   - Why use Next.js?

2. Prerequisites 
   - React basics
   - Node.js installation  
   - Code editor setup

3. Benefits of Next.js
   - Server-side rendering
   - Static site generation
   - API routes
   - File-based routing 
   - Built-in optimization

4. Getting Started
   - Installation guide
   - Next.js setup

# Introduction

What is Next.js and why should we learn it? Next.js is a React framework that enables functionality like server-side rendering and static site generation. It is a production framework developed by Vercel that makes React applications more performant and SEO friendly.

## Prerequisites 
- Basic knowledge of React
- Node.js installed
- Code editor (VS Code recommended)

## Benefits of Next.js
1. Server-side rendering
2. Static site generation
3. API routes
4. File-based routing
5. Built-in optimization features

## Code Examples

### Client-Side Rendering (CSR)
```jsx
// pages/csr-example.js
import { useState, useEffect } from 'react'

export default function CSRPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return <div>{data ? data.message : 'Loading...'}</div>
}
```
### Server-Side Rendering (SSR)
```jsx

// pages/ssr-example.js
export default function SSRPage({ data }) {
  return <div>{data.message}</div>
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }
  }
}
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js API!' })
}
```
### Installation Guide
To install Next.js, run this command in the command prompt:
```jsx
npx create-next-app@latest
```

### Navbar Example with home, about and contact page:
```jsx
// components/Navbar.tsx
import Link from 'next/link'

export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white text-xl font-bold">Logo</Link>
        <div className="space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
```
### home page:
```jsx
// pages/index.tsx
export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
      <p className="text-lg">
        This is the home page of our Next.js application.
        Here you can showcase your main content.
      </p>
    </div>
  )
}
```
### about page:
```jsx

// pages/about.tsx
export default function About(): JSX.Element {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        We are a company dedicated to building amazing web applications
        using Next.js and other modern technologies.
      </p>
    </div>
  )
}
```
### contact page:
```jsx
// pages/contact.tsx
export default function Contact(): JSX.Element {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message:</label>
          <textarea className="w-full p-2 border rounded" rows={4}></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  )
}
```
### import navbar and components in your _app.tsx file
```jsx

// pages/_app.tsx
import { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
```