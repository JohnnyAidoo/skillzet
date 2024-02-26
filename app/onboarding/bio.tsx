"use client";

import { Textarea, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { ReactElement } from "react";

function Bio(props: { cta: ReactElement }) {
  return (
    <>
      <main className="absolute flex flex-col items-center justify-center w-full h-full overflow-x-clip bg-blend-lighten">
        <div className="flex flex-col items-center justify-center w-1/2 gap-5 h-1/2">
          <Typography variant="h2"> Write a bit about yourself </Typography>
          <Typography variant="paragraph">
            A bit of who you are. Don&apos;t think too hard, Just make it fun
          </Typography>
          <Textarea size="lg" label="bio" />

          {props.cta}
        </div>
      </main>
    </>
  );
}
export default Bio;
