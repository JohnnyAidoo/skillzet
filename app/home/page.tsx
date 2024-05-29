"use client";
import { CardTemplate } from "@/app/components/clientComp";
import RichHeader from "@/app/components/richHeader";
import SideBar from "@/app/components/sideBar";
import { collection, getDocs } from "firebase/firestore";
import { firebaseStore } from "../backend/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Carousel } from "@material-tailwind/react";
import banner1 from "@/public/banner1.jpeg";
import banner2 from "@/public/banner2.jpeg";
import Image from "next/image";

function HomePage() {
  const router = useRouter();

  const [courseList, setCourses] = useState<Course[]>();

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
    user_id != null ? router.replace("/home") : null;
  }, [router]);

  return (
    <>
      <RichHeader />
      <SideBar />
      <main className="bottom-0 flex flex-col float-right px-10 gap-96">
        {/* <div
          className="w-full bg-gray-400 rounded-lg "
          style={{ maxHeight: "30vh" }}
        >
          <Carousel className="h-full rounded-xl">
            <Image
              src={banner1}
              alt="ads banner 1"
              className="object-contain w-full h-full"
            />
            <Image
              src={banner2}
              alt="ads banner 1"
              className="object-contain w-full h-full"
            />
          </Carousel>
        </div> */}
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
