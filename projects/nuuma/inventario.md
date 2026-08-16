# Inventário — extração visual NUUMA → portfólio

Copiar só o que a landing mostra. Não levar checkout, OTP, pagamentos nem APIs.

## Origem → destino

| Origem (este repo) | Destino (Portfolio design) |
|---|---|
| `src/pages/LandingPage.tsx` | `src/app/projects/nuuma/` (composição) |
| `src/components/Navbar.tsx` | `src/app/projects/nuuma/` |
| `src/components/Hero.tsx` | `src/app/projects/nuuma/` |
| `src/components/HowItWorks.tsx` | `src/app/projects/nuuma/` |
| `src/components/HowItWorksExistingRecipe.tsx` | `src/app/projects/nuuma/` (visual; CTAs viram âncoras) |
| `src/components/TreatmentAreas.tsx` | `src/app/projects/nuuma/` |
| `src/components/EbookSection.tsx` | `src/app/projects/nuuma/` |
| `src/components/MidCtaSection.tsx` | `src/app/projects/nuuma/` |
| `src/components/AboutSection.tsx` | `src/app/projects/nuuma/` |
| `src/components/Footer.tsx` | `src/app/projects/nuuma/` |
| `src/hooks/useLanguage.ts` | `src/app/projects/nuuma/` (só se o Footer/i18n da landing precisar; UI em pt-BR) |
| Tokens/cores de `src/index.css` | `src/styles/nuuma.css` (escopado em `.nuuma-root`) |
| Fontes Google (index.html) | `@import` no `nuuma.css` |
| `imagens/` (raiz; Vite copia para `public/imagens`) | `Portfolio design/public/imagens/nuuma/` (ajustar paths) |

`BaixoCustoSection.tsx` **não** entra na `LandingPage` atual — opcional, só se o visual original depender dela.

## Âncoras da landing (manter)

- `#hero`
- `#nuuma-como-funciona`
- `#ja-tem-receita`
- `#areas`
- `#ebook`
- `#sobre`
- `#contato`
- `#idiomas`

## Remapear CTAs (nunca navegar para o app)

| Hoje | No portfólio |
|---|---|
| `navigate('/formulario')` (Hero, Navbar, HowItWorks, MidCta, About) | `#hero` ou `#nuuma-como-funciona` |
| `to="/acesso"` (Navbar) | `#contato` |
| `navigate('/acompanhamento-receita')` | `#ja-tem-receita` |
| `navigate` em HowItWorksExistingRecipe (`opt.path`) | `#ja-tem-receita` |
| `href="/download-ebook.html"` (EbookSection) | `#ebook` |
| Links `/tea-tdah.html`, `/epilepsia-*.html`, `/fibromialgia-*.html` | `#areas` |
| Qualquer `/checkout`, `/identificacao`, `/minha-conta` | âncora da seção correspondente |

## Não copiar

- `src/pages/` de fluxo: Formulario, Identificacao, Endereco, Checkout*, Sucesso, Acesso, MinhaConta, AnaliseMedica, JaTenhoReceita, RenovarReceita, AcompanhamentoReceita
- `TurnstileWidget`, pagamentos, OrderSummary, CheckoutStepper, CreditCardPayment, Payment*
- `api/`, `services/`, `middleware/`, `admin-panel/`, `exportacao-pagamento/`
- `.env`, PDFs, e-book binário, tokens, Turnstile/Asaas
- Framer Motion se o portfólio da Colorimetria não usar — preferir CSS já existente
- Páginas HTML avulsas (`tea-tdah.html` etc.) salvo se forem essenciais ao visual da home (não são)

## Fontes

Do `index.html` da origem:

```
DM Sans, Inter, Playfair Display
```

A landing React também usa **Poppins** e **Open Sans** inline. Incluir no `nuuma.css`:

```
https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Open+Sans:wght@400;500;600;700&display=swap
```

## Assets locais citados na landing

Copiar da pasta `imagens/` da origem (se existir no checkout):

- `/imagens/CBD_bottle.png` (+ fallback `/imagens/cbd.jpg`)
- `/imagens/book 1.png` (URL encoded `book%201.png`)
- `/imagens/tratamento-cuidado-unico.jpg`
- `/imagens/como/Vector.png`, `Vector-1.png` … `Vector-6.png`
- `/imagens/stock/child_therapy_sessio_bba3d6e7.jpg`
- `/imagens/stock/person_stretching_yo_b8e5e86f.jpg`
- `/imagens/stock/senior_patient_smili_b9a95e68.jpg`
- fallbacks em `/imagens/áreas/`
- ícone `/imagens/nuuma-icone.ico` (favicon do case, se o card/página usar)

No portfólio, preferir paths sem espaços, ex.: `/imagens/nuuma/book-1.png`.

## Escopo CSS (obrigatório)

Envolver a página do case em `.nuuma-root`. Não deixar `body { background: gradient }` global vazar para a home do portfólio. Tokens `--purple`, `--orange`, `--pink` e tipografia só valem dentro de `.nuuma-root`.

## Wrapper da página (espelhar Colorimetria)

`NuumaPage.tsx`:

- `useEffect` → `window.scrollTo(0, 0)`
- Botão/link **Voltar ao portfólio** → `navigate('/', { state: { scrollTo: 'projects' } })`
- Importar `../../styles/nuuma.css` só nesta página
- Renderizar o projeto extraído dentro de `.nuuma-root`
