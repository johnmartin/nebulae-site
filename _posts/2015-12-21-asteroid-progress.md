---
published: true
layout: post
title: Asteroid progress
---

Since I've been working on a freelance project for the past 2 weeks I haven't
had much time to add anything to Nebulae... however this lunchtime I had a
little bit of a breakthrough with my asteroid design.

Currently for every play through each dimension is generated through a basic
Perlin noise generator, which helps with placement of the different game
entities (and also make procedural generation of the dimensions a breeze). Gotta
love `Mathf.PerlinNoise`.

Anyways: I've been playing around with how to generate the shapes of asteroids
over the past few days and I've finally figured out to efficiently generate the
2D meshes.

Here's a quick GIF of the current state of the game:

![A spacecraft flying around a procedurally generated 2D nebulae](/dist/images/asteroids.gif)
