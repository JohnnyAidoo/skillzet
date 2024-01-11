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
import YouTube from "react-youtube";

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
    description: string;
  };
  const params = useParams();
  const courseID = params.courseDetails;
  const [couresDetail, setCourseDetail] = useState<Course>();

  useEffect(() => {
    AOS.init();
    getCourse();
  }, []);

  const getCourse = async () => {
    const docRef = await doc(firebaseStore, "Course", courseID as string);
    const docSnap = await getDoc(docRef);

    setCourseDetail(docSnap.data() as Course);
  };
  const regex = /(?<=\?v=)(.*?)(?=&|$)/;
  const match = regex.exec(couresDetail?.video_url as string);
  const videoID = match ? match[0] : null;

  const onPlayerReady = (event: any) => {
    if (localStorage.getItem(videoID as string)) {
      event.target.seekTo(localStorage.getItem(videoID as string));
    }
    const seconds = event.target.getDuration();
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // formated seconds
    const formated_duration = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data == 0) {
    }
    localStorage.setItem(videoID as string, event.target.getCurrentTime());
  };

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
                className="mx-2 rounded-xl hover:bg-gray-600"
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
        className="bottom-0 flex flex-col float-right gap-3 px-10 h-fit"
      >
        {/* back button */}
        <Backbutton data-aos="fade-right" />

        {/* title */}
        <h1 className="pb-5 text-4xl font-bold">{couresDetail?.title}</h1>

        {/* video */}

        <YouTube
          videoId={videoID as string}
          onReady={onPlayerReady}
          onStateChange={onPlayerStateChange}
        />

        {/* title */}
        <h2 className="pb-5 text-2xl font-semibold" data-aos="fade-up">
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
        <div className="flex items-center ">
          <b className="text-gray-500">Course Arthur : </b>
          <h4 className="px-3 text-2xl font-semibold">{couresDetail?.owner}</h4>
        </div>
        {/* <p>
          An introduction to the intellectual enterprises of computer science
          and the art of programming.
        </p> */}

        <div className="flex justify-between w-full p-5 px-10 bg-gray-300 justify-self-center">
          <b
            style={{ color: styles.light.cta }}
            className="flex items-center text-lg font-semibold gap-x-2"
          >
            <MdPerson size={20} /> Self Paced
          </b>
          <b
            style={{ color: styles.light.cta }}
            className="flex items-center text-lg font-semibold gap-x-2"
          >
            <MdMoney size={20} /> Free
          </b>
          <b
            style={{ color: styles.light.cta }}
            className="flex items-center text-lg font-semibold gap-x-2"
          >
            <MdTimer size={20} /> 2 weeks
          </b>
        </div>

        {/*  */}
        <b style={{ color: styles.light.cta }}>
          5,377 already enrolled! After a course session ends.
        </b>

        {/*  */}
        <div className="py-3 bg-gray-200 w-fit px-7">
          <p className="font-bold">What You Will Learn</p>
        </div>

        {/*  */}
        <div className="px-5 font-body">{couresDetail?.description}</div>
      </main>
    </>
  );
}

export default CourseDetailComp;
