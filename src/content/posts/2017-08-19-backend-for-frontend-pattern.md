---
layout: post
title:  "Optimizing APIs for (web) apps: Backend for Frontend and other ideas - Updates on my GSoC project"
date:   2017-08-19 08:57:00
comments: true
excerpt: Discover some patterns and ideas for optimizing APIs when developing web and mobile applications
---

> This is the fourth post in my GSoC series. You can read the third one [here]({{ site.url }}/blog/gsoc-updates-1).

## An introductory example

When building web apps (or internet-dependent apps in general), like I am doing for my [Google Summer of Code project]({{ site.url }}/blog/gsoc-at-ke), you are most likely fetching data from one or more external APIs (APIs that either you, your team or an external service developed).

Suppose you are building a web app for a wiki-like website (like I am doing), suppose again you are developing the home view for your web app. To render the home page you need to fetch some data, let's say recent edits, new users, the main categories your website is divided in, the "page of the day" and many other informations.

This means you would have to make many different calls to many different API endpoints before your page is fully rendered. It works but it is not ideal, especially if your user is, for example, on a mobile device with a mobile connection. Latency is high (and painful for the user) and before the page is rendered, even if the requests were performed in parallel, many seconds would pass.

Sometimes you can't even make these requests in parallel, a request might depend on the result of another request, again resulting in longer loading times.

## Merging the requests server-side

One possible solution to the potential slowdown would be to create an addittional API service, developed and mainteined by you (or by the team developing the app) that externally exposes "complex"/elaborate endpoints.

Think for example of an `/api/homepage` endpoint. When you request this endpoint your service would request all the dependencies for the homepage (`/api/users`, `/api/page-of-the-day`, `/api/tags`, ...), add them to the same response object and send them back to you.

The first advantange we can see with this solution is that **the number of requests is drastically reduced**. Many requests gets "compressed" into one. Of course the response would be bigger but this would cut some time in term of latency.

Another advantage we can easily observe is that since our additional service is taking care of all the requests composing the complex request (let's call them sub-requests), these **sub-requests are performed faster and in a more reliable way** (the service has access to a more decent connection than your mobile phone).

Your service would also be able to provide additional logic that maybe the other API endpoints you are depending on are not providing. For example you could define caching rules so that sub-requests are performed every once in a while insted of at every request, returning cached results whenever you feel like it is the best to do so. Again this will result in faster requests from your app.

There are some (practical and not) disvantages to this proposed solution.

First of all it is a bit against RESTful ideals, instead of single, self contained resources (`/api/users`, `/api/page-of-the-day`, `/api/tags`) you have a whole object (`/api/homepage`).

Secondly this add an additional layer of complexity. You would need to develop an additional server that performs the sub-requests, not ideal if you are developing a project by yourself, but it might be worth for a performance increase.

## The Backend for Frontend pattern

Another possibility would be to implement the [Backend for Frontend pattern](http://samnewman.io/patterns/architectural/bff/). The article gives a nice overview on the pattern but I will also try to give some insights on it.

This pattern is especially useful when you are building mobile applications together with web applications, both **sharing a common API**.

Usually, on the mobile application, you might want to show the same elements you show on the website, but with less detail, because **it might be impossible to show on small screens all the available informations the full API provides**. For example if we are displaying the recent users on a website we might want to show all the possibile details but on a mobile app we would hide for example their registration time, or their full name.

You could of course keep using the same API you use for the web, but this is not ideal because it means that **you are downloading data that is partially not being used by your client**.

The Backend for Frontend pattern tries to solve this issue. Instead of having only one API endpoint for all your devices, you would implement two (or more) API endpoints, each dealing with a different kind of device and application and each **providing only the needed information** (nothing more and nothing less).

For example instead of `/api/pages` you would have `/api/desktop/pages` and `/api/mobile/pages`.

Again you would need to develop an additional service, but this way you might save some precious time (and data) for your API clients.

You could combine this pattern with the previous one I presented to get best of both worlds: save data and save requests.

## Summing up

If you are building a small and personal project you don't have to matter with the issues and solutions presented here. These ideas are important when you are building APIs and software for hundred of thousands of users, but I decided to investigate them for learning purposes. Let me know what you think in the comments.

-----

### GSoC updates

In this last month of GSoC I was busy researching and testing various libraries to manage user authentication (think of login, logout and registering functionalities) that worked well with Vue.js. In the end, since we are going to use Keycloak for authenticating user in the WikiToLearn backend, I had to choose a library to integrate with Keycloak and, since there were none to integrate with Vue.js, I had to [create one kinda from scratch](https://github.com/crisbal/vue-keycloak). The last few days of GSoC will be spent completing and polishing this library which I plan to work on ever after GSoC. It is an "external" project but it is very related to [the project I am developing]({{ site.url }}/blog/gsoc-at-ke).