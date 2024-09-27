import assert from "node:assert";
import { Providers } from "./providers";

assert(
  process.env.NEXT_PUBLIC_TWILIGHT_API_URL,
  "Twilight api url must be set"
);
assert(
  process.env.NEXT_PUBLIC_TWILIGHT_API_KEY,
  "Twilight api key must be set"
);

export const metadata = {
  title: "Twilight",
  description: "Search for infections based on different criteria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
