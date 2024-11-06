---
title: "Improving gVisor Memory Subsystem Performance"
tags:
  - "Operating System"
  - "Virtualization"
  - "Open Source Contribution"
date: Jan 2020 - June 2020
# venue: DOTA2
# authors:
#   - "Xiaohan Fu, Jason Koh, "
path: "research/gvisor_optimization"
excerpt: In this project, we analyzed the performance of the gVisor memory management subsystem, starting from benchmarking malloc and ending up focusing on MMAP. We further profiled MMAP performance within gVisor and identified its bottlenecks. We proposed an optimization in the free page searching algorithm of virtual memory space within gVisor (from O(N) to O(logN)). This optimization patch has been merged into production. 
selected: true
cover: "./logo.png"
links:
  - name: "code"
    url: "https://github.com/google/gvisor/commit/059879e14301660c9fce1e5e59bdfaef89fc4aaf"
  - name: "slide"
    file: "./final_pre.pptx"
  - name: "report"
    file: "./cse291_project_final_report.pdf"
priority: -8
---

## Introduction

In this project, we analyzed the performance of the gVisor memory management subsystem, starting from benchmarking malloc and ending up focusing on MMAP. We further profiled MMAP performance within gVisor and identify its bottlenecks. We proposed an optimization in the free page searching algorithm of virtual memory space within gVisor (from O(N) to O(logN)).

This work has been merged into the production version of [gVisor](https://github.com/google/gvisor). For technical details, please refer to the [code/commit](https://github.com/google/gvisor/commit/059879e14301660c9fce1e5e59bdfaef89fc4aaf), [slide](./final_pre.pptx), and [report](./cse291_project_final_report.pdf).