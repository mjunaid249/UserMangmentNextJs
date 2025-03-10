import "./globals.css";
import Header from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";

import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "User Managment | Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <NextTopLoader showSpinner={false} speed={500} height={3} />
        <Header />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
