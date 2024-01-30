"use client";
import { CardTemplate } from "@/public/components/clientComp";
import RichHeader from "@/public/components/richHeader";
import SideBar from "@/public/components/sideBar";
import { collection, doc, getDocs } from "firebase/firestore";
import { firebaseStore } from "../backend/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();

  const [courseList, setCourses] = useState<Course[]>();
  const [tempInformation, setTempInformationourses] = useState<TempInfo[]>();

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
  type TempInfo = {
    id: string;
    uid: string;
    vidoe: string;
  };

  useEffect(() => {
    const get_data = async () => {
      const collection_ref = collection(firebaseStore, "Course");
      const doc_ref = await getDocs(collection_ref);

      let courses: Course[] = [];

      const courseData = doc_ref.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() } as Course);
      });

      setCourses(courses);

      // doc_ref.forEach((doc) => {
      //   console.log(doc.id, "=>", doc.data());
      // });
    };
    const get_currently_learning = async () => {
      const collection_ref = collection(firebaseStore, "TempInfo");
      const doc_ref = await getDocs(collection_ref);

      let tempInfo: TempInfo[] = [];

      const courseData = doc_ref.forEach((doc) => {
        tempInfo.push({ ...(doc.data() as TempInfo) });
      });
    };
    get_data();
  }, []);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    user_id != null ? router.replace("/dashboard") : null;
  }, [router]);

  return (
    <>
      <RichHeader />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="bottom-0 flex flex-col float-right px-10"
      >
        <div
          className="w-full mb-10 bg-gray-400 rounded-lg"
          style={{ minHeight: "30vh" }}
        >
          {/* TODO : render current learning course and progress */}
        </div>
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10">
          {courseList?.map((item) => (
            <CardTemplate
              key={item.id}
              id={item.id}
              href={`/course/${item.id}`}
              title={item.title}
              category={item.course_category}
              duration={item.duration}
              owner={item.owner}
              type={item.course_type}
              video_url={item.video_url}
              rating={item.rating}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default HomePage;
