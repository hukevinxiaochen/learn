# Gatsby

## Contribute
* [Where to Participate in the Community | Gatsby](https://www.gatsbyjs.com/contributing/where-to-participate/)
	* [Discord](https://gatsby.dev/discord)
	* [How to File an Issue | Gatsby](https://www.gatsbyjs.com/contributing/how-to-file-an-issue/)

## Get started
`npm install -g gatsby-cli`
`gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world`
`gatsby develop`
-> <http://localhost:8000/> for the main hello world page
-> <http://localhost:8000/___graphql> for a GUI to view the database schema

`gatsby build`
`gatsby serve`
`gatsby --help`
`gatsby COMMAND_NAME --help`
**Reference** [Commands (Gatsby CLI) | Gatsby](https://www.gatsbyjs.com/docs/gatsby-cli/)

Gatsby is built to be used through its command line interface. [gatsby-cli](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-cli) is written in typescript and uses rollup to compile an executable.

## Project Structure
```
project
| src/
| | pages/
| | | index.js
```

## Features
* `eslint` can be used with Gatsby easily
	* [Using ESLint | Gatsby](https://www.gatsbyjs.com/docs/eslint/)
* Pages are any React component defined in `src/pages/*.js`
	* `src/pages/about.js` will have URL of http://localhost:8000/about/
* Reusable sub-components into `src/components`
* Links between pages can be easily done with `import { Link } from “gatsby”` and `<Link to="/about">About</Link>`
* Unit tests are supported with the following tools
	* `npm install --save-dev jest babel-jest react-test-renderer babel-preset-gatsby identity-obj-proxy`
* Deployment to Heroku is easy with the following buildpacks enabled on that side
	* `heroku buildpacks:set heroku/nodejs`
	* `heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git`
	* Add a `static.json` file to tell heroku where the static files will be and how to cache.
* Style the site in any number of ways [Standard Styling with Global CSS Files | Gatsby](https://www.gatsbyjs.com/docs/global-css/)
	* The global css in `gatsby-browser.js` approach
		* Every site has global styles for typography and background colors
		* Put global standard css styles in `src/styles/global.css`
		* Include the style in a new top-level file called `gatsby-browser.js`
	* The layout component approach - these will override any `gatsby-browser.js` global styles
		* `src/components/layout.css`
		* `src/components/layout.js` exports a `Layout` component and imports `./layout.css`
		* `Layout` component renders `<div>{children}</div>`
	* Component-scoped style
		* CSS modules are ::A **CSS Module** is a CSS file in which all class names and animation names are scoped locally by default.::
		* Make a file in `src/components/layout.module.css` which Gatsby supports by default
			* Use a class selector like `.layout { background: ...}`
		* Then in the Layout component file you can `import layoutStyles from "./layout.module.css"`
		* Then apply a `className=layoutStyles.layout` prop to what one will render
	* CSS-in-JS is supported via certain Gatsby plugins and Emotion + Styled Components are ones to try out
		* [Emotion | Gatsby](https://www.gatsbyjs.com/docs/emotion/)
		* [Styled Components](https://www.gatsbyjs.com/docs/styled-components/) 
* Layout components are for
	* sections of your site that you want to share across multiple pages. For example, sites will commonly have a layout component with a shared header and footer.
* Plugins can be used to extend functionality (see example with Typography.js below)
	* 	To incorporate a new Gatsby plugin - one must restart the development server
	* We’ll use [Typography.js](https://kyleamathews.github.io/typography.js/) as practice
	* We install the necessary plugin packages
		* `npm install gatsby-plugin-typography react-typography typography typography-theme-fairy-gates`
	* Then modify `gatsby-config.js`

```javascript
module.exports = {
  plugins: [{
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`
    }
  }],
}
``` 
		* More on [Gatsby Config API | Gatsby](https://www.gatsbyjs.com/docs/gatsby-config/)
	* Typography.js specifically needs its own config file

```javascript
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
```

* Gatsby can programmatically generate pages through its GraphQL data layer. (Aside: one could also use the node createPages API instead of GraphQL)
	* First step is to check out the  [Plugin Library](https://www.gatsbyjs.com/plugins/)  to see if the source plugins and/or transformer plugins you’d like to use already exist.
	* If they don’t exist, read the  [Plugin Authoring](https://www.gatsbyjs.com/docs/creating-plugins/)  guide and consider building your own!
	* A place for these common bits of data is the siteMetadata object in the `gatsby-config.js` file. This makes it available for query in a component.
```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  }
}

```
	* **Page queries** Here is how to query this siteMetadata in a page component
```javascript
import { graphql } from "gatsby"
export default function About({ data }) {return <h1>About {data.site.siteMetadata.title}</h1>}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```
	* **Non-page queries** For a non-page component [StaticQuery | Gatsby](https://www.gatsbyjs.com/tutorial/part-four/#use-a-staticquery)
		* `import {useStaticQuery, graphql} from "gatsby"`
	* [GraphiQL](http://localhost:8000/___graphql) is an interactive query building tool
	* **Source plugins** like `gatsby-source-filesystem` makes `allFile` and `file` available as query fields and pull data into Gatsby - making it available for query.
```javascript
module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`
    }
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`
    }
  }],
}
```
		* Position your cursor after allFile in the query area, and then type ::Ctrl + Enter::. This will ::pre-fill a query for the id of each file::. 
		* It’s often helpful when creating a new component to console out the data you’re getting from the GraphQL query so you can explore the data in your browser console while building the UI.
	* **Transform plugins** like `gatsby-transformer-remark`
	* Create new pages from data
		* 1. Generate the “path” or “slug” for the page.
			* API gatsby-source-filesystem
				* createFilePath
		* 2. Create the page.
			* API onCreateNode
				* node
					* parent
					* relativePath
					* internal
						* type -> `MarkdownRemark`
				* getNode
				* actions
					* createNodeField
					* createPage
			* API createPages
* Progressive web application support via plugin ecosystem
	* `gatsby-plugin-manifest`
	* `gatsby-plugin-offline`
	* `gatsby develop` when run with lighthouse is too slow to render for a PWA `gatsby build && gatsby serve` is fine
* SEO support via `gatsby-plugin-react-helmet` and `react-helmet`

## Internals
`gatsby-browser.js` is one of a handful of special files that Gatsby looks for and uses (if they exist). Read more [Gatsby Browser APIs | Gatsby](https://www.gatsbyjs.com/docs/browser-apis/).

## Plugins
[gatsby-source-filesystem | Gatsby](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=) creates File nodes from files 

## Resources
[Get to Know Gatsby Building Blocks | Gatsby](https://www.gatsbyjs.com/tutorial/part-one/)
[GitHub - heroku/heroku-buildpack-static: Heroku buildpack for handling static sites and single page web apps](https://github.com/heroku/heroku-buildpack-static#configuration)
[Deploying to Heroku | Gatsby](https://www.gatsbyjs.com/docs/deploying-to-heroku/)
[Unit Testing | Gatsby](https://www.gatsbyjs.com/docs/unit-testing/)
