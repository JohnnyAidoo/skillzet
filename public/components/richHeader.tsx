"use client";
import { firebaseAuth } from "@/app/backend/firebase";
import {
  Avatar,
  Input,
  NotificationPopUP,
} from "@/public/components/clientComp";

import Header from "@/public/components/header";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MdDoNotTouch,
  MdEqualizer,
  MdFormatAlignCenter,
  MdLineAxis,
  MdMultilineChart,
  MdMultipleStop,
  MdOutlineBookmarks,
  MdOutlineDashboard,
  MdOutlineSearch,
  MdVerticalAlignBottom,
} from "react-icons/md";

function RichHeader() {
  const router = useRouter();
  const [open, setopen] = useState(false);
  const [path, sePath] = useState<string>();
  useEffect(() => {
    sePath(window.location.pathname);
  }, [path]);

  const logout = () => {
    signOut(firebaseAuth)
      .then(() => {
        localStorage.clear();
        router.push("/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Header
      sub={
        <>
          <div className="w-1/3 mx-10">
            {/* <Input
              label="search"
              type="search"
              icon={<MdOutlineSearch size={30} />}
            /> */}
          </div>
          <div className="flex items-center justify-between ">
            {/* <NotificationPopUP /> */}
            <Popover placement="bottom">
              <PopoverHandler>
                <Button size="sm" color="white" className="shadow-none">
                  <Avatar
                    className="mx-2"
                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=s"
                    alt="l"
                  />
                </Button>
              </PopoverHandler>
              <PopoverContent>
                <List>
                  <ListItem color="red" onClick={logout}>
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faPowerOff} />
                    </ListItemPrefix>
                    Logout{" "}
                  </ListItem>
                </List>
              </PopoverContent>
            </Popover>
            <Button
              id="drawer"
              onClick={() => {
                setopen(!open);
              }}
            >
              {open ? <MdLineAxis /> : <MdFormatAlignCenter />}
            </Button>
          </div>
          <Drawer
            open={open}
            onClose={() => {
              setopen(false);
            }}
            className="pt-10 pl-10 space-y-5 gap"
          >
            <List>
              {/* dashboard link */}
              <Link href={"/dashboard"}>
                <ListItem selected={path == "/dashboard"}>
                  <ListItemPrefix>
                    <MdOutlineDashboard className="w-5 h-5" />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </Link>

              {/* bookmarks link */}
              <Link href={"/bookmarks"}>
                <ListItem selected={path == "/bookmarks"}>
                  <ListItemPrefix>
                    <MdOutlineBookmarks className="w-5 h-5" />
                  </ListItemPrefix>
                  Bookmarks
                </ListItem>
              </Link>
              {/* <Link href={"/trending"}>
            <ListItem selected={path == "/trending"}>
              <ListItemPrefix>
                <MdOutlineLocalFireDepartment className="w-5 h-5" />
              </ListItemPrefix>
              Trending Topics
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </Link> */}
              <hr className="my-2 border-blue-gray-50" />
              {/* <Link href={"/settings"}>
            <ListItem selected={path == "/settings"}>
              <ListItemPrefix>
                <MdOutlineSettings className="w-5 h-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
          </Link> */}
            </List>
          </Drawer>
        </>
      }
    />
  );
}

export default RichHeader;
