import Header from "@/components/layout/header";
import InfoStore from "@/components/layout/info-store/info-store";

import Image from "@/components/ui/image";
import { ICONS } from "@/lib/constants/Icons";
import InfoHeader from "./components/info-header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl w-full mx-auto flex-1">
        <InfoHeader />
      </main>
      <Footer />
    </>
  );
}
