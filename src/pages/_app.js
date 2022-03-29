import { NextUIProvider } from '@nextui-org/react';
import { lightTheme, darkTheme } from '@theme/shared';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Navbar from '@layout/navbar';
import { KBarProvider } from 'kbar';
import generateKbarActions from '@/lib/kbar-actions';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const KbarComponent = dynamic(() => import('@/components/kbar'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const kbarActions = generateKbarActions(router);
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
      storageKey="theme"
    >
      <NextUIProvider>
        <KBarProvider
          actions={kbarActions}
          options={{
            animations: {
              enterMs: 250,
              exitMs: 100
            }
          }}
        >
          <KbarComponent />
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
        </KBarProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;