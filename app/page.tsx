"use client";
import Image from "next/image";
import heroImg from "../public/heroImg.png";
import Header from "../public/components/header";
import Link from "next/link";
import { Button, ButtonGroup } from "@material-tailwind/react";
import styles from "../public/static/theme";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Header
        sub={
          <>
            <div className="w-1/2"></div>
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
          </>
        }
      />
      <main className=" absolute bg-[url('../public/static/ssshape.svg')] bg-no-repeat bg-left-bottom bg-contain bg-blend-lighten">
        <section
          id="hero"
          className="flex items-center justify-center h-full px-16 "
        >
          <div data-aos="fade-right" className="w-2/3 ">
            <h2 className="mb-10 font-bold text-7xl ">
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
          <div data-aos="fade-left" className="hidden md:block sm">
            <Image src={heroImg} alt={"hero image"} />
          </div>
        </section>

        {/*  */}
        <div
          className="
        mb-32 w-full bg-[url('../public/static/ssshape2.svg')]  bg-no-repeat bg-auto bg-right-bottom bg-blend-lighten"
        >
          <section className="flex justify-start px-16 mb-10 ">
            <div className="w-2/3">
              <h2
                data-aos="fade-right"
                className="w-full mb-10 font-bold text-7xl"
              >
                🚀 The Future of Learning is <span>Here</span>
              </h2>

              <p data-aos="fade-up" className="w-2/3 font-semibold">
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
          <section className="flex justify-end px-16 mb-10">
            <div className="w-2/3">
              <h2
                data-aos="fade-left"
                className="w-full mb-10 font-bold text-7xl text-end"
              >
                🌎 Join a Global Learning <span>Community</span>
              </h2>
              <div className="flex self-end justify-end">
                <p
                  data-aos="fade-up"
                  className="justify-end w-1/2 font-semibold text-end"
                >
                  At <span className="font-bold">skillZet</span>, we foster a
                  global community of learners. Share your knowledge, learn from
                  others, and grow together. Your journey begins now!
                </p>
              </div>
            </div>
          </section>

          {/*  */}
          <section className="flex justify-center w-full mb-10">
            <div className="flex flex-col items-center justify-center w-3/4 ">
              <h2 className="mb-10 font-bold text-7xl ">Get Started Today</h2>

              <p
                data-aos="fade-up"
                className="w-2/3 mb-5 font-semibold text-center"
              >
                Ready to embark on your learning journey? Take the first step
                and explore our diverse course offerings. Whether you are a
                novice or an expert,skillZet has something to offer you.
              </p>
              <Link href={"/auth/login"}>
                <Button
                  style={{ backgroundColor: styles.light.cta }}
                  size="lg"
                  className="px-28"
                >
                  BEGIN
                </Button>
              </Link>
            </div>
            <div className="mb-10 mt-52"></div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
