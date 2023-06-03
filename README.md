## Bug

This reproduction renders 2 forms - one submits using route handlers and the other using server actions.

The form that uses server actions blocks navigation when the form is submitted and the request is in flight.



https://github.com/andrewmcoupe/server-actions-blocking-navigation/assets/24691226/37ad932d-f6d6-4bb7-8a46-4a391317a9a9



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
