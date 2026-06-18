import "./globals.css";

export const metadata = {
  title: "Portfolio | BSCS Student",
  description: "Modern portfolio website for a 4th year BSCS student."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
