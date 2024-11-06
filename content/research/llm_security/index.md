---
title: "Misusing Tools in Large Language Models With Adversarial Examples"
tags:
  - "LLM"
  - "Security"
date: Jun 2023 - Present
authors:
  - name: "advised by Earlence Fernandes and Taylor Bert."
path: "research/llm_security"
excerpt: LLMs are being enhanced with the ability to use tools and to process multiple modalities (and formulate agents). These new capabilities bring new benefits and also new security risks. In this thrust of work, we show a novel threat model where an attacker can use automatically generated adversarial examples to cause attacker-desired tool usage. For example, the attacker could cause a victim LLM to delete calendar events, leak private conversations and book hotels.
selected: true
cover: "./llm-attack.png"
links:
  - name: "Press(WIRED)"
    url: "https://www.wired.com/story/ai-imprompter-malware-llm/"
  - name: "Website (Imprompter)"
    url: "https://imprompter.ai"
priority: -20
---

Imprompter, the latest work in this direction, is available at https://imprompter.ai and has been covered by WIRED [here](https://www.wired.com/story/ai-imprompter-malware-llm/). In this work, we show real-world attacks on [Mistral LeChat](https://chat.mistral.ai/chat) and [ChatGLM](https://chatglm.cn/main/alltoolsdetail?lang=en). Mistral AI, has acknowledged our contribution and addressed this issue by disabling the markdown image rendering feature in LeChat. See [changelog of Lechat on Sep 13 2024](https://docs.mistral.ai/getting-started/changelog/). 

Image-based attack (as described in the abstract) paper, which is an older work, is available on [arxiv](https://arxiv.org/abs/2310.03185) with code at [github](https://github.com/ZihanWangKi/VLMToolMisuse).

