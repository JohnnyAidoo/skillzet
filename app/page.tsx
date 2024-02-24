"use client";
import Image from "next/image";
import heroImg from "../public/heroImg.png";
import Header from "../public/components/header";
import Link from "next/link";
import {
  Button,
  ButtonGroup,
  Card,
  Collapse,
  Input,
  Typography,
} from "@material-tailwind/react";
import styles from "../public/static/theme";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";
import { firebaseStore } from "./backend/firebase";
import { MdCheck } from "react-icons/md";

function App() {
  const [success, setSuccess] = useState();
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  });

  const addToList = (e: any) => {
    e.preventDefault();
    const collection_ref = collection(firebaseStore, "waitlist");
    if (userEmail !== "") {
      try {
        addDoc(collection_ref, { email: userEmail }).then((res) => {
          res.id
            ? setSuccess(
                // @ts-ignore
                <MdCheck data-aos="fade-up" color="green" size={100} />
              )
            : null;
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <Header
        sub={
          <>
            <div className="w-1/2"></div>
            {/* <ButtonGroup variant="filled" size="md">
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
            </ButtonGroup> */}
            <Link href="#wait">
              <Button
                style={{
                  backgroundColor: styles.light.cta,
                  color: styles.light.primaryLight,
                }}
              >
                Join WaitList
              </Button>
            </Link>
          </>
        }
      />
      <main className="overflow-x-clip w-full px-10 absolute bg-[url('../public/static/ssshape.svg')] bg-no-repeat bg-left-bottom bg-contain bg-blend-lighten">
        <section
          id="hero"
          className="flex items-center justify-between h-full "
        >
          <div data-aos="fade-right" className="px-2 mb-2 md:w-2/4">
            <Typography variant="h1">
              <span>Unlock</span> Your Potential. <span>Learn</span>,
              <span>Grow</span>, <span>Succeed</span>.
            </Typography>

            <p className="w-4/5 font-bold mix-blend-normal">
              Are you ready to embark on a journey of knowledge and
              transformation? Welcome to
              <span className="font-bold"> skillZet</span>, your gateway to a
              world of online learning and personal development.
              <br />
              <Typography
                variant="h3"
                className="font-bold"
                style={{ color: "#0011fa" }}
              >
                ALL FOR FREE
              </Typography>
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="absolute justify-end hidden w-2/5 h-1/4 right-10 md:block -z-30"
          >
            <Image
              src={heroImg}
              alt={"hero image"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        {/*  */}
        <div
          className="
        mb-32 w-full bg-[url('../public/static/ssshape2.svg')]  bg-no-repeat bg-auto bg-right-bottom bg-blend-lighten"
        >
          <section className="flex justify-start px-2 mb-10 ">
            <div className="md:w-1/2">
              <Typography variant="h1" data-aos="fade-right" className="mb-2">
                🚀 The Future of Learning is <span>Here</span>
              </Typography>

              <p data-aos="fade-up" className="font-semibold md:w-2/3">
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
          <section className="flex justify-end px-2 mb-10">
            <div className="w-full md:w-2/3">
              <Typography
                variant="h1"
                data-aos="fade-left"
                className="w-full mb-10 text-right"
              >
                🌎 Join a Global Learning <span>Community</span>
              </Typography>
              <div className="flex self-end justify-end">
                <p
                  data-aos="fade-up"
                  className="justify-end w-full font-semibold md:w-1/2 text-end mix-blend-multiply"
                >
                  At <span className="w-full font-bold">skillZet</span>, we
                  foster a global community of learners. Share your knowledge,
                  learn from others, and grow together. Your journey begins now!
                </p>
              </div>
            </div>
          </section>

          {/*  */}
          <section className="flex justify-center w-full mb-10" id="wait">
            <div className="flex flex-col items-center justify-center w-full ">
              <Typography variant="h1" className="mb-2 text-center">
                Get Started Today
              </Typography>
              <p
                data-aos="fade-up"
                className="px-5 mb-5 font-semibold text-center md:w-2/3"
              >
                Ready to embark on your learning journey? Take the first step
                and explore our diverse course offerings. Whether you are a
                novice or an expert,skillZet has something to offer you.
              </p>
              {/* <Link href={"/auth/login"}>
                <Button
                  style={{ backgroundColor: styles.light.cta }}
                  size="lg"
                  className="px-28"
                >
                  BEGIN
                </Button>
              </Link> */}
              {success || (
                <form
                  onSubmit={addToList}
                  className="flex flex-col items-center w-full sm:w-4/12"
                >
                  <Card className="w-full mx-auto my-4">
                    <Input
                      crossOrigin
                      type="email"
                      label="email"
                      size="lg"
                      value={userEmail}
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                      }}
                    />
                  </Card>
                  <Button onClick={addToList}>Join WaitList</Button>
                </form>
              )}
            </div>
            <div className="mb-10 mt-52"></div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
