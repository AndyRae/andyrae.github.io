---
title: Website Analysis of UK Cinemas
date: 26-11-2013
taxonomy:
    tag: writing
---
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="/assets/charts/website.js"></script>

A closer look at how fast the websites of UK independent cinemas are.

Why we should care about this:

Your users’ experience in terms of navigating your site should be a great reason. Users have many options when it comes to consuming content on the internet, and a slow performing website will frustrate your users, sending them elsewhere. A faster and more responsive website will keep them more engaged and focused on your content, rather than waiting for scripts and images to load.

Another reason is for SEO. Google has announced they are using page speed in their ranking algorithm.

*This means that faster performing sites may rank higher in search engine results. As developers and marketers look to optimize their sites, page speed should be among the top optimizations to consider.*

Source: [GTMetrix](http://gtmetrix.com/faq.html#faq-why)

No database of these venues seems to really exist, so I quickly scraped the [Europa Cinemas](http://europa-cinemas.org/) website for their list. This is imperfect as there are of course many UK cinemas who aren’t part of this network, but I thought the sample set was significant enough – a total of 57 UK venues are part of the Europa network.

I put this list through Google Speed Analytics and Yahoo’s YSlow using the [GTMetrix API](http://gtmetrix.com/), gathering the load time and respective gradings. Also checking whether the site itself was implementing responsive design.

In any case, the data collected is below.

<iframe width='100%' height='500' frameborder='0' src='https://docs.google.com/spreadsheet/pub?key=0Ajdrz7Ywy_apdGRyRUNodWpqN0QxdmlHY0RDcEtvTmc&#038;output=html&#038;widget=true'></iframe>

So a fairly interesting collection, and quite poor across the board, with an average loading time of just over five seconds. And mostly C/D grades from Google and Yahoo.

The fastest was the [Rio Cinema](http://www.riocinema.org.uk/) in London.
Only seven venues achieved times below the expected three second mark, and almost every venue had a host of possible optimisations to make. Often simple points like Gzip compression came up again and again.

Most impressive was probably [The Gulbenkian](http://www.thegulbenkian.co.uk/) in Kent, with a 2.67 load time, only a C grade from both tools, but the only venue in the top 10 implementing a responsive design.
