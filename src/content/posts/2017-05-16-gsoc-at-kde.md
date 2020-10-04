---
layout: post
title:  "Google Summer of Code at KDE - Progressive Web App for WikiToLearn"
date:   2017-05-16 19:10:00
comments: true
excerpt: This summer I will be working at KDE for Google Summer of Code. I will be developing a progressive web app for WikiTolearn.
---

For this summer I have been selected to work as a student for [Google Summer of Code](https://summerofcode.withgoogle.com/about/). For the next few months I will work for a [KDE](http://kde.org/) subproject, [WikiToLearn](http://join.wikitolearn.org).

<img alt="WikiToLearn Logo" style="max-width: 30%;padding:0.5em;" src="{{ site.url }}/img/gsoc-at-kde/gsoc.jpg">

If you don't know me already, I have been involved with [WikiToLearn](http://join.wikitolearn.org) for the past year and half, contributing to the development of the project in its various parts. In the past few months I have been especially involved in the development of its **frontend**: together with a few other developers I designed and built the current web interface from scratch.

Altrought definitely better than what we had in the past, this interface is far from being the *best* experience we can offer to our users: many areas need improvements especially in the subject of **user interaction, speed and ease of use**. These are the main reasons I am building a [progressive web app](https://developers.google.com/web/progressive-web-apps/) for WikiToLearn during this GSoC. I will be guided by my mentor Alessandro Tundo, who is currently the maintainer for the technological part of WikiToLearn.

## What will change for the users

If everything goes according to plan, when we switch the users from using the existing website to using my progressive web app the first thing they will notice is **speed** (or to better say the lack of slowness).

Thanks to advanced caching mechanism and complete control over the user interaction, we will be able to provide a **quick and lightweight interface** together with seamless transitions between the various pages: staring at a blank page for a few seconds every time you click on a link is all but ideal especially for a content-driven website.

<img alt="Progressive Web App" style="max-width:70%;padding:0.5em;" src="{{ site.url }}/img/gsoc-at-kde/pwa.png">

Next I will build **offline browsing** right into the website, allowing users to browse courses and pages they already visited right from the browser: many times I found myself waiting for the Internet to come back to read the next part of a course; this hopefully won't be a problem anymore.

Another important feature I am planning to develop is a better *native* interface for browsing courses: right now course indexes are simply content page with a textual index in them; Overall for the final user is very confusing to search and browse the courses, taking many clicks (and pages) to go from the main page to their desired content. I will design and implement a quicker and much clearer interface for this part of the website.

Android users will be even able to [install the website on their mobile phone just like if it was a native app](https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/), not a *killer* feature but definitely something interesting that we can achieve since we are building a modern web app: all the cool developers are doing this, why should we miss out? 😎

Finally with this project we also want to provide an improved experience for long lasting operations, for example **downloading PDFs** and uploading files. Right now when you try to download a course in PDF format, it can take many seconds (or even a minute or two if the course is really big). During this time the user is left staring at a loading bar: yes it is a pretty one, but still it is a loading bar. With this improved web app the download and the rendering of downloadable books will **continue in the background** allowing the user to keep browsing the website freely.

## "Details, please"

I will be building the web app **from scratch**, completely separated from our traditional backend, Mediawiki. This will allow to use the best and most recent technologies, tools and strategies for [building web apps in 2017](https://github.com/kamranahmedse/developer-roadmap). (If you are into these things expect another blog post very soon about the technological stack and the implementation details).

Overall I am focusing on firstly **building a solid base for the development**, providing the needed libraries and APIs to work with the interface and with the backend. I want it to be easy for future developers to jump right into the project and have all the tools, documentation and instructions to start contributing right away, no matter their level of knowledge. This has been an issue in the past: our architecture is a bit complex and it is not always clear for new developers where to go to change things.

### Community Bonding

During the community bonding period I will work on setting up the repositories and **building a reusable template for the project**: you may think this is a quick operation but there are many tools and best practicies to follow, especially if we want to do things the right way, from the start.

<figure>
    <img alt="The folder structure" src="{{ site.url }}/img/gsoc-at-kde/project.png">
    <figcaption>A sneak peek of the project template</figcaption>
</figure>

I will also experiment a bit with automatically testing web interfaces and CI tools: more of this in the next blog post.

-----

I am very excited to be working on this project this summer. Not only I will have the chance to see what is like working full time on an open source project but I will also have the possibility to learn tons of new concepts which are definitely going to be very useful in the future.


Thanks for reading and I hope to see you again on the next post!