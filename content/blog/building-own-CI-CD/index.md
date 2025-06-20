---
title: Building My Own CI Pipeline
date: "2025-06-16 23:56:35"
description: "After creating my blog platform (this), I realized that updating it involved too many manual steps (basically slavery): I had push the my source code to Git, build the Gatsby project locally, log into my hosting service, and manually copy the updated build files into the document root of my site. All of that, just to publish a blog post. I clearly needed a better workflow (or else I'll get too lazy). Could this whole process be automated into a single step? Yes, and thats what exactly what CD is for.."
---

# So what's the plan?
The plan is basically to...