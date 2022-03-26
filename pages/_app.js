import { NextUIProvider } from '@nextui-org/react';
import { lightTheme, darkTheme } from '@theme/shared';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Navbar from '@layout/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Navbar />
        <Component {...pageProps} />
        <style>
          {`
            .theme-dark {
              --nextui-colors-headerBackground: rgba(17,17,17,0.8);
            }

            html, body {
              width: 100%;
              height: 100%;
            }
          `}
        </style>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;