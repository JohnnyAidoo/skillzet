"use client";
import Link from "next/link";
import { Button, ButtonGroup } from "@material-tailwind/react";
import styles from "../static/theme";
function Header() {
  return (
    <>
      <header
        className="flex justify-between mb-5 items-center w-full z-10 absolute top-0"
        style={{ backgroundColor: styles.light.primaryDark }}
      >
        <Link href="/">
          <h1 className="font-bold text-4xl text-indigo-500">skillZet</h1>
        </Link>

        <ButtonGroup variant="filled" size="md">
          <Link href="/auth/signup" id="">
            <Button
              className="shadow-none "
              style={{
                color: styles.light.cta,
                backgroundColor: styles.light.primaryLight,
              }}
            >
              SIGN UP
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button
              className="hover:bg-blue-gray-50"
              style={{
                backgroundColor: styles.light.cta,
                color: styles.light.primaryLight,
              }}
            >
              LOG IN
            </Button>
          </Link>
        </ButtonGroup>
      </header>
    </>
  );
}

export default Header;
