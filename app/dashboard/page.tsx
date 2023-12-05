import { CardTemplate } from "@/public/components/clientComp";
import RichHeader from "@/public/components/richHeader";
import SideBar from "@/public/components/sideBar";

function HomePage() {
  return (
    <>
      <RichHeader />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="float-right flex flex-col bottom-0 px-10"
      >
        <div
          className="w-full rounded-lg bg-gray-400 mb-10"
          style={{ minHeight: "30vh" }}
        ></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-10">
          <CardTemplate href="/course/1" />
          <CardTemplate href="/" />
          <CardTemplate href="/" />
          <CardTemplate href="/" />
          <CardTemplate href="/" />
          <CardTemplate href="/" />
        </div>
      </main>
    </>
  );
}

export default HomePage;
