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
  List,
  ListItem,
  ListItemPrefix,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

function RichHeader() {
  const router = useRouter();

  const logout = () => {
    signOut(firebaseAuth)
      .then(() => {
        localStorage.clear();
        router.push("/login");
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
            <Input
              label="search"
              type="search"
              icon={<MdOutlineSearch size={30} />}
            />
          </div>
          <div className="flex items-center justify-between ">
            {/* <NotificationPopUP /> */}
            <Popover placement="bottom">
              <PopoverHandler>
                <Button size="sm" color="white" className="shadow-none">
                  <Avatar
                    className="mx-2"
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
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
          </div>
        </>
      }
    />
  );
}

export default RichHeader;
