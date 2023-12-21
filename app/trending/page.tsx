import { CardTemplate, QuickTab } from "@/public/components/clientComp";
import RichHeader from "@/public/components/richHeader";
import SideBar from "@/public/components/sideBar";

function TrendPage() {
  return (
    <>
      <RichHeader />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="float-right flex flex-col bottom-0 px-10"
      >
        <div
          className="w-full rounded-lg mb-10 flex flex-grow justify-around"
          style={{ minHeight: "5vh" }}
        >
          <QuickTab value="code" />
          <QuickTab value="code" />
          <QuickTab value="code" />
          <QuickTab value="code" />
          <QuickTab value="code" />
          <QuickTab value="code" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-10"></div>
      </main>
    </>
  );
}

export default TrendPage;
