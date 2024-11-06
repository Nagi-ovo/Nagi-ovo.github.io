---
title: "Context-Aware, Continuous Authentication Using Biometrics & Fuzzy Extractors"
tags:
  - "Security & Privacy"
  - "Cryptography"
date: Jun 2020 - Present
# venue: DOTA2
authors:
  - name: "With Rahul Chatterjee, Varun Chandrasekaran"
path: "research/mf_auth"
excerpt: In our work, we deviate from the status quo and show how users can authenticate themselves using biometrics whilst. We utilize primitives from cryptography -- namely fuzzy extractors -- to ensure that there is no requirement to perform template matching (of a template stored in the clear) on trusted hardware.
selected: true
cover: "./preview.jpeg"
priority: -9
# links:
#   - name: "BuildSys20 Poster"
#     file: "./buildsys20postersdemos-final8.pdf"
#   - name: "image"
#     file: "./preview.png"
#   - name: "website"
#     url: "https://www.dota2.com/diretide/?l=english"
---

## Introduction

User authentication is the process of verifying if an individual is whom they claim to be whilst desiring access to a particular resource. Common approaches in the status quo involve utilizing passwords and pins, but these are relatively insecure when chosen improperly, and requiring greater security induces a larger mental burden on the user. A more convenient alternative requires using various physical biometrics (such as scans of fingerprints and the iris), or behavioral biometrics (such as keystrokes or gait), but these have their own limitations and pitfalls.

The crucial inhibiting factor whilst using biometrics, however, is the noisiness of the readings. That is, two readings of a fingerprint (for example) may not be the same due to various factors. It is expected that despite these "errors", the authentication should be successful. To this end, there are various protocols that are developed. However, these protocols have the following shortcomings: (S1) they rely on template matching, which (S2) require the template to be stored in the clear, on (S3) trusted hardware. 

In our work, we deviate from the status quo and show how users can authenticate themselves using biometrics whilst alleviating the aforementioned shortcomings. We utilize primitives from cryptography -- namely fuzzy extractors -- to ensure that there is no requirement to perform template matching (of a template stored in the clear) on trusted hardware. However, using fuzzy extractors for readings from continuous sources (such as those we consider) has been sparingly studied. Additionally, using fuzzy extractors often leads to "entropy loss" i.e. the security guarantees associated with biometrics reduces. To solve the first issue, we propose a new construction for fuzzy extractors in continuous space. This construction relies on quantization, and attempts to minimize the entropy loss. To add additional security, the construction can be used for "multiple" biometrics (which are assumed to be independent) to amplify security. Another added benefit is that the constructions we propose are computationally efficient, and can run on commodity devices such as mobile phones.
