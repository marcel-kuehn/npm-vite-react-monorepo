# Vite-React Monorepo Example

This repository demonstrates a monorepo setup using npm workspaces and Vite. The example projects use React, but this approach can work with any JavaScript framework.

**Use Cases and Limitations:**
This architecture is ideal for small projects, such as when you have a backend and a few frontends. It allows you to quickly get started and easily share types, configurations, styles, and components. However, it is intentionally minimalistic and may not scale well for large organizations or complex microservice architectures. For larger projects, consider using a more robust monorepo solution. Additionally, this setup is limited to the JavaScript ecosystem. If you plan to use a different language for your backend, it may not be suitable.

## Features

- Shared dependencies are defined in the root `package.json` and installed in a global `node_modules` directory
- The `shared` folder enables sharing of:
  - React components
  - Styles
  - Configurations, such as the Vite config
  - Types
- You can run and develop each project individually

## Setup

1. Clone the repository:

```bash
git clone git@github.com:marcel-kuehn/vite-react-multi-module-bundles.git
```

2. Install dependencies:

```bash
npm install -W
```

## Development

1. Open a terminal
2. Run one of the following options:

```bash
npm run dev:project-1
```

or

```bash
cd ./packages/project-1
npm run dev
```

## Build Output

For my use case, I need all build files consolidated in a single `dist` folder at the root of the repository. After running the build script from the root directory (`npm run build`), each project's build output is automatically collected in the root `dist` folder, with each project's artifacts placed in its own subfolder (e.g., `dist/project-1`, `dist/project-2`). However you can also just build each project individually.

## Projects

- [Project 1](./packages/project-1/README.md): Example Project 1
- [Project 2](./packages/project-2/README.md): Example Project 2
- [Shared](./packages/shared/README.md): Shared components and styles for both projects

## License

[MIT](LICENSE.md)
