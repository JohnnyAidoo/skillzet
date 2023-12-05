import { Avatar, Input } from "@/public/components/clientComp";
import Header from "@/public/components/header";
import SideBar from "@/public/components/sideBar";
import { MdOutlineNotifications, MdOutlineSearch } from "react-icons/md";

function CourseDetailComp() {
  return (
    <>
      <Header
        children={
          <>
            <div className="w-1/3 mx-10">
              <Input
                label="search"
                type="search"
                icon={<MdOutlineSearch size={30} />}
              />
            </div>
            <div className="flex items-center justify-between ">
              <MdOutlineNotifications
                size={30}
                className="mx-2 rounded-xl hover:bg-gray-400"
              />

              <Avatar
                className="mx-2"
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="l"
              />
            </div>
          </>
        }
      />
      <SideBar />

      <main
        style={{ width: "79%" }}
        className="float-right flex flex-col bottom-0 px-10"
      >
        <h1>HtML , CSS Full Course For Absolute Beginners</h1>
        <div className="aspect-video w-full">
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220714111443/HTML-Introduction.jpg"
            alt="html css thumbnail"
            className="rounded-md"
          />
        </div>
        <h2>HtML , CSS Full Course For Absolute Beginners</h2>
      </main>
    </>
  );
}

export default CourseDetailComp;
