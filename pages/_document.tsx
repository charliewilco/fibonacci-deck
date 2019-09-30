import Document, {Head, Main, NextScript} from 'next/document';

export default class extends Document {
  public render(): JSX.Element {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Hind:400,600,700"
            rel="stylesheet"
          />
          <link rel="icon" href="static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
