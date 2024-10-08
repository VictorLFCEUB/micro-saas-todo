This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

PARA CONTEXTUALIZAR
1 Criar os arquivos Next
```bash
npm create next-app
```
2 Importar o ShacnUI
```bash
npx shadcn@latest init -d
```
3 Adicionar componentes 
```bash
npx shadcn@latest add
```
3 Criar a interface no v0
4 Criar a pasta e arquivo ´src/app/auth/page.tsx´
5 Criar a pasta e arquivo ´src/app/app/page.tsx´
6 Criar a pasta e arquivo ´src/app/auth/_components/auth-form.tsx´
*Utilizando Server Components ao invés de Client Componets por ter banco/base de dados*
7 Colar o código copiado do v0 
8 Rodar o código e entrar no ´http://localhost:3000/auth´
9 Instalar a biblioteca hook-form
```bash
npm i react-hook-form
```
10 Continuar no vídeo https://www.youtube.com/watch?v=Lvxpl0bwYf8 13:17
11 Instalar o Auth Beta
```bash
npm install next-auth@beta
```
12 Configurar o Next Auth utilizando a documentação
https://authjs.dev/getting-started/installation
13 Instalar o Prisma 
```bash
npm install prisma --dev
```
14 Iniciar o Prisma
```bash
npx prisma init
```
15 Configurar o Prisma
16 Iniciar a Migrate
```bash
npx prisma migrate dev --name init
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
 