import { Button, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";

function LandingPage() {
  return (
    <>
      <main
        className="flex justify-between items-center px-10
       w-full min-h-[calc(100vh)] bg-gradient-to-b from-indigo-800 to-cyan-300"
      >
        <section className="flex flex-col w-1/2 gap-10">
          <Typography variant="h1" color="white">
            Learn Anything for FREE 🌎
          </Typography>
          <Typography variant="lead" color="white">
            SkillZet is designed to help people learn high value Skills for FREE
            and is built on 2 core principles:
            <br />
            <Typography variant="paragraph">
              <li>Completely FREE for all to learn with no distraction</li>
              <li>
                An Incredible User Experience and well organized to help you
                learn no matter your level of experience
              </li>
            </Typography>
          </Typography>
          <form className="flex flex-col items-center gap-2">
            <Input
              crossOrigin={undefined}
              type="email"
              placeholder="Email Address"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            <Button>Join Waitlist</Button>
          </form>
          <Typography color="white">
            Be the first to learn when it Out!
          </Typography>
        </section>
        <section className="">
          <Image
            src={require("../public/Screenshot_2024-02-22_at_16.03.58-removebg-preview.png")}
            alt="skillZet Image"
          />
        </section>
      </main>
    </>
  );
}

export default LandingPage;
