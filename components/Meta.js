import Head from "next/head";
import { useRouter } from "next/router";

export default function Meta(props) {
  const router = useRouter();

  const metaTitle = props.title
    ? props.title
    : "Best Happy Hour in Chicago Today - Daily Deals & Specials | Hello Chicago";

  const metaDescription = props.description
    ? props.description
    : "Find the best happy hour deals in Chicago today. Daily updated specials across Logan Square, Wicker Park, West Loop, Lakeview & more neighborhoods.";

  // The canonical path drops query strings by default (tracking params like
  // ?fbclid=, case-variant redirects, etc. should never produce their own
  // indexable URL) — except on the search results page, where the query
  // string is the content itself and has to stay.
  const basePath = router.asPath.split("?")[0].split("#")[0];
  const canonicalPath =
    router.pathname === "/search" && router.query.s
      ? `${basePath}?s=${encodeURIComponent(router.query.s)}`
      : basePath;
  const canonicalUrl = "https://www.hellochicago.co" + canonicalPath;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
      <link rel='canonical' href={canonicalUrl} />
      <link rel='icon' href='/favicon.ico' />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:title' content={metaTitle} key='title' />
      <meta
        property='og:description'
        content={metaDescription}
        key='description'
      />
      <meta
        property='og:image'
        content='https://www.hellochicago.co/chicagohappyhour.png'
      />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={canonicalUrl} />
      <meta property='twitter:title' content={metaTitle} />
      <meta property='twitter:description' content={metaDescription} />
      <meta
        property='twitter:image'
        content='https://www.hellochicago.co/chicagohappyhour.png'
      ></meta>

      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#223079' />
      <link rel='apple-touch-icon' href='/app/hellochicago.png' />
    </Head>
  );
}
