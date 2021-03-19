# ReactJS Playground

A setup where multiple mini playgrounds called `modules` are built.

Modules are self-contained mini-apps that have their own providers, therefore, are standalone from the other modules/components.

The purpose of each module is to test a certain concept or library. (see module list below)

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

- ReactJS (ES6)
- Redux (RTK)
- Typescript
- React-Query
- Styled-Components
- Material-UI
- @testing-library w/ Jest

## Modules

### Redux Classic

### Redux Toolkit
