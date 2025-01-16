# Next.js node-fetch Error in getServerSideProps

This repository demonstrates a common error encountered when using `node-fetch` within the `getServerSideProps` function in a Next.js application.  The issue stems from the fact that `node-fetch` is not automatically included and needs to be imported and used correctly for server-side rendering.  The solution provides a corrected implementation.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.  You will encounter an error.

## Solution

The solution demonstrates how to correctly import and utilize `node-fetch` within the `getServerSideProps` function to avoid runtime errors.