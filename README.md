## Bug

This reproduction renders 2 forms - one submits using route handlers and the other using server actions.

The form that uses server actions blocks navigation when the form is submitted and the request is in flight.

## Deployed reproduction
A deployed version of this reproduction can be found [here](https://server-actions-blocking-navigation.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
