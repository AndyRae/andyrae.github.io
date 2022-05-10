---
title: Rebuilding UK Box Office
date: May 05, 2022
image: /assets/images/uk-box-office/1.png
tag: projects
---

![image](/assets/images/uk-box-office/1.png)

About two years ago, I launched the [UK Box Office](./uk-box-office) dashboard. It was a simple web app that I built to track the box office figures for UK films.

> _The new UK Box Office dashboard is the only place you can find box office data this easily._

> _Box office is the one metric that counts in cinema - despite hype, critics, and marketing; audiences are always the great leveller. I check the latest numbers every week, but unfortunately this still means comparing excel sheets to see what's going on. So I finally got round to spending a weekend making it much easier, and more fun._

This was a few weeks before COVID-19 shut down cinemas in the UK, and rendered it pretty much useless.

Downtime during the pandemic did give me room to rebuild it from scratch.

It's now live at [boxofficedata.co.uk](https://boxofficedata.co.uk){:target="_blank"}

![image](/assets/images/uk-box-office/gif.gif)

* It's much much faster, loading the last year of data in under a second.
* You can link directly to films, distributors, and time periods. 
* Full featured search.
* Export data to CSV, JSON, and Excel.
* Ability to create reports, for example the [Distributor Market Share](https://boxofficedata.co.uk/reports/distributor-market-share){:target="_blank"}.
* Experiment with other ideas, like [forecasting](https://boxofficedata.co.uk/reports/forecast){:target="_blank"} and comparisons.
* Public API for external use. 

![image](/assets/images/uk-box-office/3.png)

Overall, it's much more inline with tools like Box Office Mojo, and The Numbers. Except in £, and with data with no gaps, right back to 2001.
Much more inline with box office mojo, and The Numbers. In £, and much more data. 

You can read a technical write-up of how it works [over here](./uk-box-office-data-studio-to-flask).
