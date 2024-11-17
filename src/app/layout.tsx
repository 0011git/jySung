import type { Metadata } from "next";
import "../styles/globals.scss";
import Header from "@/components/Header";
import TopBtn from "@/components/TopBtn";
import Footer from "@/components/Footer";
// import hideOnScrollDown from '@/utils/hideOnScrollDown'

export const metadata: Metadata = {
  title: "JY Sung's Portfolio",
  description: "Copyright 2024. Jooyoung Sung. All Rights Reserved.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const hide = hideOnScrollDown();

  return (
    <html lang="en">
      <body>
        <header> {/* className={hide ? 'hide' : ''}> */} 
          <Header />  
        </header>

        <main>
          {children}        
        </main>

        <footer>
          <TopBtn/>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
