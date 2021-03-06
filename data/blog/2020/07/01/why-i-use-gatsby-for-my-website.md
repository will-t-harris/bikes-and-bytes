---
path: "/why-i-use-gatsby-for-my-website"
title: "Why I Use Gatsby for My Website"
date: "2020-07-01"
---

I built this website using [React](https://reactjs.org/) and [Gatsby](https://www.gatsbyjs.org/). Partially this was to give me the opportunity both to learn a new tool (Gatsby) and to practice with GraphQL.

Recently I stumbled across [this blog post](https://beesbuzz.biz/blog/2934-Advice-to-young-web-developers) listing things the author would "like younger developers to think about."

Many of the points in the article seem to bemoan the widespread use of front-end frameworks in web development. I can sympathize with this point; as the author says, "sometimes a website is just a website."

However, I do think that there are good reasons for using React and Gatsby&mdash;or other static site generators&mdash;to create websites. I want to use this post to explore some of my reasons for embracing Gatsby.

I also want to encourage anyone to challenge me on these reasons. I use Gatsby because I genuinely think it is the best tool for my use-case, but am always open to learning better ways of doing things.

### Image optimization

Images account for a significant portion of the size of most websites. Because of this, optimizing images can greatly improve a website's performance. The fewer bytes to download, the faster the browser can get to rendering content on the screen.

Best practices for performance across a range of devices call for multiple image sizes and resolutions. We could manually create different versions of every image that we use on a website, but this adds a lot of duplicate work for every image that we include. Another downside of the manual approach is the added bookkeeping involved in ensuring that all of the images get optimized before they make it to production.

Gatsby makes image optimization much easier, harnessing the power of build plugins and transformers to eliminate most of the manual work. 

Gatsby sources data using source plugins, which allow the developer to pull data from different sources. `gatsby-source-filesystem` sources data into our application from the project's local filesystem, creating `File` nodes in Gatsby's GraphQL API. Gatsby applies various transformer plugins to these `File` nodes, turning them into various other types of nodes. For image processing, the `gatsby-transformer-sharp` plugin takes supported image files and creates `ImageSharp` nodes from them.

These `ImageSharp` nodes can then be manipulated by the [Sharp image processing Node.js library](https://github.com/lovell/sharp) to help with image processing and optimization. We perform these manipulations with GraphQL queries in Gatsby, which allow Gatsby and Sharp to perform all of our required optimizations while building the final static site. This is where we save a *ton* of work compared to optimizing images manually. We only need to configure how we want our images optimized, and Gatsby handles the rest.

Gatsby also ships an [image component](https://www.gatsbyjs.org/packages/gatsby-image/) that is designed to work well with Gatsby's GraphQL queries. It is optimized specifically for fixed width/height images and images that stretch to fit full-width containers. 

The `gatsby-image` component automatically helps with image optimization in several ways. It:

- Loads the optimal image size for a given screen size, using the [`srcset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) property on a [`picture` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) to load the correct image size for the current viewport.
- Holds the image's position in the document with a placeholder so that the page doesn't jump around as images load.
- Uses either a "blur-up" effect or a "traced-placeholder" SVG to show a visual placeholder while the full image loads.
- Lazy loads images, reducing bandwidth and load time.
- Can convert images to the [WebP](https://developers.google.com/speed/webp/) format if it is supported by the browser.

All of these features are "batteries-included" with the `gatsby-image` component, saving the developer a ton of manual image optimization work.

### No Backend / Moving Parts

Setting up a "traditional" website is a fairly complex process. From provisioning VMs to run instances of a server-side app, to configuring [Docker](https://www.docker.com/) images to ensure a consistent environment, to configuring auto-scaling solutions like [Kubernetes](https://kubernetes.io/). There are a lot of moving pieces to keep track of. 

And if we want to deploy any changes to our site with this structure, it involves deploying a completely new version of the site. We'd have to spin down existing versions of the service, spin up the new version, and deal with any issues that might pop up during the process.

Gatsby simplifies this process by building websites as static HTML files which can be hosted on a [CDN](https://developer.mozilla.org/en-US/docs/Glossary/CDN), getting our content as close as possible to our users. We can then configure a continuous integration (CI) system to rapidly build and deploy code updates to the CDN.

My site is hosted on [Netlify](https://www.netlify.com/), which allows me to use a GitHub repository as my CI system. If I want to publish a new version of the site, all I need to do is merge a pull request into my main branch. Netlify is constantly listening for pushes to that branch&mdash;as soon as changes are noticed, a new version of the site is built with Gatsby and pushed to the CDN. Typical deploys for me right now take about one minute.

Both approaches can result in robust, performant websites. However, deploying and hosting static content via CDN has *far fewer* moving pieces and completely removes the server management aspect of developing a website.

### Build Optimizations

Gatsby sites are built in React and then built into static HTML files by Node.js processes. The process of converting pages and content on the server into HTML is called server-side rendering (SSR), and it's nothing new. 

Developers have been rendering HTML pages on servers for many years. Previously, however, sites would use languages like PHP on the server to fetch data from databases, in response to user requests, and compile it into an HTML document to send to the user.

With Gatsby, **all of the SSR magic occurs during the build process**. This build process has quite a few steps, but as a quick summary:

1. Gatsby checks for data sources defined in the `gatsby-config.js` and `gatsby-node.js` files. It then creates `Node` objects from the data it finds in these sources.
2. Gatsby infers a GraphQL schema from the `Node` objects created in the previous step. This step is where Gatsby essentially forms the data layer for our application, making all of the data brought in from our sources available in a GraphQL schema.
3. Gatsby creates pages from the React components in our site.
4. GraphQL queries from our React components are extracted from our components and run against the GraphQL layer, providing data for all of the HTML pages.
5. Static files are created for all of our pages, with all data bundled alongside our views in the `public` directory.

The resulting HTML files created by Gatsby also use modern browser APIs to maximize performance, resulting in *crazy fast* websites. 

It harnesses the [`IntersectionObserver` API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), which conditionally performs actions when elements enter the browser's viewport. 

Specifically, in Gatsby `IntersectionObserver` is implemented in the `Link` component for routes internal to the site. The behavior has two parts:

1. An `IntersectionObserver` is registered for all `Link` components. This registers an [idle](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) [`prefetch`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ) request for each `Link`'s resources, allowing the browser to automatically start loading those resources as soon as the browser is in an idle state.
2. On a `mouseenter` event for any `Link` component, a `fetch` request is fired with a non-idle request for the `Link`'s resources.

In combination, these two techniques almost guarantee that internal page data will be prefetched, which makes page loads on our site feel instantaneous.

### Plain Text

One additional benefit I've found in using a system like Gatsby for my writing is the ability to keep all of my data in plain text markdown files.

As Dave Thomas and Andy Hunt write in *The Pragmatic Programmer*:

> The problem with most binary formats is that the context necessary to understand the data is separate from the data itself. You are artificially divorcing the data from its meaning. The data may as well be encrypted: it is absolutely meaningless without the application logic to parse it. With plain text, however, you can achieve a self-describing data stream that is independent of the application that created it.

By keeping all of my writing in markdown files, I guarantee that I'll never be dependent on a specific piece of software to use my content. I also can harness the inherent semantics of markdown to generate HTML elements from my writing.

Gatsby uses the `gatsby-transformer-remark` plugin to make the contents of my markdown files available in GraphQL, allowing me to inject the generated HTML into my blog posts at build time.

---

This is by no means a complete list of reasons for choosing static site generators like Gatsby for building modern websites, but I hope it can at least be helpful for anyone who hasn't yet jumped into the Gatsby ecosystem. It can be intimidating at first, but the time spent learning the system is well worth it for the speed of the final site. The developer experience building and maintaining a Gatsby site is also excellent.

Do you have other static site generators or other approaches to building websites that you're crazy about? Tweet me [@will__tweets](https://twitter.com/will__tweets) and let me know, I'd love to hear about it!
