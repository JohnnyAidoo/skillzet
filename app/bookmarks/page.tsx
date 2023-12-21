import {
  Avatar,
  CardTemplate,
  IconButton,
  Input,
} from "@/public/components/clientComp";
import Header from "@/public/components/header";
import SideBar from "@/public/components/sideBar";
import { MdOutlineSearch, MdOutlineNotifications } from "react-icons/md";

function BookmarkPage() {
  return (
    <>
      <Header
        sub={
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
        <div className="w-full"> </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-10"></div>
      </main>
    </>
  );
}

export default BookmarkPage;
