"use client";
import styles from "@/public/static/theme";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import Link from "next/link";
import { nav_links } from "./constant/urls";
import { usePathname } from "next/navigation";

function SideBar() {
  const pathname = usePathname();

  return (
    <>
      <aside
        style={{ backgroundColor: styles.light.primaryDark, width: "20%" }}
        className="hidden float-left h-screen border-solid md:block md:fixed outline-8 "
      >
        <Card
          // style={{ width: "99%" }}
          shadow
          className="w-full h-full p-4 border-r-4 border-solid "
        >
          <div className="p-4 mb-2"></div>

          <List>
            {nav_links.map((item) => {
              const current_route: boolean = item.url === pathname;

              return (
                <Link href={item.url}>
                  <ListItem selected={current_route}>
                    <ListItemPrefix>{item.icon}</ListItemPrefix>
                    {item.label}
                  </ListItem>
                </Link>
              );
            })}

            <hr className="my-2 border-blue-gray-50" />
          </List>
        </Card>
      </aside>
    </>
  );
}

export default SideBar;
