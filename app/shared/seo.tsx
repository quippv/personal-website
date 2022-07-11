import Head from "next/head";

const SEO = ({
  title,
  metaTitle,
  metaDescription,
  metaKeywords,
  metaThumbnail,
  metaUrl,
}: {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  metaThumbnail?: string;
  metaUrl?: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="title" content={metaTitle} />
      {metaDescription && <meta name="description" content={metaDescription} />}
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}

      {metaUrl && metaTitle && metaDescription && metaThumbnail && (
        <>
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={process.env.NEXT_PUBLIC_HOST + metaUrl}
          />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta
            property="og:image"
            content={process.env.NEXT_PUBLIC_HOST + metaThumbnail}
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={process.env.NEXT_PUBLIC_HOST + metaUrl}
          />
          <meta property="twitter:title" content={metaTitle} />
          <meta property="twitter:description" content={metaDescription} />
          <meta
            property="twitter:image"
            content={process.env.NEXT_PUBLIC_HOST + metaThumbnail}
          />
        </>
      )}
    </Head>
  );
};

export default SEO;
