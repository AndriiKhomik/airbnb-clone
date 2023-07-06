import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/Navbar/Navbar";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import getCurrentUser from "./actions/getCurrentUser";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          {/* @ts-ignore-next-line */}
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
