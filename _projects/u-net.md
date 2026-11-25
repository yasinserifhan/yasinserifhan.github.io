---
title: U-Net Segmentation
subtitle: PyTorch · Carvana data
summary: >-
  U-Net implemented in PyTorch for binary image segmentation, set up for the
  Carvana Image Masking Challenge (car vs. background masks), with
  mixed-precision training and Dice evaluation.
metric: "Encoder–decoder with skip connections"
tags: [Computer vision, PyTorch, Segmentation]
repo: https://github.com/yasinserifhan/U-Net
role: Personal project · core structure follows Aladdin Persson's tutorial
order: 4
featured: true
---

A PyTorch implementation of U-Net for binary image segmentation. Swap the
dataset class to use it for other binary segmentation tasks. The core
structure follows Aladdin Persson's "U-Net from scratch" tutorial.

## What's in the code

- **Model:** four encoder stages of `DoubleConv` (two 3×3 conv → BatchNorm →
  ReLU) with 64 / 128 / 256 / 512 channels, a 1024-channel bottleneck, a
  transposed-conv decoder with skip connections and a 1×1 output conv. Decoder
  outputs are resized when they differ from the skip connection, so odd input
  sizes work.
- **Training:** `BCEWithLogitsLoss`, Adam (lr 1e-4), mixed-precision training
  with a gradient scaler and albumentations augmentation (320×480 resize,
  rotation up to ±35°, flips).
- **Evaluation:** 90/10 train/validation split with a fixed seed, pixel accuracy
  and Dice on the validation set, predicted masks saved as PNG.

## Limitations

Evaluation uses only the 10% validation split; there is no separate test set or
early stopping, and the default training run is short (3 epochs).
