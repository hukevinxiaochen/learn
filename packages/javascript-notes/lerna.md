# Learning about Lerna

## Who is Lerna for?

People...

- with a large codebase that is split into many smaller, independently versioned packages to encourage code sharing.
- who have decided to put all these packages into one large repository called a monorepo.

## What does the monorepo look like?

```
my-lerna-repo/
  lerna.json
  package.json
  packages/
    package-1/
      package.json
    package-2/
      package.json
```

## What can Lerna do?

- Eases the making and tracking of changes across many repositories using git and npm.
- Optimize time and space requirements for numerous copies of packages in development and build environments.
  - `lerna bootstrap` is like running `npm install` in each package, and can handle situations where one package in the monorepo depends on another package also in the monorepo using symlinks. See [Rachita Bansal][rachita]'s excellent Medium post about this.
  - `lerna bootstrap --hoist` helps detect duplicate dependencies among packages and will install common dependencies to a top-level `node_modules` directory. Read more in [--hoist](https://github.com/lerna/lerna/blob/main/doc/hoist.md).

## How does one get started using Lerna?

### In Fixed/Locked mode (default)

```
$ mkdir lerna-repo && cd $_
$ npx lerna init
```

```
lerna-repo/
  packages/
  package.json
  lerna.json
```

The `package.json` file has `lerna` itself specified as a dependency.

### Independent mode

`lerna init --independent`

## How do I add a package to my Lerna repository?

- Create a directory for the package in the `packages` folder and run `npm init` to create the package.json for the new package. OR `lerna import <local_path_to_package>` for an existing package that is on the file system.
- To install dependencies, run `lerna bootstrap` instead of `npm install`.

## Resources

- [FAQ](https://github.com/lerna/lerna/blob/main/FAQ.md)
- [Troubleshooting Guide](https://github.com/lerna/lerna/blob/main/doc/troubleshooting.md)
- [Jody Heavener - DEV.TO](https://dev.to/jody/using-lerna-to-manage-your-javascript-monorepo-4eoo)
- [Rachita Bansal - Medium][rachita]
- [Ben Awad - YouTube](https://youtu.be/p6qoJ4apCjA)

---

[rachita]: https://medium.com/@rachitabansal/introduction-to-lerna-3fb7382a4d4e
