# ReactJS Playground

A setup where multiple mini playgrounds called `modules` are built.

Modules are isolated mini-apps that have their own providers, therefore, are standalone from the other modules.

The purpose of each module is to test a certain concept or library. (see module list below)

Demo: https://catalinberta.github.io/reactjs-playground/

## Prerequisites

1. Install nvm:
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```
2. Ensure nvm is installed:
   ```
   nvm --version
   ```
3. Install node:
   ```
   nvm install node
   ```
4. Ensure node is installed:
   ```
   nvm use node
   ```

## Running from Command Line

1. First you will need to install the npm dependencies:
   ```
   npm install
   or
   yarn install
   ```
2. Run tests:
   ```
   npm test
   or
   yarn test
   ```
3. Run using npm:
   ```
   npm start
   or
   yarn start
   ```
4. Your client will be available on port 3000. Go to **http://127.0.0.1:3000/**.

5. You can stop the client using `Ctrl + C`. If you need to use the console for something else, you should open a new terminal tab or window.

## Main Tech Stack

- ReactJS
- typescript
- docker
- redux (classic && toolkit)
- react-query
- styled-components
- material-ui
- @testing-library w/ Jest

## Modules

### Redux Classic

A notes app using the classic un-opinionated redux implementation

### Redux Toolkit

The same notes app with redux, but with the opinionated redux toolkit instead

### useCallback() && useMemo()

A parent / child example to see how useCallback, useMemo and React.memo can be useful.

While it's a pretty basic example, it outlines how children can have complex layouts, data fetching or some heavy data processing part and should only re-render when necessary.
