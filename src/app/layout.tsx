import "./globals.css";
import { ThemeProvider } from "./components/theme";

const title = "VinoLink";
const description = "Create by VinoLink in 2025";
const defaultimage = "https://vinolink.com.br/nextjs.png";
const url = "https://vinolink.com";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata = {
    title,
    description,
    defaultimage,
    url,
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="image" content={metadata.defaultimage} />
        <meta name="url" content={metadata.url} />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
