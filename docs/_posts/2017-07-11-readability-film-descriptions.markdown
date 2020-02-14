---
title: How easy is it to read film descriptions?
date: 11-07-2017
taxonomy:
    tag: writing
---
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="/assets/charts/readability.js"></script>

Inspired by a workshop from Heather Maitland a few months ago, I wanted to examine how easy it is to read the descriptions that cinemas use on the films they show.

I’ve analysed the film descriptions for twelve independent UK cinemas and two chains, creating a dataset of 6,724 individual descriptions, with 595,075 words.

It’s worth noting that cinemas don’t always write these descriptions, but will use text provided by a distributor, otherwise borrowing from film festivals, media, and other venues to save time.

### Headlines:

* Chichester Cinema had the easiest descriptions to read
* Chapter had the hardest descriptions to read
* Baby Driver had the easiest descriptions to read
* Risk had the hardest descriptions to read
* No cinema used descriptions readable below university level


### Why is this important?

With websites and brochures being a very significant part of marketing, it makes sense that the widest possible audience can read and understand them easily.

To determine this I use the [Flesch-Kinkaid Reading Ease Grade Level (F-K)](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests), this is a test that determines roughly what level of education someone will need to be able to read a piece of text easily. The test produces a score generally between 0 – 100, with the higher the F-K score the easier it is to read.

The average reading age of the UK population is 9 years – that is, they have achieved the reading ability normally expected of a 9 year old.

