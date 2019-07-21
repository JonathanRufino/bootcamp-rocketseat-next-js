import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{`body { background: #069 }`}</style>
        </Head>

        <Main />
        <NextScript />
      </html>
    );
  }
}

export default MyDocument;
