# Portfólio — Diego Carvalho

Portfólio bilíngue (PT-BR e EN) construído com **Next.js (App Router) + TypeScript + Tailwind CSS**,
exportado como site 100% estático.

## Como rodar

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # gera o site estático na pasta out/
npx serve out      # (opcional) serve o build de produção localmente
```

Outros comandos: `npm run lint` (ESLint), `npm run format` (Prettier).

## Deploy (manual)

`npm run build` gera a pasta `out/` pronta para **qualquer hospedagem estática**
(Cloudflare Pages, Netlify, Vercel, GitHub Pages, S3, etc.). Basta subir o conteúdo de `out/`.

> As configurações antigas de deploy foram removidas de propósito: não há mais `vercel.json`
> nem script `gh-pages`, e o site não usa mais o base path `/diego-portifolio/`. Ele funciona
> na raiz de qualquer domínio.

Antes de publicar, preencha em [`content/site.ts`](content/site.ts):

- `SITE_URL` — domínio final (usado em canonical, Open Graph, sitemap e robots)
- `LINKEDIN_URL` — URL real do LinkedIn

## Estrutura

- `app/(pt)/…` — rotas em português (`/`, `/projetos/<slug>/`)
- `app/(en)/en/…` — rotas em inglês (`/en/`, `/en/projects/<slug>/`)
- `content/pt/` e `content/en/` — **todo** o texto do site (nenhuma string nos componentes)
- `content/site.ts` — contatos, URLs e caminho do currículo
- `components/` — componentes React (seções da home, estudo de caso, diagramas SVG)
- `lib/routes.ts` — mapa de slugs PT↔EN dos estudos de caso
- `public/cv/Diego_Carvalho_CV.pdf` — currículo baixável

## Como traduzir ou editar um texto

Cada texto existe em dois arquivos espelhados: `content/pt/<arquivo>.ts` e
`content/en/<arquivo>.ts`, ambos tipados por `content/types.ts`. Edite os dois —
o TypeScript acusa se algum campo faltar.

## Como adicionar uma imagem nova

Convenção: `public/images/projects/<slug>.webp`. Converta com:

```bash
npm run convert-image -- <arquivo-original> projects/<slug>.webp          # web (máx. 1600px)
npm run convert-image -- <arquivo-original> projects/<slug>.webp --max 800  # captura de celular
```

O script converte para WebP e registra as dimensões em `lib/image-manifest.json`
(usadas como `width`/`height` para evitar deslocamento de layout). Enquanto o arquivo
não existir, o componente `ProjectImage` mostra um placeholder com a mesma proporção —
o layout não muda quando a imagem chegar.

### Imagens que faltam (é só soltar o arquivo com este nome)

| Arquivo esperado                         | Projeto          | Proporção | Onde aparece                                                                    |
| ---------------------------------------- | ---------------- | --------- | ------------------------------------------------------------------------------- |
| `public/images/projects/comanda-ai.webp` | Comanda Aí       | 16:10     | card na home + página do estudo de caso                                         |
| `public/images/projects/driving.webp`    | Driving          | 9:19.5    | card na home + página do estudo de caso                                         |
| `public/images/foto-perfil.webp`         | foto de perfil   | 3:4       | seção Sobre (**já existe**, substituível)                                       |
| `public/images/og.png` / `og-en.png`     | compartilhamento | 1200×630  | Open Graph/Twitter (**já existem**, geradas por `node scripts/generate-og.mjs`) |

## Como adicionar um projeto

- **Card em "Outros trabalhos"**: adicione o item em `content/pt/other-projects.ts` e
  `content/en/other-projects.ts`, e converta a imagem (acima).
- **Estudo de caso completo**: adicione o item em `content/pt/case-studies.ts` e
  `content/en/case-studies.ts` e registre o par de slugs em `CASE_SLUGS`
  (`lib/routes.ts`). As páginas e o sitemap são gerados automaticamente.

## Lighthouse

```bash
npm run build
npx serve out
npx lighthouse http://localhost:3000 --view
```
