import Head from "next/head";

export default function Meta(props) {
  const metaTitle = props.title
    ? props.title
    : "Hello Chicago | Daily Happy Hour Specials in Chicago";

  const metaDescription = props.description
    ? props.description
    : "Happy Hour in Chicago every day specials throughout the city.";

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content='Happy Hour in Chicago' />
      <link rel='icon' href='/favicon.ico' />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.hellochicago.co/' />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta
        property='og:image'
        content='https://hellochicago.co/chicagohappyhour.png'
      />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://www.hellochicago.co/' />
      <meta property='twitter:title' content={metaTitle} />
      <meta property='twitter:description' content={metaDescription} />
      <meta
        property='twitter:image'
        content='https://hellochicago.co/chicagohappyhour.png'
      ></meta>

      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#6b21a8' />
      <link rel='apple-touch-icon' href='/app/hellochicago.png' />
    </Head>
  );
}
