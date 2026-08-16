# Extração de frontend para portfólio

Você é um Arquiteto de Software Sênior. Extraia o FRONTEND visual deste projeto para o meu portfólio, no mesmo padrão da Colorimetria.

## Contexto do portfólio
- Site principal: `Portfolio design/` (Vite + React + TypeScript + Tailwind + React Router)
- Projetos ficam em: `Portfolio design/src/app/projects/[slug]/`
- Cada projeto é uma ROTA INTERNA (ex.: `/projetos/colorimetria`), NUNCA link externo
- Card em `src/app/data/projects.ts`
- Página wrapper em `src/app/pages/` com botão "Voltar ao portfólio" para `/` com `state: { scrollTo: "projects" }`
- Rota em `src/app/App.tsx` com `lazy()` + `Suspense`
- CSS isolado em `src/styles/[slug].css`, importado só na página do projeto
- Abrir o projeto SEMPRE no topo (`window.scrollTo(0, 0)` no mount)
- NÃO usar `ScrollRestoration` do React Router (quebra com BrowserRouter)

## Este projeto
- Nome: NUUMA
- Slug da rota: `nuuma`
- Pasta de origem: `https://github.com/Boyyypablo/Nuuma-2026`
- Descrição curta do card (PT): Landing page de telessaúde para cannabis medicinal — do médico ao medicamento
- Tags do card: React, TypeScript, Tailwind CSS, Vite
- Idioma da UI extraída: pt-BR

## O que EXTRAIR (somente o que o visitante vê)
- Layout visual completo: hero, seções, tipografia, cores, CSS
- Componentes de UI da landing/home
- Fontes (Google Fonts via CSS se não for Next.js)
- Imagens públicas (Unsplash/remoto ok; assets locais copiar para `public/` se necessário)
- Navegação interna por âncoras (`#secao`)

Fonte canônica da landing React:
- `src/pages/LandingPage.tsx`
- Componentes listados em `inventario.md`

## O que REMOVER
- Auth, login, cadastro, dashboard, APIs, banco, Prisma, env secrets
- Next.js (`next/image`, `next/link`, `next/font`) → trocar por `<img>`, `<a href>`, CSS fonts
- Dependências pesadas que o portfólio não usa (MUI, Radix extra, etc.)
- CTAs que levam a `/login`, `/register`, `/dashboard` → apontar para âncoras internas
- Também neste projeto: `/formulario`, `/acesso`, `/checkout`, `/identificacao`, `/endereco`, `/minha-conta`, `/acompanhamento-receita`, `/ja-tenho-receita`, `/renovar-receita`, `/analise-medica`, `/download-ebook.html` → âncoras internas (`#hero`, `#nuuma-como-funciona`, `#ebook`, `#contato`)
- README novo (não criar)

## Como integrar
1. Copiar/adaptar componentes para `Portfolio design/src/app/projects/nuuma/`
2. Adaptar CSS para `Portfolio design/src/styles/nuuma.css` (escopar para não vazar na home)
3. Criar `src/app/pages/NuumaPage.tsx` com voltar ao portfólio + scroll no topo
4. Registrar rota `/projetos/nuuma` com lazy load em `App.tsx`
5. Adicionar card em `projects.ts` (descrição simples + tags + path interno)
6. Validar `npm run build` e abrir localmente

## Regras
- Responder em português (PT-BR)
- Seguir o estilo do código existente
- Não commitar `.env`, PDFs, fotos pessoais ou secrets
- Não redirecionar para outro host/porta
- Manter o visual fiel ao original
- Antes de copiar, ler `inventario.md` desta pasta
- Copiar o padrão da Colorimetria (`/projetos/colorimetria`) arquivo a arquivo

## Checklist de entrega
- [ ] `src/app/projects/nuuma/` com a landing visual
- [ ] `src/styles/nuuma.css` escopado (ex.: `.nuuma-root`)
- [ ] `src/app/pages/NuumaPage.tsx` com Voltar + `window.scrollTo(0, 0)`
- [ ] Rota lazy `/projetos/nuuma` em `App.tsx`
- [ ] Card em `projects.ts` com path interno
- [ ] CTAs sem rotas de app (só âncoras)
- [ ] `npm run build` ok no portfólio
