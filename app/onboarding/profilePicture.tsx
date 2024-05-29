"use client";
import { Typography } from "@material-tailwind/react";
import { ReactElement } from "react";

function ProfilePicture(props: { cta: ReactElement }) {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-full overflow-x-clip bg-blend-lighten">
        <div className="flex flex-col items-center justify-center gap-5 md:w-1/2 h-1/2">
          <Typography variant="h2">Upload a Profile Picture </Typography>
          <input type="file" />
          {props.cta}
        </div>
      </main>
    </>
  );
}
export default ProfilePicture;
