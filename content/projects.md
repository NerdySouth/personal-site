+++
author = "Tristen Nollman"
title = "Projects"
date = "2023-03-13"
description = "List of projects that I am working on, or have worked on in the past."
tags = [
    "projects",
]
+++
Below is a list of current and past projects I have worked on. Most of these are personalprojects, but some are bigger, open source projects as well.
<!--more-->
---

## *Ferrous* : a modern shell **(Current)**
### [repo](https://github.com/TristenSeth/ferrous)
I have gained a lot of systems experience and programming maturity since the last time I did a shell project, so I thought it would be cool to try to apply some of that to my own custom shell.

I am building this shell with Rust, since it makes a ton of things much nicer to deal with when building systems projects like this. This is actually a really good fit given all the nasty bugs you can encounter when implementing redirection and pipes. So far, I have gotten 0 segfaults, and debugging has been a breeze thanks to the borrow checker.

## *Verlet Playground* **(Current)**
### [repo](https://github.com/TristenSeth/verlet-playground)
This is meant to be a generic playground for me to play with physics simulation and animation. Currently, I am working to optimize collision detection on my 10 core M1 pro macbook pro. I plan to post a blog post soon about the initial research and findings.

## *Custom Keyboard* **(Current)**
There is no repo for this one yet, but I am building a custom keyboard from scratch. I have already sourced the parts, and built the first prototype. I hand wired that, and hated it, so now I am designing a PCB for my keyboard, so I can use sockets for my MCU's and the like. I will post a repo, and blog update on the project soon!

## Tock OS **(Past)**
### [repo](https://github.com/tock/tock)
I worked on implementing the changes for the Technical Reference Design for the UART capsule on the NRF52840 developer kit board. This is a 32bit Cortex-M board, and Tock OS is a secure embedded OS written in Rust, started here at Stanford. I worked under the supervision of Professor Phil Levis and EE PhD candidate Hudson Ayers. 





