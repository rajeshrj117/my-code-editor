import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"
            strategy="beforeInteractive"
          ></Script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
