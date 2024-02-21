"use client";
import { Button } from "@/public/components/clientComp";
import Header from "@/public/components/header";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { ReactElement } from "react";

function Welcome(props: { cta: ReactElement }) {
  return (
    <>
      <main className="absolute flex flex-col items-center justify-center w-full h-full overflow-x-clip bg-blend-lighten">
        <div className="flex flex-col items-center w-screen gap-5 h-1/2">
          <Typography variant="h1"> Welcome To skillZet</Typography>
          <Typography variant="paragraph">
            Let customize your dashboard , more accurately
          </Typography>
          {props.cta}
        </div>
      </main>
    </>
  );
}

export default Welcome;
