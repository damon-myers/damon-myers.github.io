---
title: Key-Value Database From Scratch - Part 1
date: 2021-10-13T23:05:16-07:00
draft: false
author: Damon Myers
description: The first post in a series about building a simple key-value store from the ground up.
---

*This series of posts is inspired by Chapter 3 of [Designing Data-Intensive Applications](https://dataintensive.net/) by Martin Kleppman. If you haven't read the book yourself, I highly recommend doing so!*

## Objective

The goal of these posts is to walk through implementing a simple key-value store from scratch in Go. We'll implement everything ourselves, so that we gain a deeper understanding of how these systems work.

The database we build will not be production-ready, but the concepts underlying it will be the same as those in real, production-ready databases.

## Scope

Our key-value store will support very few operations:

- `SET key, value` -> store a value at a specific key
- `GET key, value` -> retrieve a value at a specific key
- `DELETE key, value` -> remove a value at a specific key

We'll implement those operations in the simplest way possible for now, but later posts will cover:

- Recovering from failures/crashes
- Getting better than `O(n)` performance on read/write
- Minimizing disk usage with compaction
- Making our database accessible via TCP
- Distributing our database

## A Starting Point

What is a database? 

<!--TODO: Describe a database in the simplest terms-->

<!--TODO: Describe how we'll implement the littlest possible to satisfy that definition -->

### `SET`

### `GET`

### `DELETE`

## Conclusion
