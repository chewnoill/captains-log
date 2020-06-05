---
title: Building the Captains Log Blog
date: 2020-05-30 GMT-0400 
published: false
---
export default (props)=>props.children

import Prompt from 'components/prompt';

<h3 className="title" children={title}/>

<Prompt date={date}/>

<article>

<heading>
Step 1 Gathering Requirements
</heading>

Defining terms is a huge part of this step, my only real requirement
is that I have a functioning blog.

A **functioning blog** is responsible for taking content provided in some way, and displaying it onto a webpage.
It should also provide some interface for changing the content that has been published, through the same web interface.

Each entry of the captains log blog should begin

`Captains Log, {{the date}}`

<heading>
Step 2 designing the system
</heading>

We're going to be using what we in the industry call a **Jamstack**[^1] because it makes our lives easier.
We don't need a backend, and we're not going to be running any services.
Everything our website needs will be built at build time, served staticly to users.

I've been using **EmotionJS**[^2] for pretty much everything, even gone as far as writing out some boilerplate that gets dropped into projects whenever I need it. Here is the styling boilerplate I'm using:

<iframe
     src="https://codesandbox.io/embed/styledboilerplate-s601m?fontsize=14&hidenavigation=1&theme=light"
     style={{width:"100%", height:"500px", border:0, overflow:"hidden"}}
     title="StyledBoilerplate"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

**NextJS**[^3] will do most of the work of setting up, I like that it supports static site building out of the box. It should make some things easier, but there are for sure some things to watch out for.

We'll be using **MDX**[^4] for all of the content of our site. It provides the flexibility of including straight up react components with regular markdown. We should be able to style it pretty easily as well.

Finally, **NetlifyCMS**[^5] will be our CMS of choice. All of our content will be stored in git so we won't need to worry about building out a backend.

Slap some styling on it and we should be able to write and publish some blog posts..

<heading>
Displaying arbitrary MDX content
</heading>

Rendering arbitrary content is tricky. 

In order for NextJS to render everything statically, it needs
to know what urls will be used.

The blog's main purpose really is just to render content.
MDX provides some flexibility and structure in order to render
more complicated layouts...

```ts
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const blog = await loadBlog(slug);
  const { default: Body, ...args } = blog;
  const page = {
    ...args,
    body: Body && ReactDOMServer.renderToString(<Body />),
  };
  return { props: { page, slug } };
}
```


<section>

**Netlify CMS**[^3]

I want to keep using git as my source of truth for all of my content. I use git every day so using it here is just easier. Also this means I can use whatever editor I like and make commits just like I would with any other project.

Netlify CMS provids a admin dashboard with pretty minimal configuration so I can make updates to the site and publish them without actually using git directly, right from the site. Those updates still get committed and can be reviewed and reverted if needed.

- Netlify Identity

  Easy to setup, almost no configuration. Fits nicely into my JamStack

</section>

Okay, so now we have the boiler plate out of the way, we can build our thing. I've been adding MDX to everything for a while now, and this project will be no exception. I want to be able to write blog posts with MDX, provide some loose formatting guidlines and maybe some extra components as well as I see fit.

Problems with MDX
* dynamic pages arent SSRing :(



<heading>
 Log Blog prompt
</heading>
<section>

You know what it is. A generic prompt that starts the narative for the rest of the journal entry. We're already attaching a date to each journal entry so we might as well reuse it here also.

</section>
<section>

TODO:

- Index all the blog pages
- Restrict access
- comment section

</section>

</article>

[^1]: As far as I can tell, **Jamstack**, isn't a specific thing, its just an idea. It provides a set of requirements that define how websites get built, deployed and eventually used. The main point is to decouple a backend from the frontend, staticly generate and prerender everything, ship the entire thing out to a CDN so its ready to go. https://jamstack.org/ Also, **Jamstack** is a cool word, I think I'll try to sneak it into casual conversation somehow.
[^2]: **Emotion** https://emotion.sh/docs/introduction
[^3]: **NextJS** https://nextjs.org/
[^4]: **MDX** https://mdxjs.com/
[^5]: **NetlifyCMS** https://www.netlifycms.org/
