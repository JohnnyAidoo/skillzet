"use client";
import {
  Avatar,
  Backbutton,
  Button,
  Input,
} from "@/public/components/clientComp";
import Header from "@/public/components/header";
import SideBar from "@/public/components/sideBar";
import styles from "@/public/static/theme";
import {
  MdOutlineNotifications,
  MdOutlineSearch,
  MdStar,
  MdPlayArrow,
  MdPerson,
  MdMoney,
  MdTimer,
} from "react-icons/md";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { firebaseStore } from "@/app/backend/firebase";
import Image from "next/image";

function CourseDetailComp() {
  type Course = {
    id: string;
    title: string;
    course_type: string;
    date_uploaded: any;
    rating: number;
    owner: string;
    video_url: string;
    duration: string;
    course_category: string;
  };
  const params = useParams();
  const uid = params.courseDetails;
  const [couresDetail, setCourseDetail] = useState<Course>();

  useEffect(() => {
    AOS.init();
    getCourse();
  });

  const getCourse = async () => {
    const docRef = await doc(firebaseStore, "Course", uid as string);
    const docSnap = await getDoc(docRef);

    setCourseDetail(docSnap.data() as Course);
  };
  const regex = /(?<=\?v=)(.*?)(?=&|$)/;
  const match = regex.exec(couresDetail?.video_url as string);
  const videoID = match ? match[0] : null;

  const numberOfRating = 5;
  return (
    <>
      <Header
        sub={
          <>
            <div className="w-1/3 mx-10">
              <Input
                label="search"
                type="search"
                icon={<MdOutlineSearch size={30} />}
              />
            </div>
            <div className="flex items-center justify-between ">
              <MdOutlineNotifications
                size={30}
                className="mx-2 rounded-xl hover:bg-gray-400"
              />

              <Avatar
                className="mx-2"
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="l"
              />
            </div>
          </>
        }
      />
      <SideBar />

      <main
        style={{ width: "79%" }}
        className="float-right flex flex-col bottom-0 px-10 h-fit gap-3"
      >
        {/* back button */}
        <Backbutton data-aos="fade-right" />

        {/* title */}
        <h1 className="text-4xl font-bold pb-5">{couresDetail?.title}</h1>

        {/* thumbnail */}
        <div className="aspect-video w-full" data-aos="fade-up">
          <Image
            src={`https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
            alt="html css thumbnail"
            className="rounded-md"
          />
        </div>

        {/* title */}
        <h2 className="text-2xl font-semibold pb-5" data-aos="fade-up">
          {couresDetail?.title}
        </h2>

        {/* rating */}
        <div className="flex">
          {Array.from(
            { length: couresDetail?.rating as number },
            (_, index) => (
              <div key={index} data-aos="fade-right">
                <MdStar key={index} size={35} color={styles.light.cta} />
              </div>
            )
          )}
        </div>

        {/* description */}
        <p>
          An introduction to the intellectual enterprises of computer science
          and the art of programming.
        </p>
        <Button
          title="Start Learning"
          icon={<MdPlayArrow size={25} />}
          className="w-fit flex items-center gap-x-2"
        />
        <div className="flex bg-gray-300 w-full justify-between justify-self-center p-5">
          <b
            style={{ color: styles.light.cta }}
            className="flex items-center gap-x-2 text-lg font-semibold"
          >
            <MdPerson size={20} /> Self Paced
          </b>
          <b
            style={{ color: styles.light.cta }}
            className="flex items-center gap-x-2 text-lg font-semibold"
          >
            <MdMoney size={20} /> Free
          </b>
          <b
            style={{ color: styles.light.cta }}
            className="flex items-center gap-x-2 text-lg font-semibold"
          >
            <MdTimer size={20} /> 2 weeks
          </b>
        </div>

        {/*  */}
        <b style={{ color: styles.light.cta }}>
          5,377 already enrolled! After a course session ends.
        </b>

        {/*  */}
        <div className="w-fit bg-gray-200 px-7 py-3">
          <p className="font-bold">What You Will Learn</p>
        </div>

        {/*  */}
        <ul>
          <li className="list-disc">
            A broad and robust understanding of computer science and programming
          </li>
          <li className="list-disc">
            How to think algorithmically and solve programming problems
            efficiently{" "}
          </li>
          <li className="list-disc">
            Concepts like abstraction, algorithms, data structures,
            encapsulation, resource management, security, software engineering,
            and web development{" "}
          </li>
          <li className="list-disc">
            Familiarity in a number of languages, including C, Python, SQL, and
            JavaScript plus CSS and HTML
          </li>
          <li className="list-disc">
            How to engage with a vibrant community of like-minded learners from
            all levels of experience
          </li>
          <li className="list-disc">
            How to develop and present a final programming project to your peers
          </li>
        </ul>
      </main>
    </>
  );
}

export default CourseDetailComp;
