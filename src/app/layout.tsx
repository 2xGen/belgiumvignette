import { rootMetadata, viewport } from "@/lib/site-metadata";

export const metadata = rootMetadata;
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
