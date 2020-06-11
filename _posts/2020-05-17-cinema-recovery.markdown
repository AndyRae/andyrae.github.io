---
title: Measuring the cinema recovery post COVID-19
date: June 3, 2019
tag: writing
image: /assets/images/ticket.png
permalink: cinema-recovery-post-covid-19
status: draft
---
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="/assets/charts/cinema-recovery.js"></script>

<style>
.google-visualization-table-table,
.google-visualization-table-tr-even,
.google-visualization-table-tr-head {
	background-color: rgba(255, 255, 255, 0);
}
.google-visualization-table .gradient {
	background-image: none;
}
.counter-wrapper {
	font-weight: bold;
	font-size: 1.5em;
}
.counter {
	display: inline-block;
}

h6 {
	font-size: 1em;
	margin: 0;
	letter-spacing: -0.01em;
}
</style>

Cinemas are still closed across the world. But they will reopen, and it's hard to tell how successful they will be when that happens.

Here are five indicators to help us understand how the sector is recovering in the post COVID-19 landscape, I'm looking at everything from Google Trends, to audience sentiment, and stock prices. All of these graphs are updated daily, or weekly, for the next few months.

<div class="line"></div>

<div class="counter-wrapper"><div class="counter" id="open-percent"></div>%</div>

###### Countries with cinemas allowed to open

<hr>

<div class="counter-wrapper"><div class="counter" id="sentiment"></div>%</div>

###### Average positive audience sentiment
<hr>

<div class="counter-wrapper"><div class="counter" id="stock-change"></div>%</div>

###### Average cinema stock price change since Wuhan lockdown, January 23
<hr>

<div class="counter-wrapper"><div class="counter" id="trends-change"></div>%</div>

###### Average cinema search engine change since Wuhan lockdown, January 23

<div class="line"></div>

### 1. Where are cinemas open?

Here is the open status for over 100 countries. Cinemas are still mostly closed across the world, but some have stayed open throughout (Sweden, Taiwan), beginning to reopen (Germany), or have set open dates (France, June 22nd).

Green is open, red is closed, whilst amber is partial. Click on each country for the source, open and partial is a blurred line.
Many countries aren't represented here, I couldn't find a source for them - let me know if you can.

<iframe width="100%" height="380" seamless frameborder="0" scrolling="no" src="/assets/cinema-map/map.html"></iframe>
<hr>

[View the full map](/assets/cinema-map/map.html){:target="_blank"}

And don't miss Gower Street's [choropleth map of the United States open status](https://gower.st/articles/reopen-sesame-domestic-theater-numbers-growing-interactive/){:target="_blank"}, giving a state-by-state overview.

<div class="line"></div>

### 2. Are audiences searching for cinemas?

[Google Trends](https://trends.google.com/trends/){:target="_blank"} shows what people are searching for around the world, so it's a great tool to identify the rhythm of audience interest, and demand.

>_The scores awarded by Google Trends show the popularity of a search term over time, scaled between 0 and 100. Scores are based on the absolute search volume for a term, relative to the number of searches received by Google. They have no direct quantitative meaning, and in this case should only be compared against the same country, and not against each other._

Taking the global top 6 markets, here's how much audiences have been searching for cinemas (in their native language) over the past year. Note earlier this year the drop off from China and Japan, followed by the rest of the world as the lockdowns spread.

Japan has since shown signs of recovery, which will be encouraging for other markets as well. And as cinemas reopen across other countries it will indicate how keen audiences are, relative to before the closures.

**Google Trends Cinemas Searches**
<div id="trend-vis" class="chart"></div>

<hr>

_Source: Google Trends_

[View the complete dashboard with 48 countries trend data](/assets/cinema-map/trends.html){:target="_blank"}

<div class="line"></div>

### 3. Are audiences confident in going?

There are now many polls about how audiences feel about returning to the cinema. They vary in quality, from deliberately misleading, to in depth extensive cross tabulation. I won't pretend this is 538, but a loose idea that together these polls could indicate a general feeling.

Whilst there is no consistency in format or question, generally the polls ask about how safe people feel about returning to cinemas. I've graphed the % positive response, along with sample size and source country. It's worth mentioning there's a significant Western bias here, as surveys like this are mostly only reported in a native language, and then circulated within networks.

As the further surveys are published, and my Mandarin improves, we'll see if any pattern emerges through consensus. For now, sentiment seems to be all over the place, which is perhaps an indication itself.

**Audience Sentiment Polls**
<div id="bubble-vis" class="chart"></div>
<hr>

_Vertical axis is positivity, bubble size is the sample size._

<details>
	<summary>Sources:</summary>

<div id="table-vis" class="chart"></div>
</details>

<div class="line"></div>

### 4. What do the markets think?

The best prediction indicator - stock markets. It's not been a pretty few months for the markets overall, but following considerable stimulus, some [extraordinary rallies](https://www.bloomberg.com/news/articles/2020-06-07/asian-stocks-look-set-for-gains-dollar-mixed-markets-wrap){:target="_blank"} have come after a positive signals.

And assuming stock prices are the prediction of a future value, then we can use cinema stock prices as an indicator for how the sector recovery might look.

Here are the performances of the biggest chains in the world for the year so far. This isn't a direct comparison, but stock prices rebased to 100, so we can see the overall trend. As expected, there's a massive cliff edge that the whole market fell off - though AMC have show the best signs of recovery so far, in spite of [reporting a $2.18 billion](https://www.bloomberg.com/news/articles/2020-06-09/amc-turns-to-reopening-plans-after-reporting-2-18-billion-loss){:target="_blank"} loss.

**Cinema Stock Prices Rebased**
<div id="stockmarket-vis" class="chart"></div>

<hr>

_Source: Google Finance_

The next few months will show how the market responds to regulations, reopenings, and audiences.

The one line that didn't fall off a cliff and keeps going up? Netflix.

<div class="line"></div>

### 5. Are cinemas making money?

A lot of this could just be noise, because box office is always the most important metric. But keeping track of the entire international box office is too big a task for me, best left to Variety and Deadline. 

Though I do pay attention in the UK, using the dashboard I [launched](/uk-box-office-dashboard){:target="_blank"} earlier in the year. UK cinemas were having a good start to the year until March, so we'll be able to see how the sector recovers when cinemas open from July 4th.

Before that, Gower Street have done a series of fascinating pieces on [forecasting the recovery across major markets](https://gower.st/articles/tag/prediction/){:target="_blank"} as well.

**UK Box Office Gross**
<div id="boxoffice-vis" class="chart"></div>

[View the complete UK Box Office Dashboard](https://boxoffice.rae.li){:target="_blank"}

<hr>

_Source:_ [_BFI_](https://www.bfi.org.uk/education-research/film-industry-statistics-research/weekend-box-office-figures){:target="_blank"}

<div class="line"></div>

<hr>

Code for the world map polygons is from [leaflet-gsheets](https://github.com/carderne/leaflet-gsheets){:target="_blank"}
