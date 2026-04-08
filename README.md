This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# front-end borondeo app: /frontend-borondeo

You can see I have a frontend built with Next.js v16 + React 19 + Javascript + Tailwind CSS + Map Libre GL JS for rendering a map as main content. Header with title Borondeo and logo in front.
Right now this front end is deployed in Netlify.

## objective:

the purpose of this front end app with Next is taking advantage of its best practices:

- for building server components for SEO
- using folders structure for routes
- folder components for reusable pieces
- lib for api calls and related
- actions for taking place operations over forms across the whole app
- also using best practices for client/server components
- more...

## future functionalities:

- render map content with searching/filtering engine
  - filter options: [Sports, Experiences, History, Art, Nature]
- map is rendering marks with a trip information created inside.
  - only login users can create marks with trips.
  - public users can only see marks with short name description of the trip.
- public users can singup and login
- logged in users can manage all profile and session information.
- connection with API for all operations needed.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
