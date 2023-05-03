# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions](https://www.netlify.com/products/functions/)

<details> 
<summary>Netlify Setup</summary>
1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

```sh
netlify dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```

</details>

<details>
<summary>My learnings</summary>

### Why Remix?

I decided to pick [remix](https://remix.run/) as my framework after hearing it on the [syntax](https://syntax.fm/) podcast. I am confident with using React and have used Next.js in a previous project, Remix also seemed to boast about a lightining fast UI that excited me.

### Tailwind

Remix discourages against runtime libraries like styled-components but suggests tailwind to be okay. They recommend the use of more traditional CSS to make better use of browser caching and unloading.

### Prisma

Remix mentions the use of Prisma in its tutorials, and vise versa. Prisma is a type-safe ORM which makes working with databases easier. You can define models in the prisma language and make use of the auto-completion it provides.

#### More on Remix

Remix has some special conventions built in. One is that any file with .server in the file name will not be run in the browser and the compiler can ignore it.

In order to access data from an endpoint, we use `useLoaderData()` from `@remix-run/react`. We have to create a loader async function that calls the endpoint, and then made accessible via `useLoaderData()`. An example is provided in the [docs](https://remix.run/docs/en/main/tutorials/jokes#read-from-the-database-in-a-remix-loader).

</details>
