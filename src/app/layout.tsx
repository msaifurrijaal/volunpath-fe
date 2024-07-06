import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../theme';
import './globals.scss';
import { DataUserContextProvider } from '@/context/DataUser';
import NextAuthProvider from '@/configs/auth/providers';

export const metadata: Metadata = {
  title: 'Volunpath',
  description: 'Web untuk informasi Volunteering',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NextAuthProvider>
            <DataUserContextProvider>{children}</DataUserContextProvider>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
