import Footer from "@/components/Footer";
import Food from "@/components/home/Food";
import Guide from "@/components/home/Guide";
import Hero from "@/components/home/Hero";
import History from "@/components/home/History";
import Recomendation from "@/components/home/Recomendation";
import RunningText from "@/components/home/RunningText";
import TopDestination from "@/components/home/TopDestination";

export default function Home() {
  return (
    <>
      <div className="w-full sm:px-[16rem] px-[3rem] gap-40 flex flex-col my-32 bg-white ">
        <Hero />
        <Recomendation />
        <TopDestination />
        <RunningText />
        <Food />
        <History />
        <Guide />
      </div>
      <Footer />
    </>
  );
}
