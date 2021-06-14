import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
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
      <Html lang="ko">
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html:
                '!function(){const e="dark-mode",t="light-mode";function o(o){document.documentElement.classList.add(o?e:t),document.documentElement.classList.remove(o?t:e)}const c=window.matchMedia("(prefers-color-scheme: dark)"),a="(prefers-color-scheme: dark)"===c.media;let s=null;try{s=localStorage.getItem("darkMode")}catch(e){}const l=null!==s;if(l&&(s=JSON.parse(s)),l)o(s);else if(a)o(c.matches),localStorage.setItem("darkMode",c.matches),localStorage.setItem("preferDarkMode",c.matches);else{const t=document.documentElement.classList.contains(e);localStorage.setItem("darkMode",JSON.stringify(t))}}();',
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
