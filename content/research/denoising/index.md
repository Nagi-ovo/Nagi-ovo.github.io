---
title: "Physics-Informed Data Denoising for Real-Life Sensing Systems"
tags:
  - "Sensing"
  - "Physics-informed"
date: Jun 2023 - Present
authors:
  - name: "Collaborated with Xiyuan Zhang, and others"
path: "research/pilot"
excerpt: Sensors measuring real-life physical processes are ubiquitous in today’s interconnected world. These sensors inherently bear noise that often adversely affects performance and reliability of the systems they support. Classic filtering-based approaches introduce strong assumptions on the time or frequency characteristics of sensory measurements, while learning-based denoising approaches typically rely on using ground truth clean data to train a denoising model, which is often challenging or prohibitive to obtain for many real-world applications. We observe that in many scenarios, the relationships between different sensor measurements (e.g., location and acceleration) are analytically described by laws of physics (e.g., second-order differential equation). By incorporating such physics constraints, we can guide the denoising process to improve even in the absence of ground truth data. In light of this, we design a physics-informed denoising model that leverages the inherent algebraic relationships between different measurements governed by the underlying physics. By obviating the need for ground truth clean data, our method offers a practical denoising solution for realworld applications. We conducted experiments in various domains, including inertial navigation, CO2 monitoring, and HVAC control, and achieved state-of-the-art performance compared with existing denoising methods. Our method can denoise data in real time (4ms for a sequence of 1s) for low-cost noisy sensors and produces results that closely align with those from high-precision, high-cost alternatives, leading to an efficient, cost-effective approach for more accurate sensor-based systems.
selected: false
cover: "./preview.png"
links:
  - name: "Sensys23 Paper"
    url: "https://xiyuanzh.github.io/assets/publications/PILOT.pdf"
priority: -20
---