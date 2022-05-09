## Innoloft Dashboard

A new dashboard with which you can display and edit product information.

## Features

1. Layout: Header, Aside and Main

- Header contains Innoloft Logo, a toggle switch to switch between APP 1 & 2 and a menu icon that displays the navigation on mobile view.
- Aside contains navigation that is displayed from the desktop view.
- Main contains the main section.

2. Navigation contains home and product navigation.

3. Pages: Home and Product

- Home page displays only the logo.
- Product page displays product information: Product info, Product description, User info (only displays when the `hasUserSection` from the app config is `true` ) and Map.

4. Editing Product: only the following product information can be edited. Note this does not save on refresh because the API does not save the request.

- Description
- Attributes

5. Creating Product: only the following product information can be created. Note this does not save on refresh because the API does not save the request.

- Attributes

6. White-Labeling
   This is done with configurations on the `.env` file and on the UI with the toggle switch.

## Installation

You would need to have [Node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed.

To install dependencies, you can run:

```bash
yarn
```

## Running the project

To run the project locally, in the project directory, run:

```bash
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

To run test locally, in the project directory, run:

```bash
yarn test
```

## Technologies used

- React and TypeScript: used to build the UI components
- Tailwind CSS: for styling
- Redux (Redux toolkit): for managing app state
- React Query: for managing server state
- React testing library, React hooks testing library, MSW : for testing
- Draftjs: for building a rich text editor on the product description tab
- Eslint for linting and Prettier for code formating
