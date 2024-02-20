"use client";
import { Button } from "@/public/components/clientComp";
import Header from "@/public/components/header";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

function Welcome() {
  return (
    <>
      <Header sub={<></>} />
      <main className="overflow-x-clip w-screen h-[calc(90%)] absolute bg-[url('../public/static/ssshape.svg')] bg-no-repeat bg-left-bottom bg-contain bg-blend-lighten flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-screen h-1/2">
          <Typography variant="h1"> Welcome To skillZet</Typography>
          <Typography variant="paragraph">
            Let customise your dashboard , more accurately
          </Typography>
          <Link className="m-10" href="/auth/login">
            <Button title="Get Started" />
          </Link>
        </div>
      </main>
    </>
  );
}

export default Welcome;
