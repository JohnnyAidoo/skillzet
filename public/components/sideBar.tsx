"use client";
import styles from "../static/theme";
import {
  MdOutlineDashboard,
  MdOutlineBookmarks,
  MdOutlineLocalFireDepartment,
  MdOutlineSettings,
} from "react-icons/md";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Navbar,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function SideBar() {
  const [path, sePath] = useState<string>();
  useEffect(() => {
    sePath(window.location.pathname);
  }, [path]);

  return (
    <>
      <aside
        style={{ backgroundColor: styles.light.primaryDark, width: "20%" }}
        className="hidden float-left h-screen border-black border-solid md:block md:fixed outline-8 outline-black"
      >
        <Card
          // style={{ width: "99%" }}
          shadow
          className="w-full h-full p-4 border-r-4 border-black border-solid shadow-xl shadow-blue-gray-900/5"
        >
          <div className="p-4 mb-2"></div>
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
        </Card>
      </aside>
    </>
  );
}

export default SideBar;
