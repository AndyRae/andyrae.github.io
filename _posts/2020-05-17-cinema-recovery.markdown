---
title: Measuring the cinema recovery post COVID-19
date: May 28, 2020
tag: writing
permalink: cinema-recovery-post-covid-19
status: draft
---
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="/assets/charts/cinema-recovery.js"></script>

Cinemas are closed across the world. But they will reopen, and it's hard to tell how succesful they will be when that happens.


Here are four indicators to help us understand how the sector is recovering in the post COVID-19 landscape, all of these graphs are updated weekly for the next few months.

### 1. Are cinemas open?

This map shows the open status for over 100 countries. They are still mostly closed across the world (80%+ countries), but some have stayed open throughout (Sweden, Taiwan), beginning to reopen (Germany), or have set open dates. 
Many countries aren't represented, I couldn't find a source for them - let me know if you can.

<iframe width="100%" height="380" seamless frameborder="0" scrolling="no" src="/assets/cinema-map/map.html"></iframe>

<a href="/assets/cinema-map/map.html" target="blank">View the full map</a>

And don't miss Gower Street's <a href="https://gower.st/articles/reopen-sesame-domestic-theater-numbers-growing-interactive/" target="blank">choropleth map of the United States open status.</a>

### 2. Are audiences searching for cinemas?

[Google Trends](https://trends.google.com/trends/) shows what people are searching for around the world, and through this we can identify the rhythm of audience demand.

>_The scores awarded by Google Trends show the popularity of that term over time, scaled between 0 and 100. Scores are based on the absolute search volume for a term, relative to the number of searches received by Google. They have no direct quantitative meaning, and in this case should only be compared against the same country, and not against each other._

Taking the global top 6 markets, here's how much audiences have been searching for cinemas (in their native language) over the past year. Note earlier this year the drop off from China and Japan, followed by the rest of the world as the lockdowns spread. 


China has since shown signs of recovery, which will be encouraging for other markets as well. And as cinemas reopen across other countries we will be able to see how keen audiences are, relative to before the closures.

<div id="trend-vis" class="chart"></div>

<a href="/assets/cinema-map/trends.html" target="blank">View the complete dashboard with 48 countries trend data</a>

### 3. Are audiences confident in going?

There are now many polls about how audiences feel about returning to the cinema. They vary in quality, from deliberately misleading, to in depth extensive cross tabulation. I won't pretend this is 538, but a loose idea that together these polls could indicate a general feeling.


Whilst there is no consistency in format or question, generally the polls ask about how safe people feel about returning to cinemas. I've graphed the % positive response, along with sample size and source country. It's worth mentioning there's a significant Western bias here, as surveys like this are mostly only reported in a native language, and then circulated within networks. As the situation develops, more surveys are published, and my Mandarin improves, we'll see how things change.

<div id="bubble-vis" class="chart"></div>

### 4. Are cinemas making money?

A lot of this could just be noise, because box office is always the most important metric. Measuring the entire international box office is too big a task for me, best left to Variety and Deadline.


But I do keep track in the UK, using the dashboard I made earlier this year. UK cinemas were having a good start to the year until March, so we'll be able to see how it recovers when cinemas open.

<div id="boxoffice-vis" class="chart"></div>

<a href="https://boxoffice.rae.li" target="blank">Check out the complete UK Box Office Dashboard</a>

<hr>

Code for the world map polygons is from [leaflet-gsheets](https://github.com/carderne/leaflet-gsheets).
