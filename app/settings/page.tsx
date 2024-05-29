import RichHeader from "@/app/components/richHeader";
import SideBar from "@/app/components/sideBar";

function Settings() {
  return (
    <>
      <RichHeader />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="bottom-0 flex flex-col float-right px-10"
      >
        <h1>settings</h1>
      </main>
    </>
  );
}

export default Settings;
