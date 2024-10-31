import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Happy Diwail",
  description: "Happy Diwail",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} min-h-screen bgofbody p-2 overflow-hidden text-sm pb-0 flex flex-col items-center justify-center  ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
