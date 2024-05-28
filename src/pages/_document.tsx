import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Transforming Businesses with Cutting-Edge Software Solutions. Discover how Knewton Tech revolutionizes operations and drives success with custom web applications, mobile apps, and enterprise solutions. Contact us now for a consultation."
        />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="varunraja" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300&family=Jost&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
