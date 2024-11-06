---
title: "Smart Building and Sensing"
tags:
  - "Smart Building"
  - "Operating System"
date: Oct 2019 - Present
authors:
  - name: "With Jason Koh, Dezhi Hong, Rajesh K. Gupta, and Gabe Fierro."
path: "research/brick_bos"
excerpt: The recent advancement in Cyber Physical Systems (CPS) and the Artificial Intelligence of Things (AIOT) has brought significant productivity and utility enhancement across all walks of life. However, safety and security concerns and usability challenges have prohibited the wide adoption of AI-powered smart "things" in large-scale real-world systems. My research aims to close this gap by enabling secure and safe interaction with Cyber-Physical Systems in a user-friendly manner. Smart commercial buildings, typical examples of CPS with numerous, multi-tenant, distributed, and interconnected IoT devices, are my main testbed. 
selected: true
cover: "./preview.png"
links:
  - name: "ICCPS24 Paper (Best Paper Nomination)"
    url: "https://ieeexplore.ieee.org/abstract/document/10571633"
  - name: "BuildSys20 Poster"
    url: "https://dl.acm.org/doi/10.1145/3408308.3431113"
  - name: "Code"
    url: "https://github.com/BrickSchema/playground"
  - name: "BuildSys23 Paper (BEAR)"
    url: "https://dl.acm.org/doi/10.1145/3600100.3623740"
  - name: "RLEM22 Paper (B2RL)"
    url: "https://dl.acm.org/doi/abs/10.1145/3563357.3566164"
  - name: "Sensys23 Paper (PILOT)"
    url: "https://xiyuanzh.github.io/assets/publications/PILOT.pdf"
priority: -20
---

## Safe, Secure and Usable Building Operating Systems. 
Building operating systems (BOS), similar to classical OS, provide essential services to applications running on commercial buildings. The current state-of-the-art requires applications to be *trusted* and *carefully* monitored due to a lack of authorization, access control, and execution isolation mechanisms that could handle the complexity and scale of modern buildings in a *usable* manner.  To address this, we propose a new building operating system abstraction, that incorporates a structured semantic representation of the building to enable our novel dynamic and expressive access control and resource isolation mechanisms. Our design significantly decreases the manual effort required to deploy building applications safely and securely. We plan to explore arbitration mechanisms which are also essential in shared resource isolations.

[ICCPS24 Best Paper Nomination🏆 (Playground)](./24ICCPS_SBOS.pdf), [Code](https://github.com/BrickSchema/playground)

## Data-driven Health-Aware Building Control 
Traditional building control has focused on balancing energy efficiency and thermal comfort. Under the background of the global pandemic, we propose indoor breathing health (virus transmission rate) as one additional factor to consider. We explore two directions to address this new trade-off triangle. First, we attempt to model the dynamics of airflow, thermal, and air quality using Partial Differential Equations (PDE) based on the state of the indoor environment including temperature, CO2 density, airflow from the ventilation source, etc to optimize HVAC control actions (paper under review). Second, we explore data-driven methods such as offline reinforced learning methods that utilize historical data of the building to guide future operations (work in progress). To enable data-driven methods and benefit the general CPS community, we have been and will keep actively collecting and maintaining relevant sensing datasets. In this process, we find that more affordable sensors usually suffer from low stability. We use physics-informed machine learning models to denoise unstable sensors and therefore one may replace high-end sensors with less costly counterparts in the deployment. 

[Buildsys20 Demo (Zonal Air Control)](https://doi.org/10.1145/3408308.3431113), [Press](https://today.ucsd.edu/story/bringing-together-real-world-sensors-and-vr-to-improve-building-maintenance)

[BuildSys23 (BEAR)](https://dl.acm.org/doi/10.1145/3600100.3623740), [Dataset](https://ucsdsmartbuilding.github.io/DATA)

[RLEM22 (B2RL)](https://dl.acm.org/doi/abs/10.1145/3563357.3566164), [Dataset](https://github.com/HYDesmondLiu/B2RL)

[Sensys23 (PILOT)](https://xiyuanzh.github.io/assets/publications/PILOT.pdf)

## User-friendly Building Control Interaction 
The interaction that building managers must make to control or debug a building has long been a hassle. We find three major pain points:

- the inconvenience of locating the hardware control point of interest due to the complexity and scale of buildings
- the lack of usable mechanisms to record on-site inspection results with spatial and temporal metadata;
- the redundant efforts involved in making series of control operations with minor differences.

To address the first two issues, we utilize Mixed Reality (MR) techniques and create a digital twin of the building and building hardware connected to the BMS. Users can find and inspect points of interest simply by interacting with the MR scene. We also build a companion handheld sensing device that reports sensing data with real-time temporal and spatial info to the MR scene which enables replay of prior inspections at ease. For the last issue, we plan to explore the incorporation of LLMs into the building control interaction. We envision that CPS operators will use natural language to describe the desired operations seamlessly and LLMs should interpret and execute the operations accordingly.

[Buildsys23 Demo (Building MR)](https://doi.org/10.1145/3600100.3626258), [Press](https://www.kpbs.org/news/environment/2022/05/18/building-design-may-adapt-life-airborne-viruses)
