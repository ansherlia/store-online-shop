import "./globals.css";
import myFont from "../../utils/fonts";
import Layout from "@/components/layout/Layout";
import NextauthProvider from "../../Providers/NextauthProvider";
import Providers from "../../redux/Providers";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Providers>
          <NextauthProvider>
            <Layout>{children}</Layout>
          </NextauthProvider>
        </Providers>
      </body>
    </html>
  );
}
