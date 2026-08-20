import "./globals.css";

export const metadata = {
  title: "Portfolio | BSCS Student",
  description: "Web Portfolio",
  icons: {
    icon: "/images/Profile/sng.jpg",
    shortcut: "/images/Profile/sng.jpg",
    apple: "/images/Profile/sng.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
