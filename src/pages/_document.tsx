import Document, { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
        </Head>

        <body>
          <noscript>
            <p>
              <strong>
                Você precisa habilitar o JavaScript do navegador para esse website funcionar.
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
