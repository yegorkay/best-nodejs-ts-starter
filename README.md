<h1 align="center">The Best Node TypeScript Starter, Period.</h1>

<h2 align="center">Features</h2>

<div align="center">

- [x] TypeScript
- [x] Node
- [x] Jest
- [x] Github Action Template
- [x] Best general purpose PR template
- [x] Precommit hooks that run tests, lint your files, and prettify all your TS jank

</div>

## Why is it the best?

- I made it :heavy_check_mark:
- This repo can be anything other than an express server :scream_cat:
- Infinitely customizable :art:

## FAQ:

Why is the prettier config not the way I want it?

- Read some of the [Prettier docs](https://prettier.io/docs/en/options.html).

Why is the eslint config so opinionated?

- It's based on Airbnb's config with some personal preferences thrown in there.
- Read the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

Why are the precommit hooks not configured the way I need for my project?

- Read up on the [lint-staged docs](https://github.com/okonet/lint-staged) and [Husky docs](https://typicode.github.io/husky/#/).

But we need our CI to deploy somewhere! And we need it to do more things! Where's the repo that has that?

- Read the [Github Action docs](https://docs.github.com/en/actions)
- Have you heard of AWS, Heroku, Azure, Vercel, or Digital Ocean? There's likely an action that can be the last step in the `deploy.yml` file, and a hosting service that suits your needs.

I don't like TypeScript, but I like everything in the repo. What do I do?

- Convert all the `.ts` extensions into `.js` extensions
- Uninstall all `@types` from `package.json`
- Uninstall all eslint typescript libraries from `package.json`
- Delete the `tsconfig.json`, maybe make a `jsconfig.json` if you must
- Change the start script to `node index.js`
- Congrats, you're playing JavaScript on hard mode!

## Commands

Install dependencies:

```
npm i
```

Run project:

```
npm start
```

Run build:

```
npm run build
```

Run tests:

```
npm t
```
