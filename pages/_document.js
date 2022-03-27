import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/logo.png' />
          <meta name='robots' content='all' />
          <meta name='google' content='nositelinkssearchbox' />
          <meta
            property='og:description'
            content='High Quality Plastering and Rendering Solutions'
          />
          <meta
            property='og:image'
            content='https://southernwalltech.com/index.png'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
            rel='stylesheet'
          ></link>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
            }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": {
                    "@vocab": "http://schema.org/"
                  },
                  "@graph": [
                  {
                    "@id": "https://southernwalltech.com/",
                    "@type": "HomeandConstructionBusiness",
                    "name": "Southern Wall Tech",
                    "areaServed" : "Poole, Bournemouth",
                    "description": "High Quality Plastering and Rendering Solutions operating in Dorset.",
                    "url" : "https://southernwalltech.com/",
                    "hasMap" : "https://www.google.co.uk/maps/place/Southern+Wall+Tech/@50.8105276,-
                    2.7035514,9z/data=!3m1!4b1!4m5!3m4!1s0xa4fc33cce4c4b537:0x25648800b97bb8c!8m2!3d50.8
                    118763!4d-2.1417912",
                    "logo" : "https://southernwalltech.com/_next/image?url=%2Flogo.png&w=828&q=75",
                    "image" : "https://southernwalltech.com/_next/image?url=%2Flogo.png&w=828&q=75",
                    "priceRange" : "££",
                    "currenciesAccepted" : "GBP",
                    "email" : "jaron@southernwalltech.co.uk",
                    "address": {
                      "@type" : "PostalAddress",
                      "addressRegion": "Dorset",
                      "addressCountry": "United Kingdom",
                      "telephone" : "+44 (0)7845 297278"
                    },
                    "openingHours": "Mo-Fr 07:30-17:30"
                  }
                  ]
                }
            `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
export default MyDocument;
