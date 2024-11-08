---
title: "MemoMusic 3.0: Considering Context at Music Recommendation and Combining Music Theory at Music Generation"
tags:
  - "Music Recommendation"
  - "Music Generation"
  - "AIGC"
date: Feb 2022 - Sep 2022
# venue: DOTA2
# authors:
#   - name: "WitInstructed by "
path: "research/memo-music3.0"
excerpt: MemoMusic 3.0 enhances personalized music recommendation by considering the music listening context, and improves music generation by introducing music theory. One observation is that the context of music listening would affect the emotional states of listeners, positively or negatively. The other is that better music can be generated by introducing some music theory knowledge. We propose a Transformer-based music generation framework, which is trained into three models for Classic, Pop, and Yanni music respectively. The dominant melody of a music with expected Valence and Arousal values is used as a sample sequence to the model, and its output is adjusted according to music theory. Experimental results demonstrate that MemoMusic 3.0 performs better at improving the emotional states of listeners and achieves better user satisfaction.  

selected: true
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

**MemoMusic 3.0** is a sophisticated music recommendation and generation system that enhances user experience by considering the context in which music is listened to and integrating music theory into the generation process. The system aims to improve emotional states by recommending music that aligns with the listener's current context, such as *time of day*, *weather*, and *environment*. It also generates music that is not only emotionally evocative but also adheres to musical theory, ensuring a pleasant and coherent listening experience.

The recommendation part of MemoMusic 3.0 takes into account the listener's emotional state, which is influenced by personal preferences, internal health, and external activities. It uses a combination of self-assessment and music-induced memory to determine individual emotional states more accurately.

For music generation, MemoMusic 3.0 employs a **Transformer-based model** that is trained on different types of music: Classic, Pop, and Yanni music. The model adjusts the output notes based on music theory to ensure they fall within a certain pitch range and to maintain a stable rhythm. It uses the dominant melody of a sample sequence with desired emotional values as a guide for generating new music sequences.

The experimental results show that MemoMusic 3.0 effectively improves listener satisfaction and emotional states. The system was tested with a group of music fans who participated in a *four-round experiment*, providing feedback on both the recommendation and generation aspects. The study found that the music generated by MemoMusic 3.0 was more emotionally engaging than the previous version, with participants reporting positive memories and improved emotional regulation.

## My Contributions

- Involved in the design of the model architecture
- Main developer of the [experiment platform](https://github.com/MZhexin/MemoMusic-front) (React.js & Flask)
- Conducted experiments and analyzed the results