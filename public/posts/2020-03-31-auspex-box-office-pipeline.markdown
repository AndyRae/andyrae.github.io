---
title: Auspex - Box Office Data Pipeline for Machine Learning
date: March 31, 2020
image:
tag: projects
permalink: auspex-box-office-pipeline
---

Auspex is a simple example of building a data pipeline starting from extracting data from PDFs, right down to feature engineering. It's built with Python, and uses a few external APIs for ease.

The process is linear, and starts by extracting data from daily PDF reports from Vista box office (using Tabula), and then adds further film details using the [OMDB API](http://www.omdbapi.com).

Additionally it retrieves trailer links for each film through the Youtube API - then downloads those trailers, uploads them to Google Cloud Storage, and runs them through the Google Vision API. Collecting trailer annotations, which is a text description for every frame. This was inspired by [this piece](https://cloud.google.com/blog/products/ai-machine-learning/how-20th-century-fox-uses-ml-to-predict-a-movie-audience) on predicting box office using these annotations from Google and 20th Century Fox.

This process is also set up for the [UK Box Office dashboard](https://boxoffice.rae.li) database, and additionally for upcoming releases.

I have some exploratory data analysis to share using this pipeline, as well as the machine learning model to predict upcoming releases. Given the [current collapse](https://www.theguardian.com/film/2020/mar/24/us-box-office-zero-revenue-first-time-ever-coronavirus-the-invisible-man) in box office data, this doesn't feel like a priority, as future real world test data is now probably months away.

The source code is available on [GitHub](https://github.com/AndyRae/auspex).
