---
title: Making Sense of a Cinema Comments Board
date: December 18, 2019
image: cinema-board-1.jpg
taxonomy:
    tag: writing
---
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="/assets/charts/cinema-comments-board.js"></script>

Comment boards began appearing in independent cinemas across the UK a few years ago, allowing audiences a little space to let people talk about film in the cinema. 

The idea is simple: once you've seen a film, you can write a short review on a card and let the world see.

I read this one at Broadway most mornings, and absolutely love it - because it’s not reviews from London or New York, but people watching and experiencing cinema in _our_ cinema. 

![image](/assets/images/cinema-board-2.jpg)

Comment boards are beautiful in an analogue sense, a fun way to try and get a feeling of what people thought about a film over an opening weekend. 

But I’ve always wanted to explore further - wouldn’t it be great if we could have a computer read all of the cards and tell us if people liked the films or not?

I thought I'd give that a shot. 

Luckily Broadway have been saving the cards for the last three years, 1,236 of them, which looks like this. 

![image](/assets/images/cinema-board-1.jpg)

Or here’s a handful.

![image](/assets/images/cinema-board-3.gif)

I digitised all 1,236 of the cards, then turned the handwriting into text, and then analysed the sentiment of each card¹.

Analysing sentiment means that we determine a score between -1 (very negative) to 1 (very positive) for pieces of text². This is great because it allows us to turn all of these cards into a data set, and we can compare positive and negative reviews really simply. 

For example, analysing this review of _Sorry We Missed You_ last month, it received a very positive score of 0.89. 

![image](/assets/images/cinema-board-4.png)

Over the 1,236 cards, we can now visualise how the films compared on average, taking the 100 most frequently reviewed, ordered by how positive the score was.

<div id="bar_chart" class="chart"></div>

A relief to see almost entirely positive scores, but with some surprising films coming out on top - who would guess the tennis biopic _Borg vs McEnroe_ would do so well? Otherwise it's great to see _Black Panther_ up there, _My Life as A Courgette_ too. 
Whilst unfortunately _You Were Never Really Here_, _A Ghost Story_, and _Personal Shopper_ not doing so well. 

However, people only write a card if they loved or hated the film - and it happens that the few people who came to see _Borg vs McEnroe_ **and** wrote a card all loved it. So please don't come away from this thinking that _Borg vs McEnroe_ was the most loved film at Broadway, and that everyone hated _You Were Never Really Here_.

But it is interesting when we look at the range of reviews each film - we can visualise this below, as the right of each bar is the most positive card per film, whilst the left is the least - that mark in the middle is the average as shown above. 

<div id="candle" class="chart"></div>

We quickly see that almost every film had a very positive review, with only the bottom few missing out. But there doesn't seem to be much consensus between reviews at all, with very large ranges on most films. Whilst some films seem to be completely polarising, such as Lady Bird, The Shape of Water, The Favourite...

But given there are mostly only a few cards per film, we don’t want to dwell too much - we have only a very small sample size per film, for if over 3,000 people saw Sorry We Missed You, only 1% left a card. So whilst these graphs are fun, it’s a stretch to call even a few of those bars indicative of a wider audience, or draw many conclusions. 

Despite that, maybe the dataset is interesting if we see it as an approach of how people are talking about film when they leave the cinema, after all these are effectively immediate exit polls - no time for reflection, just hot takes. Here are some of those most used words on cards.

![image](/assets/images/cinema-board-5.png)

Which again shows the simplicity of these cards. The audience communicate their feelings directly and without nuance. Generally the cards use a single short sentence with blunt and emotive language, rarely using complex ideas. The average card was only twelve words long with no room for detail, and the immediate language of cinema is succinct - "_very good_", "_love_", "_brilliant_". 

So whilst it's fun to try to visualise these audience dialogues. Unfortunately the cards aren't rich enough to explore ideas such as the MTI Movie Classification³, invented by KAIST Business School in South Korea. 

Here they use audience reviews of films to create new film genres (outlined below), with a new data-driven approach rather than the traditional top-down way. The methodology in that case involved more in-depth reviews than quick comment cards. 

![image](/assets/images/cinema-board-6.png)


Ultimately, it's probably most useful, and more fun, just to read the noticeboard ad-hoc on a Monday morning.

---

[1] _This sentence is intentionally vague, but really the technical “how” this works is probably the least interesting bit, so it feels fine to gloss over. Handwriting to text is not always perfect, but a look through a sample says it’s 95% accurate per word, so I’m confident the data set reflects our cards._

[2] _Sentiment analysis is not always perfect, but as before, luckily the audience communicate their feelings directly and without nuance. Generally the cards use a single short sentence with blunt and emotive language, rarely using complex ideas or sarcasm, which is perfect for sentiment analysis. I sense checked through a sample, and found it very accurate._

[3] _Shon, Ji-Hyun and Kim, Young-Gul and Yim, Sang-Jin, Dissecting Movie Genres from an Audience Perspective: MTI Movie Classification Method (October 1, 2012). KAIST Business School Working Paper No. 2012-008. Available at SSRN: [https://ssrn.com/abstract=2158496](https://ssrn.com/abstract=2158496) or [http://dx.doi.org/10.2139/ssrn.2158496](http://dx.doi.org/10.2139/ssrn.2158496)_