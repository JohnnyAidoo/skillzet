import {
  Avatar,
  CardTemplate,
  IconButton,
  Input,
  NotificationPopUP,
} from "@/public/components/clientComp";

import Header from "@/public/components/header";
import { MdOutlineSearch } from "react-icons/md";

function RichHeader() {
  return (
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
            <NotificationPopUP />

            <Avatar
              className="mx-2"
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="l"
            />
          </div>
        </>
      }
    />
  );
}

export default RichHeader;
