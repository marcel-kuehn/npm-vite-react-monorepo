# Vite-React-Monorepo-Example

This is an example implementation of a monorepo leveraging npm workspaces and vite.
The example projects in this repo use React, but this will probably work with any other
JS-Framework.

## Features

- Shared packages are defined in the global package.json and stored in a global node_modules directory
- In the shared folder you can share:
  - React components
  - Styles
  - Configs, such as the vite config
- You can run and develop each project individually

## Setup

1. Clone the repository

```bash
git clone git@github.com:marcel-kuehn/vite-react-multi-module-bundles.git
```

2. Install dependencies

```bash
npm install -W
```

## Development

1. Open terminal
2. Run either one of the following options:

```bash
npm run dev:project-1
```

or

````
cd ./packages/project-1
npm run dev
```

## Projects

- [Project 1](./packages/project-1/README.md): Example Project 1
- [Project 2](./packages/project-2/README.md): Example Project 2
- [Shared](./packages/shared/README.md): Shared components and styles between 1 and 2

## License

[MIT](LICENSE.md)
````
