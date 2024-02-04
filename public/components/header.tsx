"use client";
import Link from "next/link";
import styles from "../static/theme";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function 
Header(props: { sub: ReactElement }) {
  const router = useRouter();
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    location.pathname !== "/" && user_id == null ? router.replace("/") : null;
  });
  return (
    <>
      <header
        className="sticky top-0 z-50 flex items-center justify-between w-full mb-5"
        style={{ backgroundColor: styles.light.primaryLight }}
      >
        <Link href="/dashboard">
          <h1 className="text-4xl font-bold text-indigo-500">skillZet</h1>
        </Link>
        <div>        
        {props.sub}
        </div>
      </header>
    </>
  );
}

export default Header;
