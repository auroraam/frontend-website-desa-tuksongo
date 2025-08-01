import "@/styles/globals.css";
import { Poppins, Berkshire_Swash } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { React, useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const berkshire = Berkshire_Swash({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-berkshire",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
     Aos.init({
          duration: 900,
          once: false,
        })
  }, [])
  return (
    <main className={`${poppins.variable} ${berkshire.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
