---
title: UK Box Office Dashboard
date: March 02, 2020
image: /assets/images/projects/uk-box-office.png
tag: projects
permalink: uk-box-office-dashboard
---

![image1](/assets/images/projects/uk-box-office.png)

The new UK Box Office dashboard is the only place you can find box office data this easily.

Box office is the one metric that counts in cinema - despite hype, critics, and marketing; audiences are always the great leveller. I check the latest numbers every week, but unfortunately this _still_ means comparing excel sheets to see what's going on. So I finally got round to spending a weekend making it much easier, and more fun.

<a href="https://boxoffice.rae.li" target="blank">boxoffice.rae.li</a>

If you want to find out how _Parasite_ is doing this month, you don’t have to open the last four weeks excel files, or wait for Screen to report it.

And if you want to find out how _Slumdog Millionaire_ did on week 11 back in 2009 (grossed £876k from 384 sites, £416k of which was over the weekend) you don’t have to dig out that excel file either.
Both are just seconds away.

The data pipeline is straightforward - extracting box office data from the [source](https://www.bfi.org.uk/education-research/film-industry-statistics-research/weekend-box-office-figures), transforming and cleaning whilst adding a few metrics, then loading it into BigQuery.
BigQuery takes care of serving the data to Data Studio, where there’s a reasonable speed improvement over just using a Google Sheet, but not as much as I’d hoped.  

There are inevitably errors, as the entire data set (years 2001 - 2020) is 40,000+ rows, a lot of which was clearly entered by hand. So distributor names are cleaned up for consistency, and obvious box office errors corrected.

The source code is available on [GitHub](https://github.com/AndyRae/uk-box-office), the site is also hosted on GitHub Pages.

---

Have a problem that needs a dashboard? I can probably [build one for you](/about).
