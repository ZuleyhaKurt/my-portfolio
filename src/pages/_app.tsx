import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return <Component {...pageProps} />
}
