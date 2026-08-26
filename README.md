# EMart3D

Landing page da EMart3D — ateliê de impressão 3D sediado em Vila Nova de Gaia, com envios para todo Portugal. Criamos chaveiros, letrinhas decorativas, enfeites de festa e peças personalizadas por encomenda.

Site: `Criamos · Personalizamos · Encantamos`
No ar em: **https://emart3d.com** (GitHub Pages, domínio próprio)

## Estrutura do projeto

```
EMart3D/
├── index.html          # página principal
├── 404.html             # página de erro personalizada
├── privacidade.html     # política de privacidade
├── ig/
│   └── index.html         # redireciona emart3d.com/ig -> link de UTM da bio
├── social/
│   └── index.html         # redireciona emart3d.com/social -> link de UTM de stories/posts
├── ads/
│   └── index.html         # redireciona emart3d.com/ads -> link de UTM de anúncios pagos
├── css/
│   └── styles.css        # todo o estilo (cores, tipografia, layout)
├── js/
│   └── consent.js        # banner de cookies + carregamento do Google Analytics
├── assets/
│   ├── LOGO.jpeg          # logótipo
│   ├── og-image.jpg       # imagem de partilha (redes sociais)
│   └── ...                # fotos dos produtos
├── robots.txt
├── sitemap.xml
├── CNAME                 # domínio personalizado (GitHub Pages)
└── README.md
```

## Sobre a página

Landing page de conversão pensada para receber tráfego do Instagram (`@emart3d.pt`) e de campanhas pagas, com foco em levar a pessoa a contactar diretamente pelo WhatsApp. Não tem carrinho de compras nem preços fixos — cada peça é personalizada, por isso o pedido de orçamento acontece sempre por conversa.

Secções da página:

1. **Hero** — promessa principal e botão de contacto.
2. **Vitrine** — grelha com peças já feitas; cada foto abre o WhatsApp já com uma mensagem a perguntar por aquela peça específica.
3. **Porque escolher a EMart3D** — benefícios (personalização, peça única, envio para todo o país).
4. **Como funciona** — os 3 passos do pedido, do WhatsApp até casa.
5. **Testemunhos** — atualmente com exemplos placeholder, claramente marcados para substituir por avaliações reais assim que existirem.
6. **Dúvida sobre preço** — explica que os valores são feitos por encomenda e direciona para pedido de orçamento.
7. **Perguntas frequentes** — 5 perguntas (prazo, personalização, pagamento, envios, garantia).
8. **Chamada final** — botão de WhatsApp, reforçado por um botão flutuante fixo no ecrã.

Contacto usado em todos os botões: WhatsApp `+351 961 944 270`.

## SEO e partilha

- **Meta description**, **título único** e **canonical** em cada página.
- **Open Graph / Twitter Card** — quando o link é partilhado no WhatsApp, Instagram, etc., aparece a imagem `assets/og-image.jpg` com o título e a descrição da página.
- **Dados estruturados (JSON-LD)** — `LocalBusiness` (negócio, morada, telefone, redes sociais) e `FAQPage` (as 5 perguntas frequentes), para o Google poder mostrar informação e respostas diretas nos resultados de pesquisa.
- **`robots.txt`** e **`sitemap.xml`** na raiz do site.
- Todas as imagens têm texto alternativo (`alt`) descritivo.

## Privacidade, cookies e Analytics

- `privacidade.html` explica que dados são recolhidos (contacto via WhatsApp e navegação via Google Analytics), para quê, e os direitos do titular ao abrigo do RGPD.
- `js/consent.js` mostra um aviso de cookies na primeira visita. O Google Analytics só é carregado depois de a pessoa clicar em **"Aceitar"**. A escolha fica guardada no `localStorage` do navegador; o link **"Gerir cookies"** no rodapé apaga essa escolha e mostra o aviso outra vez.
- **Google Analytics já ligado** — propriedade GA4 `EMart3D - Site`, ID de medição `G-94781S3G6X` em `js/consent.js`. Só começa a enviar dados depois de a pessoa aceitar o aviso de cookies.
- **"Cliques de saída"** está ativo na medição otimizada do GA4 — isso já regista automaticamente os cliques nos botões de WhatsApp (é um domínio diferente, `wa.me`), sem precisar de configurar eventos manualmente.
- Não foi preciso colar o `<script>` de instalação manual do GA4 no `<head>` — o `js/consent.js` já injeta essa etiqueta sozinho, só depois do consentimento. O "modo de consentimento" (Consent Mode) sugerido pelo Google também não é necessário: o nosso banner já bloqueia por completo o carregamento do GA até haver aceitação, o que é mais restritivo do que o comportamento padrão do Consent Mode.

## Links personalizados (UTM) para rastrear a origem do tráfego

Com o Analytics já ligado, para saber se uma visita veio da bio do Instagram, de um anúncio, etc., usar parâmetros UTM no link partilhado (o conteúdo da página não muda, é só para o Analytics separar as origens):

- **Bio do Instagram:** `https://emart3d.com/?utm_source=instagram&utm_medium=bio`
- **Stories/posts orgânicos:** `https://emart3d.com/?utm_source=instagram&utm_medium=social&utm_campaign=nome-do-post`
- **Anúncios pagos:** `https://emart3d.com/?utm_source=instagram&utm_medium=paid&utm_campaign=nome-da-campanha`

O Instagram mostra o link da bio tal como foi escrito, incluindo os parâmetros UTM — o que fica visualmente poluído. Por isso, há três redirecionadores curtos no próprio domínio (sem precisar de encurtador de terceiros como o bit.ly):

- **`https://emart3d.com/ig`** — vai sempre para o link de UTM da bio (fixo).
- **`https://emart3d.com/social`** — para stories e posts orgânicos. Aceita `?utm_campaign=nome-do-post` no final (ex.: `emart3d.com/social?utm_campaign=post-natal`); se não indicares nada, usa "organico" como nome da campanha.
- **`https://emart3d.com/ads`** — para anúncios pagos. Aceita `?utm_campaign=nome-da-campanha` da mesma forma; sem indicação, usa "campanha".

Todos os três acabam por enviar a pessoa para `emart3d.com` com os parâmetros de UTM corretos, para o Analytics separar as origens.

## Como ver a página localmente

Basta abrir o `index.html` diretamente no navegador (duplo clique). O CSS e as imagens são carregados por caminho relativo, por isso funciona sem precisar de servidor.

## Como o site está publicado

- Hospedado no **GitHub Pages**, a partir do branch `main`.
- Domínio personalizado `emart3d.com` configurado via ficheiro `CNAME` + registos DNS (4 registos `A` para o domínio raiz, `CNAME` do `www` a apontar para `luisosorio258.github.io`).
- HTTPS obrigatório já ativado.

## Por fazer

- Substituir os 3 testemunhos placeholder por avaliações reais de clientes.
- Criar o Perfil da Empresa no Google (Google Business Profile) para começar a receber avaliações reais.
- Rever/ajustar as fotos da vitrine à medida que houver peças novas em `assets/`.
- Confirmar se a promessa "respondemos em menos de 24h" (no herói) reflete o tempo de resposta real.
- Usar `emart3d.com/ig` na bio do Instagram e `emart3d.com/social` / `emart3d.com/ads` nos posts, stories e anúncios (ver secção acima), para o Analytics distinguir a origem do tráfego.
