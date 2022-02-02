---
title: Learn Express
excerpt: ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends. With ExpressJS, you need not worry about low level protocols, processes, etc.
image: express-thumbnail.jpg
isFeatured: true
date: '2022-01-19'
---

ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends. With ExpressJS, you need not worry about low level protocols, processes, etc.

#### What is Express?
Express provides a minimal interface to build our applications. It provides us the tools that are required to build our app. It is flexible as there are numerous modules available on npm, which can be directly plugged into Express.

Express was developed by **TJ Holowaychuk** and is maintained by the Node.js foundation and numerous open source contributors.

#### Why Express?
Unlike its competitors like Rails and Django, which have an opinionated way of building applications, Express has no "best way" to do something. It is very flexible and pluggable.

#### This is what the Express server will look like...

````javascript
const express = require('express');
const app = express();

app.listen(3000,() => {
    console.log('Server is running on PORT: 3000');
});
````

The above code will basically Run a Web-Server on your local machine on PORT:3000.

Visit [Express DOCS](https://expressjs.com/) for more information.