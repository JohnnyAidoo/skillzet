import { QuickTab } from "@/app/components/clientComp";
import RichHeader from "@/app/components/richHeader";
import SideBar from "@/app/components/sideBar";

function TrendPage() {
  return (
    <>
      <RichHeader />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="bottom-0 flex flex-col float-right px-10"
      >
        <div
          className="flex justify-around flex-grow w-full mb-10 rounded-lg"
          style={{ minHeight: "5vh" }}
        >
          <QuickTab value="code" />
          <QuickTab value="code" />
          <QuickTab value="code" />
          <QuickTab value="code" />
          <QuickTab value="code" />
          <QuickTab value="code" />
        </div>
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10"></div>
      </main>
    </>
  );
}

export default TrendPage;
