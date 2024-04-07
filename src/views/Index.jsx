import CoverArea from "../componets/CoverArea";
import DevelopmentArea from "../componets/DevelopmentArea";
import DigitalArea from "../componets/DigitalArea";
import Footer from "../componets/Footer";
import FrequentlyArea from "../componets/FrequentlyArea";
import TopNavBar from "../componets/TopNavBar";

export default function Index() {
  return (
    <>
      <TopNavBar />
      <CoverArea />
      <div className="justify-content-center">
        <DevelopmentArea />
        <DigitalArea />
        <FrequentlyArea />
      </div>
      <Footer />
    </>
  );
}
