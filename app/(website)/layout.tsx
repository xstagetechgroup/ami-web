import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Associação de Mulheres Instruídas - AMI",
  description: "Mais de 200 mil mulheres Instruídas. Uma associação sem fins lucrativos liderada pela PCA Iracelma Almeida",
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
