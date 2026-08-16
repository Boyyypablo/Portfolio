# Colorimetria — Landing (export para portfólio)

Frontend standalone da landing page do projeto **Colometria**, extraído para uso em portfólio.

## O que está incluído

- Layout completo da landing (hero, serviços, processo, sobre, depoimento, CTA)
- Tipografia (Bodoni Moda, Fraunces, DM Sans)
- Estilos customizados (`lp-*`)
- Imagens via Unsplash (remotas, sem arquivos locais)

## O que foi removido

- Autenticação (NextAuth)
- Backend, banco de dados e APIs
- Links para `/login`, `/register`, `/analyze`, `/dashboard`
- Dependências do app completo (Prisma, ML, shadcn, etc.)

Os CTAs apontam para âncoras internas (`#comecar`, `#servicos`), adequado para demonstração visual no portfólio.

## Como rodar

```bash
cd portfolio-export/colometria-landing
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

Deploy compatível com Vercel, Netlify ou qualquer host que suporte Next.js.

## Estrutura

```
colometria-landing/
├── src/
│   ├── app/
│   │   ├── globals.css      # estilos da landing
│   │   ├── layout.tsx       # fonts + metadata
│   │   └── page.tsx
│   ├── components/landing/
│   │   ├── LandingHome.tsx
│   │   └── LandingServiceCard.tsx
│   └── lib/
│       └── landing-images.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Créditos

Design e copy do produto Colometria. Fotos: [Unsplash](https://unsplash.com).
