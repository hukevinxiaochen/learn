# MDX
#use/javascript

* `@mdx-js/mdx` | [Repo](https://github.com/mdx-js/mdx/tree/master/packages/mdx)
* `@mdx-js/react` | [Repo](https://github.com/mdx-js/mdx/tree/master/packages/react)

* `@mdx-js/mdx` -> function that takes a string with MDX in it, and an object with options and returns a JSX string; try the following to convince yourself
```javascript
const mdx = require('@mdx-js/mdx')
mdx(`# header`).then(result => console.log(typeof result))
```

The string that it outputs is valid JSX that exports a component called `<MDXContent />`

```jsx
/* @jsxRuntime classic */
/* @jsx mdx */
const layoutProps = {
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">
    <h1>{`header`}</h1>
    </MDXLayout>;
};
MDXContent.isMDXComponent = true;
```

- - - -
```javascript
const babel = require('@babel/core')
const React = require('react')
const {renderToStaticMarkup} = require('react-dom/server')
const mdx = require('@mdx-js/mdx')
const {MDXProvider, mdx: createElement} = require('@mdx-js/react')

const transform = code =>
  babel.transform(code, {
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-proposal-object-rest-spread'
    ]
  }).code

const renderWithReact = async mdxCode => {
  const jsx = await mdx(mdxCode, {skipExport: true})
  const code = transform(jsx)
  const scope = {mdx: createElement}

  const fn = new Function(
    'React',
    ...Object.keys(scope),
    `${code}; return React.createElement(MDXContent)`
  )

  const element = fn(React, ...Object.values(scope))
  const components = {
    h1: ({children}) =>
      React.createElement('h1', {style: {color: 'tomato'}}, children)
  }

  const elementWithProvider = React.createElement(
    MDXProvider,
    {components},
    element
  )

  return renderToStaticMarkup(elementWithProvider)
}
```

## Resources
* 