---
title: "Secure and Private 'Dating' System"
tags:
  - "Cryptography"
  - "Security and Privacy"
date: May 2019 - June 2020 (Suspended)
# venue: DOTA2
# authors:
#   - "With "
path: "research/dating"
excerpt: Dating applications are widely adopted all over the world. However, most of them do not have a very good security and privacy guarantee. On one hand, who's confessing love to whom is not something secret to the service provider. On the other hand, if the target user B of user A refuses the request, severe embarrassment will be caused in between them. In this project, we aimed to tackle these two issues. We proposed a preliminary cryptography protocol for this and developed a WeChat MiniApp on top of this scheme. 
selected: false
cover: "./preview.png"
links:
  - name: "code"
    url: "https://github.com/secure-private-dating"
  - name: "poster"
    file: "./Fu Xiaohan - PosterPresentations..pdf"
  # - name: "report"
  #   file: "./cse291_project_final_report.pdf"
---

## Introduction

People in the same group (e.g., students in the same class or employees in the same office), may develop a
romantic interest in one another. However, this may cause embarrassment, perhaps even leading to an
end of a friendship or difficulty in collaborating. For this reason, people are often shy about speaking out
their interest in another person. However, at the same time, not being able to confess an interest would
also be unfortunate when two people are coincidentally mutually interested. To avoid this, we aim to
solve the problem at its source, which is to prevent the potential for embarrassment while still
registering the interest, maintaining the security and privacy of the source party.

In addition, we want to keep all the "relationships" private even to the service provider.

## Note

I came up with this project idea in my senior year at UM-SJTU JI and took it as my capstone design project. The scheme we came up was preliminary. I tried to continue this project after joining UCSD and talked to Mihir, Deian and Daniele. Based on the conversations, I presented an improved version at the 2019 CSE Research Open House poster session to collect more feedbacks. Currently, this project is suspended for lack of cycles. But I'm still interested in this problem and will devote more time to it if there's a chance.

## Future Work

Some thoughts about future directions:
1. Give a formal cryptography definition (probably game-based) on "security" and "privacy" in this context.
2. Give a scalable protocol which satisfies the above definition.
3. Connect to contact-tracing problem and homomorphic encryption.