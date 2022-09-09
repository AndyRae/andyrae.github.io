---
title: UK Box Office from Google Data Studio to Flask
date: '2022-05-05'
image: /assets/images/uk-box-office/3.png
tag: projects
permalink: uk-box-office-data-studio-to-flask
---

![image](/assets/images/uk-box-office/1.png)

About two years ago, I launched the [UK Box Office](./uk-box-office-dashboard) dashboard. It was a simple web app that I built to track the box office figures for UK films.

> _The new UK Box Office dashboard is the only place you can find box office data this easily._

> _Box office is the one metric that counts in cinema - despite hype, critics, and marketing; audiences are always the great leveller. I check the latest numbers every week, but unfortunately this still means comparing excel sheets to see what's going on. So I finally got round to spending a weekend making it much easier, and more fun._

Downtime during the pandemic did give me room to rebuild it from scratch.

It's now live at [boxofficedata.co.uk](https://boxofficedata.co.uk){:target="\_blank"}

![image](/assets/images/uk-box-office/gif.gif)

You can read a write-up of what's changed [over here](./uk-box-office-data-rebuilt).

On the technical side, it's changed completely.

Previously it was just a BigQuery database, with Google Data Studio running as a front end, and a local Python ETL pipeline to move the data - this has it's limitations.

Primarily it's so slow - GDS slows right down with anymore than a few thousand rows, and with 20 years of box office data, it was loading in 5 - 7 seconds for every query.

I rebuilt it completly; using Flask, PostgreSQL, Elasticsearch, and VueJS. It runs simply in across a few containers deployed on Google Cloud.

It's now so fast, and much more fully featured than using Google Data Studio.

It pretty much runs itself now, using APScheduler to fetch the new data every week, and even uses Prophet to forecast the next few months box office figures. Which is pretty uncertain right now - but something for another post.

The code is available on [Github](https://github.com/AndyRae/uk-box-office){:target="\_blank"}.
