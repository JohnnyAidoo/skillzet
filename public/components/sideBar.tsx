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
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function SideBar() {
  const [path, sePath] = useState<string>();
  useEffect(() => {
    sePath(window.location.pathname);
  }, [path]);

  return (
    <aside
      style={{ backgroundColor: styles.light.primaryDark, width: "20%" }}
      className="float-left fixed h-screen border-black outline-8 outline-black border-solid"
    >
      <Card
        // style={{ width: "99%" }}
        shadow
        className=" h-full w-full p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-black border-r-4"
      >
        <div className="mb-2 p-4"></div>
        <List>
          {/* dashboard link */}
          <Link href={"/dashboard"}>
            <ListItem selected={path == "/dashboard"}>
              <ListItemPrefix>
                <MdOutlineDashboard className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>

          {/* bookmarks link */}
          <Link href={"/bookmarks"}>
            <ListItem selected={path == "/bookmarks"}>
              <ListItemPrefix>
                <MdOutlineBookmarks className="h-5 w-5" />
              </ListItemPrefix>
              Bookmarks
            </ListItem>
          </Link>
          <Link href={"/trending"}>
            <ListItem selected={path == "/trending"}>
              <ListItemPrefix>
                <MdOutlineLocalFireDepartment className="h-5 w-5" />
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
          </Link>
          <hr className="my-2 border-blue-gray-50" />
          <Link href={"/settings"}>
            <ListItem selected={path == "/settings"}>
              <ListItemPrefix>
                <MdOutlineSettings className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
          </Link>
        </List>
      </Card>
    </aside>
  );
}

export default SideBar;
