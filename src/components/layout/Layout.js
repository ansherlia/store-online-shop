"use client";
import { usePathname, useRouter } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const pathname = usePathname();
  const hideNeedRoutes = ["/auth/signup", "/auth/signin"];
  return (
    <div>
      {!hideNeedRoutes.includes(pathname) && <Header />}
      <main className="min-h-[600px]">{children}</main>
      {!hideNeedRoutes.includes(pathname) && <Footer />}
    </div>
  );
}

export default Layout;
