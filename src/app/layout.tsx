import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/PageComponents/Header";
import Footer from "@/components/PageComponents/Footer";
import SideBar from "@/components/PageComponents/SideBar";

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

export const metadata: Metadata = {
  title: "MaybeUI | ReactJs Components",
  description: "Free easy to use Reactjs components",
  icons: "/icons8-computer-48.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full m-0 overflow-x-hidden`}
      >
        <div className="w-full min-h-screen ">
          <main className="w-full flex-grow bg-gray-900 ">
            <Header />

            <div className=" w-full flex gap-4 min-h-screen mt-20">
              <SideBar />
              <div className="sm:ml-20 mt-12 sm:mt-16">
                {children}
              </div>
              
            </div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
