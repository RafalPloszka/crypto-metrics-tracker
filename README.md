# Crypto metrics tracker

This is a simple app for comparing TG growth index between L1 blockchains (currently only Ethereum and Solana are supported). The data is presented on an interactive chart, and users can alter the data granularity between 1, 2, and 4 weeks. TokenGuard API is used to fetch the data.

Tech stack: Typescript, React, Vite, radix-ui, SWR, recharts.

For local development run:
```
pnpm install
pnpm run dev
```

The app is deployed to Vercel, you can view it [here](https://crypto-metrics-tracker.vercel.app/).
