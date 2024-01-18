// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from "next/document";
  import { ServerStyleSheet } from "styled-components";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            // eslint-disable-next-line react/display-name
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          });
  
        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        };
      } finally {
        sheet.seal();
      }
    }
  
    render() {
      return (
        <Html>
          <Head>
            <link
              rel="stylesheet"
              as="style"
              crossOrigin="true"
              href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css"
            />
  
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;500;600;700;900&display=swap"
              rel="stylesheet"
            />
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                  });
                  gtag('config', 'AW-11045396458');
                `,
              }}
            />
          </Head>
          <body>
            <Main />
            <NextScript />
            <div id="modal-root" />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
                  if ("serviceWorker" in navigator) {
                    try {
                      navigator.serviceWorker.getRegistrations().then(function(registrations) {
                        for(let registration of registrations) {
                          if(registration.active.scriptURL.includes("class.2dub.me/service-worker.js")) {
                            registration.unregister();
                          }
                        }
                      });
                    } catch(err) {
                      console.error("Service worker getRegistrations failed: ", err);
                    }
                  } else {
                    console.error("Service workers are not supported.");
                  }
                `,
              }}
            />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  