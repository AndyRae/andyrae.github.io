---
title: Google Mobility Data Dashboard
date: '2021-01-29'
image: /assets/images/mobility-data/mobility-data-1.png
tag: projects
permalink: google-mobility-data-dashboard
---

![image](/assets/images/mobility-data/mobility-data-1.png)

As the world continues to respond to COVID-19, we can also begin to look towards a recovery.
To help understand this, many analysts have been looking at the [Google Mobility datasets](https://www.google.com/covid19/mobility/).

> _These Community Mobility Reports aim to provide insights into what has changed in response to policies aimed at combating COVID-19. The reports chart movement trends over time by geography, across different categories of places such as retail and recreation, groceries and pharmacies, parks, transit stations, workplaces, and residential._

I built this dashboard specifically to measure regional movement in the UK for retail and recreation, which includes cinema. Given my job is working at Film Hub Midlands, it filters by hub region as well. And as restrictions are lifted over spring 2021, the data will reflect that.

[Explore here.](https://datastudio.google.com/reporting/dc571a11-116e-4555-9eed-12c2a4270bc9/page/mJayB)

Despite the focus on the retail and recreation data, the data for grocery and pharmacy, parks, transit, workplaces, and residential is also loaded in, and available through adjusting the metrics.

Additionally popular with analysts is Google search data - and so searches in the UK for cinema / movie theatres are included. Unfortunately this data only goes back a year relative to the measured date - but a recovery will still be indicated by comparisons to Summer 2020, and the lockdown baseline. Shoutout to the [pytrends library](https://pypi.org/project/pytrends/) for this bit.

Additionally the [UK cinema box office data](/posts/uk-box-office) is also included as context.

---

[Google Mobility Data source](https://www.google.com/covid19/mobility/)

[Google Trends source](https://trends.google.com/trends/?geo=GB)

[Data pipeline code on Github](https://github.com/AndyRae/mobility-data)

---
