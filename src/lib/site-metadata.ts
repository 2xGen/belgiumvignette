import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://belgiumvignette.be";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification =
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "D56EB4A1FD92FE4D0287836170CEF0FC";

const verification: Metadata["verification"] = {};

if (googleVerification) {
  verification.google = googleVerification;
}

if (bingVerification) {
  verification.other = {
    ...(verification.other ?? {}),
    "msvalidate.01": bingVerification,
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.svg",
  },
  ...(Object.keys(verification).length > 0 ? { verification } : {}),
};
