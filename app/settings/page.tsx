import RichHeader from "@/public/components/richHeader";
import SideBar from "@/public/components/sideBar";

function Settings() {
  return (
    <>
      <RichHeader />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="float-right flex flex-col bottom-0 px-10"
      >
        <h1>settings</h1>
      </main>
    </>
  );
}

export default Settings;
