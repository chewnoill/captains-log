---
title: Building a Log Blog
date: 2020-06-05T20:30:09.656Z
---

<h3 className="title" children={title}/>

<article>

<heading>

What is a Log Blog?
</heading>

<Prompt date={date}/>

We're building a **Jamstack** log blog built with **React**,
**Typescript**, **MDX**, we're **SSR**ing the whole thing and
uploading it onto a **CDN** :rocket: 

<section>

I like the idea of name dropping a bunch of tech buzzwords at the beginning of blog posts, just get it out of the way. Also, **Jamstack** is a cool word.

You can read more about what a **Jamstack** is over at https://jamstack.org/

</section>

My only real functional requirement is that I have a functioning blog. Where content can be added from the web interface. I shouldn't have to clone the repository and fire up an IDE in order to make any copy changes. Ideally, I should be able to make and publish new changes from a cell phone.

Each entry of the captains log blog should begin

`Captains Log, {{the date}}`

Regular markdown is great, but do you know what would make
it even better? React. Which is where **MDX** comes in,
which allows us to embed regular react components inside of
markdown.

<section>

`front-matter` was, as far as I can tell, built for a project called **jekyll**. The idea was to have some type of free form content, like a blog post, that you can attach meta data to.

**Jekyl**'s front-matter documentation https://jekyllrb.com/docs/front-matter

```yml
---
title: Cool Blog Post
date: 2020-06-05T20:30:09.656Z
---
some blog content
```

Jekyll would then compile all of this data and produce a static artifact. Much like we'll be doing here, only they wrote it in ruby.

</section>

We don't want the client to worry about rendering MDX content, so so we're going to be prerendering everything.

<section>

```ts
export const renderStaticMDX = (file: string) => {
  const blog = loadFile(file);
  // front matter will put document attributes in this
  // attribute field. The main content of the file
  // is in the body field.
  const { body, attributes } = blog;
  return ReactDOMServer.renderToString(<MDX scope={attributes}>{body}</MDX>);
};
```

Notice here, that the `front-matter` attributes get added to the scope
for the MDX renderer. This means we have access to these variables inside
the body of the post as well.

</section>

After we render it, its just a matter of attaching styles and displaying it to t he user.

```jsx
export default ({ child }: Props) => {
  return <StyledIndex dangerouslySetInnerHTML={{ __html: child }} />;
};
```

After that, Netlify CMS is going to handle most of the heavy lifting for
authentication on the admin portal, database management, and edit screens.
Asside from a configuration file describing the shape of our data, the only
complicated part is rendering page previews; and since we're SSRing all our pages anyway, it wasn't to complicated to connect the previews.

```jsx
const ThemedPage = (args: any) => {
  const { body, ...props } = args.entry.getIn(["data"]).toJS();
  const child = ReactDOMServer.renderToString(<MDX scope={props}>{body}</MDX>);
  return <Page {...props} child={child} />;
};
```

Okay, so now we have the boiler plate out of the way, we can build our thing. I've been adding MDX to everything for a while now, and this project will be no exception. I want to be able to write blog posts with MDX, provide some loose formatting guidlines and maybe some extra components as well as I see fit.

<heading>
 Log Blog prompt
</heading>

You know what it is. A generic prompt that starts the narative for the rest of the journal entry. We're already attaching a date to each journal entry so we might as well reuse it here also.

Because we're doing everything with React, it should be as simple as adding a new component to our MDX context and we can pass in the date we made sure to include in the MDX scope. 

```md
<Prompt date={date}/>
```

Which renders: 

<Prompt date={date}/>


<section>

<heading>
Whats next?
</heading>

* Hydrate MDX on the client
* Add a Comment section

**And beyond...**

At which point you can blog about being a starfleet captain or something, I don't know, I haven't gotten that far yet.




</section>

[https://github.githubassets.com/favicons/favicon.png](https://github.com/chewnoill/captains-log)

</article>

