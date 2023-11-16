"use client";
import Link from "next/link";
import styles from "../static/theme";
import { ReactElement, useEffect, useState } from "react";

function Header(props: { children: ReactElement }) {
  return (
    <>
      <header
        className="sticky top-0 z-50 flex  justify-around mb-5 items-center w-full "
        style={{ backgroundColor: styles.light.primaryLight }}
      >
        <Link href="/">
          <h1 className="font-bold text-4xl text-indigo-500">skillZet</h1>
        </Link>
        {props.children}
      </header>
    </>
  );
}

export default Header;
