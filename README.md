# Portfolio Platform SPA

A responsive React single-page application built to showcase creative agency projects, add new work dynamically, and search through the portfolio in real time.

## Features

- Landing page with featured project metrics and search bar
- Dynamic portfolio list with reusable project cards
- Add new projects with a controlled form
- Live project search by title, client, category, or description
- Responsive layout for desktop and mobile
- Unit tests with Vitest and React Testing Library

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in the browser at `http://localhost:5173`.

## Testing

Run unit tests with:

```bash
npm test
```

## Project structure

- `src/App.jsx` — main application logic and state management
- `src/components` — reusable UI components
- `src/App.css` — application styles
- `src/App.test.jsx` — integration tests for the app

## Notes

The portfolio state is currently stored locally in React state. It can be extended later to persist data in a backend API or storage service.
 https://yennifer-cell.github.io/SPA-project/
