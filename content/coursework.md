+++
author = "Tristen Nollman"
title = "Coursework"
date = "2023-03-13"
description = "Description of coursework taken"
tags = [
    "edu",
]
+++
# **By Course Level**
[Misc](#misc-courses) | [Core](#core-courses) | [100-level courses](#100-level-courses) | [200-level courses](#200-level-courses) | [300-level courses](#300-level-courses)

# **By Course topics**

Below is a comprehensive list of technical courses I have completed during my B.S. and M.S. in Computer Science at Stanford. Each course includes a brief description and a list of topics the course covered.

## Misc. Courses
{{< course ENGR40M >}}

{{< course CS41 >}}

{{< course CS45 >}}

{{< course CS106L >}}

{{< course CS110L >}}

## Core Courses

{{< course CS103 >}}

{{< course CS106B >}}

{{< course CS107 >}}

### CS109: Introduction to Probability for Computer Scientists
This was another really challenging class for me, since the math got pretty hard to follow toward the end of the 10 week quarter. However, it was super fun working on the problem sets and seeing all the different ways you could apply basic probability principles to solve novel problems around us. The last two assignments had us implment some basic machine learning stuff with MAP and MLE.

***Topics:*** Permutations & Combinations, Axioms of probability, combinatorics, naive and conditional probabilities, Baye's rule, Independence, Random variables & Expectation, Variance, Random Distributions (Bernoulli, Binomial, Poisson), Approximations, Continuous Random Variables, Normal distribution, Joint probability distributions, Independent Random Variables, Linear regression, Gradient ascent, Logistic Regression, intro to parameter estimation.

### CS110 : Principles of Computer Systems 
(This class is now CS111, which is slightly different and forgoes some of the content 110 had for a more gentle intro to some OS concepts such a virtual memory. This was done to stimulate more systems focused students in the department)

This was the second systems class in the core. I took it right after 107, during the first covid19 quarter of spring 2020 (when we were all inside...). I really enjoyed the class, and found it more challenging than 107 was. It covered many different systems principles, such as filesystems, intro to networking, using system calls, signals,how to use threads & processes, and MapReduce. Overall, this class did not dive deep into any one area, but really gave a basic intro to some key areas that reappeared later on in my systems career. For instance, learning filesystem abstractions helped later when I implemented a filesystem from scratch in my OS class, but also helped when implementing a TCP/IP stack since the layering abstraction technique was so similar.

***Topics:*** Filesystems, file descriptors, System calls, multi-processing, pipes, inter-process communication, Signals, multi-threading, basic virtual memory, race-conditions, condition variables, mutexes, semaphores, thread pools, client/server model, Servers and HTTP, MapReduce

### CS161 : DESIGN AND ANALYSIS OF ALGORITHMS
This class was the last theory course of the core, and focused on learning to critically analyze algorithms and data structures. We focused on writing proofs for algorithms, about things such as time and space complexity, as well as runtime completion. We went over searching, sorting, and selection algorithms, as well as various data structures like BSTs, heaps, hash tables. We covered algorithm paradigms such as divide-and-conquer, dynamic programming, and greedy algorithms. We also covered fundemental graph algorithms: min-cost spanning tree, connected components, topological sort, shortest paths, and network flows. 

***Topics:*** Searching, sorting, selection alorithms. Time/Space complexity, Heaps, Hash-tables, BST's, divide-and-conquer, dynamic programming, greedy algorithms, graphs, Djikstra's algorithm, A\*, BFS/DFS, Graph flows and cuts.

## 100 Level Courses
These courses are ones that are ***not*** a part of the CS core, but are > 100 and < 200.

### CS140E: OPERATING SYSTEMS DESIGN AND IMPLEMENTATION
This class was my favorite during my undergrad. The professor was super encouraging, and even though the content and class was super hard, I walked away deeply curious about OS design, and felt very empowered to hack on my own finally. We focused the entire quarter on building a basic OS on a raspberry pi model A+, and afterwards I spent many months on my own tinkering with the system, and even bought more ARM based boards to play with on my own.

***Topics:*** Virtual Memory, Threads, Processes, Filesystems, Interrupts, Exceptions, Synchronization, Memory Allocation, Netoworking, Linking, I/O & Disks

### CS142: Web Applications
This was not my favorite class. Nothing much to say about it. You learn JS, and basic web dev. We spent the quarter building a basic webapp that was essentially a instagram clone. We used React JS the whole time.

***Topics***: DOM, JS, React

### CS144: Intro to Networking
This was a really cool class, and a great intro into the 140-series courses. It covers the basics of the internet and networking, and then moves into more theory like content-delivery networks, network congestion and backoff, etc. We spent the quarter building our own TCP/IP stack in C++ that had to communicate with another student's implementation. 

***Topics:*** TCP, UDP, IP, DNS, DHCP, CDN, 4/5 layer model

### CS149: Parallel Computing
This was likely the hardest course I took during my undergrad. It focused on how to think about solving problems with different methods of parallel computing. We covered things like using modern multi-core processors and the complexities that comes with, GPU architecture and how to design programs to take advantage of GPU's, how to think about distributed data parallal systems, transactional memory, and some hardware specialization. The content was fast, and really challenging, but definitely the most rewarding class I have taken. I walked away feeling like I had learned so much that it was unreal, and I still am using things I learned in this course all the time when it comes to profiling and optimizing my systems.

We also covered performance optimization. Specifically, how to distribute work in our systems, how to effectively schedule that work for our goals, as well as how to use locality, communicate and avoid contention. I found this section particularly interesting, and is what inspired me to pursure the Verlet Playground project.

***Topics:*** Instruction-level parallelism, SIMD execution, Super-scalar execution, Multi-core execution, threading, latency & bandwidth, shared address space vs message passing, single-program multiple-data (SPMD), Work distribution, Cilk, ISPC, Scheduling, Locality, COmmunication, Contention, GPU architecture, CUDA programming, Data-parallel thinking, Spark, Cache coherence & memory consistency, Locks, fine vs coarse grained Synchronization, Lock-free programming, Transactional memory, Hardware specialization, Graph processing

### CS 152: Trust and Safety Engineering
This was a really interesting, albeit emotionally heavy, course. The class explores a lot of the ways that technology gets abused, and how people are trying to engineer technology to make it harder to abuse and use for abuse. You build a chat moderation bot as a group and write a report on it. It was a very inspiring class, because it makes you face the dark places of technology, but also as someone in the industry, I was able to identify valuable things for myself and how I can help some of the issues that were most important to me in this class.

***Topics:*** spam, fraud, account takeovers, misinformation, child exploitation, harassment, bullying and self-harm

### CS155: Intro to Computer and Network Security
This class was really interesting, and one that I had been looking forward to for a long time. It is taught by Dan Boneh, and surveys 3 areas of security. First we went over computer security basics, then touches web security, next networking and hardware, and finally mobile platforms. We had 3 programming assignments, and they were pretty cool. The first one had us implement attacks like use-after-free's and double free's to get a root shell. 

***Topics:*** Control hijacking, principle of least privledge, access control, OS security, isolation, sandboxing, fuzzing, static & dynamic analysis, Web attacks & defenses, cryptography, HTTPS, Spectre attack, DDoS, DoS attacks & defenses, Web privacy, anonymity, and censorship, Android & iOS security architecture

### CS157: Intro to Computational Logic
I dont have much to say for this one. I took it as a math elective, and it explores logic from a computational perspective. If you enjoy propositional and first-order logic, you would likely enjoy this. Unfortunetly, that is not me.

***Topics:*** syntax and semantics of Propositional Logic, Relational Logic, and Functional Logic, validity, contingency, unsatisfiability, logical equivalence, entailment, consistency, direct deduction (Hilbert), natural deduction (Fitch), refutation reasoning (Resolution), mathematical induction, compactness, soundness, completeness.

### EE180: Digital Systems Architecture
This was a superrrr interesting class. I took it since I had no real digital hardware experience, and wanted to understand more about RISC-V and ARM vs x86. It covered some really cool topics, and we got really intimate with the design constraints and tradeoffs of digital systems. We used MIPS as a ISA for this, but the ideas easily translate (mostly) over to RISC-V. As a bonus, one of the authors of our textbook is John Henessey, a creator of the modern micro-chip, and former Stanford president, and the other author is David Patterson, another creator of the modern micro-chip and former Berkeley professor, as well as advisor to the legendary professor of THIS class, Christos Kozyrakis. Getting to learn this stuff was cool enough, but learning it from such a cool person who literally researched under the author of this very well known book. I literally see this book recommended online all the time. 

***Topics:*** Hardware/Software interface, Efficiency metrics, Hardware design, Processor Design, Processor Pipelines, Memory hierarchy, Accelerators, Virtual Memory, OS support, I/O devices & interfaces, I/O optimizations

### CS182: Ethics, Public Policy, and Technological Change 
This was a really interesting class that explored a lot of different ethical problems that involve technology and pervade our lives. It was taught by 3 professors, one Computer Scientist, one Philospher, and one Politcal Scientist. All 3 were legendary, and you can google them if you wish. The class was cool, but very crowded and some of the discussion the other students had seemed pretty surface level. 

***Topics*** Algorithmic decision making, The political economy of technology, Data collection, Privacy, Civil liberties, AI and autonomous systems, power of private platforms, Blockchain & decentralized technical architectures

## 200 Level Courses
### CS240LX: ADVANCED SYSTEMS LABORATORY, ACCELERATED
This was a neat course taught by the same professor as CS140E, Dawson Engler (google him too!). It was a sort-of follow-up class, but not entirely constrained by the intro OS guidelines. We went over some advanced testing and debugging ideas, and implemented the Boehm garbage collector for C and leak detector on our own raspberry pi systems that we had built previously. It was a really cool process to read a paper, then implemenet the paper.We also did some miscellaneous stuff like build a hardware UART in a small FPGA, and detect thread races with interrupts. We also built a digital analyzer library for our custom system, which was actually insanely fast thanks to being on bare metal.

For our final project, I began to refactor my Pi's system to use Rust. It was difficult, and ultimately failed due to the way Rust and the specific Pi interacted. Essentially, ARmv6 bare metal is not a tier 1 Rust target, so you have to specify how to compile for it.No where along the way did anything mention needing an MMU to work, since usually you do this stuff on an MCU (micro-controller unit), not something as powerful as a raspberry pi. Turns out you need the MMU enabled for hardware atomics to work, and when setting up the system, we depended on some Rust atomics, which would try to execute, but just did not work silently. I have since moved on from the pi to newer hardware that Rust has tier 1 support for, and thus I can actually compile bare metal for without surprises.

***Topics*** Dynamic code generation, Eraser: dynamic race detector, Boehm GC, Relocatable bootloader

### CS253: Web Security
This class was really mind-blowing. We got to learn a ton about the web, and honestly it made me realize just how much duct-tape and luck is keeping it all together. From a security perspective (and others) the web is a mess. This class highlighted that in many ways, and taught us ways to exploit and defend against said exploits. 

***Topics:*** DNS, HTTP, HTTPS, Same Origin Policy, Cookies and Sessions, Session attacks, CSRF, XSS, XSS defenses, DoS, Phishing, Online tracking, Code injection, server security, Authentication, WebAuthn, Local HTTP server security, DNS rebinding attacks, Browser architecture, writing secure code

### EE282: Computer Systems Architecture
Currently enrolled in this class. I am excited to see what it will be like. The professor is legendary (Caroline Trippel!). Will update once I have finished the class.

***Topics:*** multi-level caches, cache optimizations, cache prefetching and coherency, memory consistency and synchronization, Main Memory (including HBM), Out-of-order processors, Speculative execution, super-scaler execution, multi-treading, Vectors, GPUs, Genomic Accelerators, AI Processors, Virtualization, Advances Memory Management, Datacenter Hardware management, Advances I/O, Non-volatile storage, Quantum Computing, Networking I/O

## 300 Level Courses
### CS340LX: ADVANCED SYSTEMS LABORATORY, ACCELERATED II
Second follow-up class in the OS series with Dawson. Dawson is a great mentor, and it was during this course he encouraged my application to the CS coterminal masters program. This 2-unit class was fun, and we all made labs for each other to do. I learned how to design PCB's here, which is how I learned to do it for the custom keyboard project. Otherwise, we did some cool hacking with the pi's, and built a networked bootloader.

***Topics:*** None really, mostly research level ideas, or just cool stuff.