>The Guardian has a reading age of 14 (60-70 F-K) and the Sun has a reading age of 8 (90-100 F-K).
[see-a-voice.org](http://www.see-a-voice.org/)

Here’s how the Flesch-Kinkaid scores relate to education and age.

|F-K Score|	School Level|	Notes|
|---------|-------------|------|
|100.00-90.00|	5th grade	|Very easy to read. Easily understood by an average 11-year-old student.|
|90.0–80.0|	6th grade	|Easy to read. Conversational English for consumers.|
|80.0–70.0|	7th grade	|Fairly easy to read.|
|70.0–60.0|	8th & 9th grade	|Plain English. Easily understood by 13- to 15-year-old students.|
|60.0–50.0|	10th to 12th grade	|Fairly difficult to read.|
|50.0–30.0|	University|	Difficult to read.|
|30.0–0.0|	University Graduate	|Very difficult to read. Best understood by university graduates.|

And this is how the cinemas performed:

<div id="readable" class="chart"></div>

It’s clear that the film descriptions are difficult to read, with all cinemas using descriptions at a university level between 39 – 47 F-K. Although some cinemas are more effective than others, it’s quite revealing that only 3% of descriptions had a F-K score above 70 (fairly easy to read).

This is mainly down to sentence length, with all cinemas having an average sentence length of 21 – 28 words. Gov.UK actually limit their sentences at 25 words, as sentences above that aren’t accessible.

>…sentences of 11 words are considered easy to read, while those of 21 words are fairly difficult. At 25 words, sentences become difficult, and 29 words or longer, very difficult.

Also worth considering that although Dundee Contemporary Arts has the third easiest descriptions to read, their length is often 2-4 times longer than other cinemas. Their descriptions take nearly a minute to read at an average of 57 seconds, compared to Curzon which take 12 seconds.


### Film Analysis

Here’s how the films performed, showing all of the films that were screened by more than seven venues, a sample of 100.

<div id="films" class="chart"></div>

This reflects the cinema data, with films clustering around a score of 37 – 48 F-K. We can see crossover titles like Baby Driver, Trainspotting 2, and Sing Street rating easier to read, with mainstream titles dominating the higher portion of films.

Whilst film such as I Am Not Your Negro, Napolean, and Risk rating very difficult to read, only understood by those reading at a university graduate level.

For a closer look at what’s going on here – a quick comparison, here are two film descriptions for Risk. Although two very different films, we can see the difference in sentence length, structure, and ultimately how readable they are.

>*Academy Award winning director Laura Poitras (Citizenfour) returns with a complex and volatile character study that collides with a high stakes election year and its controversial aftermath. Cornered in a tiny building for half a decade, WikiLeaks founder Julian Assange is undeterred; even as the legal jeopardy he faces threatens to undermine the organization he leads and fracture the movement he inspired. Capturing this story with unprecedented access, Poitras finds herself caught between the motives and contradictions of Assange and his inner circle.*

**Glasgow Film Theatre, F-K score of -3.1**

>*Laura Poitras, the Oscar-winning director of Citizenfour turns her camera on another controversial figure, WikiLeaks publisher Julian Assange, in this immersive documentary, which continues Poitras courageous examination of voices who question authority in an era of ever-increasing surveillance and state secrecy.*

**HOME, F-K score of -23.7**

And two descriptions for Baby Driver.

>*A talented, young getaway driver relies on the beat of his personal soundtrack to be the best in the game. But after being coerced into working for a crime boss, he must face the music when a doomed heist threatens his life, love and freedom.*

**Broadway, F-K score of 69.3**

>*He had an accident when he was a kid. Still has a hum in the drum. Plays music to drown it out. And thats what makes him the best. A homage to the holy trinity of Nineties heist films, Heat, Point Break and Reservoir Dogs, Baby Driver is the story of a talented, young getaway driver who relies on the beat of his personal soundtrack to be the best in the game.*

**Sheffield Showroom, F-K score of 80.6**

There are many elements to what makes film descriptions “good”. They need to describe the film, be exciting, provide a hook, and entice an audience. Being easy to read is just one part of this, and it’s also the only part we can measure objectively.

There needs to be improvement in this area, which extends to all communications from an organisation, whether that’s physical notices, tweets, emails, or press releases.

Audiences already see our spaces as inaccessible, the art-house cinemas that just “are not for me”. We often focus on these invisible barriers and how to over come them.
I think a strong step is how we talk to those audiences, and that needs to become easier to read.


### Sentiment Analysis

Sentiment Analysis is the process of determining whether a piece of writing is positive, negative or neutral.The majority of the dataset had positive descriptions at 64%, but still a sizeable amount was negative at 19% (17% was then neutral). Worth considering when trying to sell a product.


### Methodology

[Complete dataset on Google Sheets](https://docs.google.com/spreadsheets/d/1tkDuDTuduYK3EK9307elhyIQOQF3ab1wdsk4-83-wek/edit?usp=sharing) (9mb).

I used the tool [Readable.io](https://readable.io/) to measure the readibility of the data.

*The complete dataset includes extensive data, such as the Gunning Fog Score, Coleman Liau Index, SMOG Index, Automated Readability Index, Spache Readability Score, Dale-Chall Readability Score, gender, passive voice count, sentence count, syllable count, cliche count and more.*

I used a sample of about 120 – 300 films for most cinemas, and then up to 1,800 for a few more to determine accuracy. The difference in results was negligible, indicating that using the smaller samples is sufficiently accurate in this case.

A selection of cinemas from across the UK were included:

* [Broadway Nottingham](http://www.broadway.org.uk/)
* [Chapter](https://www.chapter.org/)
* [Chichester Cinema](https://chichestercinema.org/)
* [Curzon](https://www.curzoncinemas.com/)
* [Dundee Contemporary Arts](http://www.dca.org.uk/)
* [Glasgow Film Theatre](https://glasgowfilm.org/)
* [HOME](https://homemcr.org/)
* [Ipswich Film Theatre](http://iftt.co.uk/)
* [MAC Birmingham](https://macbirmingham.co.uk/)
* [Picturehouse](https://www.picturehouses.com/)
* [Queens Film Theatre](https://queensfilmtheatre.com/)
* [Sheffield Showroom](https://www.showroomworkstation.org.uk/cinema/)
* [Tricycle Theatre](https://kilntheatre.com/)
* [Watershed](https://www.watershed.co.uk/)

Any obvious cinemas missing from this list probably don’t archive their programme in an easy to access way.
