---
layout: post
title:  "Progressive Web App for WikiToLearn - Updates on my GSoC project"
date:   2017-07-18 11:05:00
comments: true
excerpt: Take a closer look at the new PWA (and its features) I am developing this Google Summer of Code.
---

> This is the third post in my GSoC series. You can read the second one [here](//baldi.me/blog/how-to-pwa).

Hey there, a few weeks has passed since my last blog post. I promised to make a new post as soon as I had something cool to show off. Well, after working hard for a lot of time, I can finally show you how the project is taking shape.

First of all let me say that everything I am going to show you is still in heavy development and, as of right now, it does look a bit ugly. But don't worry, it will start looking better in the next weeks.

[The code for the frontend is available here](https://cgit.kde.org/scratch/cristianbaldi/wikitolearn-frontend.git/).

### Browsing courses

The first thing I am going to present you are the basic browsing functionalities. The user is able to browse departments (the top level categories of the website), courses and read pages.

<figure>
	<img alt="" src="{{ site.url }}/img/gsoc-updates-1/home.png">
	<figcaption>The home page. Ugly but functional</figcaption>
</figure>

<figure>
	<img alt="" src="{{ site.url }}/img/gsoc-updates-1/course.png">
	<figcaption>A course index. The <code>Lorem Ipsum</code> is just there as a placeholder</figcaption>
</figure>

The pages are fetching the data [from a backend server](https://cgit.kde.org/scratch/cristianbaldi/wikitolearn-backend-for-frontend.git/) that I am also developing during this GSoC. This server acts a compatibility layer between the current backend and this new frontend. I will write a blog post in the future about this service because it is based on an interesting architectural pattern: `backend-for-frontend`.

### Ui Library

Together with the browsing functionalities I started developing a simple UI library to use with the new WebApp.

![Ui Library](/img/gsoc-updates-1/ui.png)

The UI Elements are customizable and will be used in the rest of the project.

For example take a look at this confirm dialog

![Ui Library](/img/gsoc-updates-1/dialog.png)

or at this `Edit Page` button

![Ui Library](/img/gsoc-updates-1/button.png)

Building an UI Library is a very long process, that's why another WikiToLearn developer (Demetrio Carrara) is helping me in the development of this UI Library, he designed and built input boxes and added a few styles to the buttons.

This way I can concetrate in the development of the main functionalities.

### Async operations

Another interesting feature I worked on, is the support for polling operations. Right now on the website when downloading a PDF for a course you have to stare at a loading bar for a few seconds (sometimes even a minute or two), this is not ideal. That's why with this new Web App we are going to execute these long operations in the background, without having the user look at a loading bar.

Take a look at this video. I am clicking a button to start a long operations (which as of right now does nothing) and while the operation is in progress (you can see it in the lower right part of the screen) I am still able to browse the website.

<video src="/img/gsoc-updates-1/async.webm" controls></video>

There is still some work to do, for example adding some kind of notification once the operation is complete, or letting the user close the browser without losing the operations, but the basics are already implemented.

### Other details

As you can see on the video above there are transitions and loading bars when switching between pages, this is very helpful for the user, the browsing experience is much smoother.

The Web App is also quite lightweight, the external libraries and the code are less than 70KB to download, and once they are cached (this means from the second refresh of the page) they load in no time.

The Web App also supports full HTTP codes when responding to the browser: not many Web Apps do this, but after a few days experimenting and developing various solutions I found the best one and decided to use it.

### What's next?

Right now I am experimenting with user authentication. The available solutions (actually the only solution) for authenticating users that is compatible with Vue does not support Server Side Rendering, which is a must for my web application. This probably means I will have to fork the library and implement support for our use case. This could slow down the development of the web app but at the same time it will be great to contribute to an external project.

I am also working on deploying the Web App on a real and public server, making it available for everyone. It is far from usable by common users but it is a nice way to keep track of progress.


-----

As always thanks for reading and don't be afraid to leave comments!