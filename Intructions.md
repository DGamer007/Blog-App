# How to Publish a new Blog?

1. Get all the content of your Blog in a single **Markdown** file.

2. If the file has any assets (Images, GIFs, etc...) then they need to be stored in `public/images/posts/[MD Filename]/` directory.

> Here `[MD Filename]` is the filename of your Blog's Markdown file without file Extension

3. Now that you have stored assets in *PUBLIC DIR* you can call them with just `/` route in your Markdown file.

> For instance; If You need *helloWorld.png* in your Blog and you stored it in *PUBLIC DIR* then you can use `/helloWorld.png` in your Markdown file.

4. After completing the Blog Content you need to add some metadata at the top of your Markdown File as shown below.

````text
---
title: # Title of Blog
excerpt: # Short Description of Blog
image: # Thumbnail Image of Blog
isFeatured: # Whether you want this blog to be featured or not
date: # Release data of blog
---
````

> In here...
  **title** field allows White spaces in Title Text
  **excerpt** field is helpful for SEO
  **image** field is just the filename of Thumbnail Image
  **isFeatured** field is boolean [*true*,*false*]
  **data** field is in 'YYYY-MM-DD' format
  
> Although don't forget the '---' because those hiphens will define the Metadata section in Markdown file



5. Once you are done with the Content Writing then Store your file in `/posts` directory.

> White spaces in Filename are not valid

6. after doing all this right; You can see the changes right away in Development Version But you need to Redeploy your Application in order to see changes in Production Version.

7. And there you go, Your Blog has been published.

<br>
<br>

<h4 align="center">Happy Blogging🍻</h4>