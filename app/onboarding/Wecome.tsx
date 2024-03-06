"use client";
import { Typography } from "@material-tailwind/react";
import { ReactElement } from "react";

function Welcome(props: { cta: ReactElement }) {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-full overflow-x-clip bg-blend-lighten">
        <div className="flex flex-col items-center gap-5 md:w-1/2 h-1/2">
          <Typography variant="h1" className="text-center">
            Welcome To skillZet
          </Typography>
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
