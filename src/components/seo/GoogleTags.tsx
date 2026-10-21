import Script from "next/script";

// Google Ads and Google Analytics share one gtag.js script; each ID is
// registered with its own `config` call.
const GOOGLE_ADS_ID = "AW-18089940146";
const GOOGLE_ANALYTICS_ID = "G-VCEBK5RKC5";

/**
 * Google Ads + Google Analytics tags (client request).
 * Only rendered in production so local development and previews don't pollute
 * the live statistics. The matching domains are allowed in the CSP in next.config.ts.
 */
export default function GoogleTags() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tags" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
          gtag('config', '${GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
    </>
  );
}
