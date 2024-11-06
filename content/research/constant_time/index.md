---
title: "Constant-Time Analysis for Well-Known Cryptography Libraries"
tags:
  - "Security & Privacy"
  - "Programming Language"
  - "Cryptography"
date: Apr 2020 - Present
# venue: DOTA2
# authors:
#   - name: "WitInstructed by "
path: "research/constant_time"
excerpt: This project presents a toolset for assessing whether a cryptographic function is constant-time on two given (distinct)input sets. The toolset extends new support to languages other than C or C++, including Python3, Golang, and JavaScript. We present a comprehensive test suite covering common cryptographic primitives and providing finely-chosen inputs that can cause non-constant-time behavior of certain implementations. We then evaluate our approach by applying this test suite to a set of libraries with our toolset and observing the violations that are detected. Our preliminary results suggest that language runtime features such as JIT may break the constant-time requirement.
selected: false
cover: "./preview.png"
links:
#   - name: "BuildSys20 Poster"
#     file: "./buildsys20postersdemos-final8.pdf"
  - name: "draft(pdf)"
    file: "./draft.pdf"
# - name: "draft(pdf)"
#     url: "https://www.dota2.com/diretide/?l=english"
priority: -6
---

## Introduction

Timing attacks on cryptosystems have long been researched since 1996. Various attacks, such as cache timing attack on AES, and defenses, such as timing attack resistant AES-GCM, over widely used cryptography algorithms have been developed and applied to well-known libraries, such as OpenSSL. Tools have been developed for analyzing the time-constancy of a crypto-function implemented in C or C++. The time-constancy of cryptographic libraries implemented in other languages remains an understudied area. Consequently, applications and websites based on these libraries may suffer from potential security vulnerabilities. 

In this project, we aim to detect whether popular cryptographic libraries in Golang, JavaScript and Python 3 have constant-time implementations. Our contributions are: 

1. A constant-time assessment tool for Golang, JavaScriptand Python 3 evolved from [dudect](https://github.com/oreparaz/dudect).
2. A test suite against common cryptography primitives.
3. Presentation and discussion of the results of evaluating the official Crypto library (and its extension) of Golang, PyCrypto, Cryptography, and PyCryptodome of Python3, and the official Cryptolibrary of Node.js

## Ongoing Work

Future work will extend these preliminary investigations by
1. expanding the test vectors with more implementation-specific inputs
2. taking hardware optimization into consideration in measurements
3. delving into the impacts of runtime/JIT of Python and JS on constant-time implementations.
