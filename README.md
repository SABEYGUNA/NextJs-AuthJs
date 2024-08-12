
## Getting Started with [Next js](https://nextjs.org/) and [Auth.js](https://authjs.dev/)

Nextjs app created using [Create Next App](https://www.npmjs.com/package/create-next-app) CLI tool


`npm i create-next-app`

`npx create-next-app@latest`


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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Install auth.js npm

`npm install next-auth@beta`

To create auth secret key and environment variable

`npx auth secret`

`AUTH_SECRET={AUTH_SECRET}`

Add auth configuration and api files without providers

`src\configuration\auth.ts`

`src\app\api\auth\[...nextauth]\route.ts`

API can be tested browing to API method.
eg- Signin API can be tested 

`http://localhost:3000/api/auth/signin`

(Blank provider screen should load)

With setup of providers above signin api should diplay those.
Register application setup 'clientid' and 'clientsecreat' should be done with each provider before using that. 
eg- How to setup Github provider. 
`https://authjs.dev/guides/configuring-github`


Sign-in, 
Sign-out, 
User-Avator components can be use to basic user actions

