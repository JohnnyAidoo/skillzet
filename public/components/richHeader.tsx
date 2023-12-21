"use client";
import { firebaseAuth } from "@/app/backend/firebase";
import {
  Avatar,
  Input,
  NotificationPopUP,
} from "@/public/components/clientComp";

import Header from "@/public/components/header";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

function RichHeader() {
  const get_user = async () => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // console.log(user);
      }
    });
  };

  useEffect(() => {
    get_user();
  });
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
