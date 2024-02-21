"use client";
import { Button } from "@/public/components/clientComp";
import Header from "@/public/components/header";
import { Textarea, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { ReactElement } from "react";

function DateOfBirth(props: { cta: ReactElement }) {
  return (
    <>
      <main className="absolute flex flex-col items-center justify-center w-full h-full overflow-x-clip bg-blend-lighten">
        <div className="flex flex-col items-center justify-center w-1/2 gap-5 h-1/2">
          <Typography variant="h2"> What is your birth date? </Typography>

          <Textarea size="lg" placeholder="bio" />

          {props.cta}
        </div>
      </main>
    </>
  );
}
export default DateOfBirth;
