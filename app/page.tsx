"use client";
import Image from "next/image";
import heroImg from "../public/heroImg.png";
import Header from "../public/components/header";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import styles from "../public/static/theme";

function App() {
  return (
    <>
      <Header />
      <main className=" bg-[url('../public/static/ssshape.svg')]  bg-no-repeat bg-left-bottom bg-contain bg-blend-lighten">
        <section
          id="hero"
          className="flex justify-center items-center h-full px-16 "
        >
          <div className="w-2/3 ">
            <h2 className="text-7xl font-bold mb-10 ">
              <span>Unlock</span> Your Potential. <span>Learn</span>,
              <span>Grow</span>, <span>Succeed</span>.
            </h2>
            <p className="w-4/5 font-bold">
              Are you ready to embark on a journey of knowledge and
              transformation? Welcome to
              <span className="font-bold"> skillZet</span>, your gateway to a
              world of online learning and personal development.
            </p>
          </div>
          <div>
            <Image src={heroImg} alt={"hero image"} />
          </div>
        </section>

        {/*  */}
        <div
          className="
        mb-32 w-full bg-[url('../public/static/ssshape2.svg')]  bg-no-repeat bg-auto bg-right-bottom bg-blend-lighten"
        >
          <section className="flex justify-start mb-10 px-16  ">
            <div className="w-2/3">
              <h2 className="text-7xl font-bold mb-10 w-full">
                🚀 The Future of Learning is <span>Here</span>
              </h2>

              <p className="w-2/3 font-semibold">
                At <span className="font-bold">skillZet</span> , we believe that
                learning is a lifelong adventure. Our platform offers an
                extensive range of courses designed to empower you with the
                skills and knowledge you need to thrive in an ever-evolving
                world. From technical skills to creative arts, from business
                management to personal growth, we have something for everyone.
              </p>
            </div>
          </section>

          {/*  */}
          <section className="flex justify-end mb-10 px-16">
            <div className="w-2/3">
              <h2 className="text-7xl font-bold mb-10 w-full text-end">
                🌎 Join a Global Learning <span>Community</span>
              </h2>
              <div className="flex justify-end self-end">
                <p className="w-1/2 font-semibold justify-end text-end">
                  At <span className="font-bold">skillZet</span>, we foster a
                  global community of learners. Share your knowledge, learn from
                  others, and grow together. Your journey begins now!
                </p>
              </div>
            </div>
          </section>

          {/*  */}
          <section className="flex justify-center mb-10 w-full">
            <div className=" w-3/4 flex flex-col items-center justify-center ">
              <h2 className="text-7xl font-bold mb-10 ">Get Started Today</h2>

              <p className="w-2/3 text-center font-semibold mb-5">
                Ready to embark on your learning journey? Take the first step
                and explore our diverse course offerings. Whether you're a
                novice or an expert,skillZet has something to offer you.
              </p>
              <Link href={""}>
                <Button
                  style={{ backgroundColor: styles.light.cta }}
                  size="lg"
                  className="px-28"
                >
                  BEGIN
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
