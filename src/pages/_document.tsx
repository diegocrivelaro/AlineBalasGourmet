import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from "next/document";

export default class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          />
        </Head>
        <body>
          <noscript>
            <p>
              <strong>
                Você precisa habilitar o JavaScript do navegador para esse
                website funcionar.
              </strong>
            </p>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
