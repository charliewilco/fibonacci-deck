import Document, {Head, Main, NextScript} from 'next/document';

export default class extends Document {
  public render(): JSX.Element {
    return (
      <html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
