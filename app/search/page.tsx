"use client";
import {
  CardTemplate,
  CourseCategoryCard,
  Text,
} from "@/public/components/clientComp";
import RichHeader from "@/public/components/richHeader";
import SideBar from "@/public/components/sideBar";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firebaseStore } from "../backend/firebase";

export default function SearchPage() {
  const [courseList, setCourses] = useState<Course[]>();
  const [searchOverlay, setSearchOverlay] = useState();
  const [searchValue, setSearchValue] = useState<string>();

  const topic_list = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "DevOps",
    "Android Development",
    "Data Science",
    "Mobile Development",
    "Web Development",
  ];

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

    get_data();
  }, []);
  // searchbar event
  const handleSearch = () => {};

  return (
    <>
      <RichHeader
        searchValue={searchValue}
        searchFunction={handleSearch}
        searchOnChange={(e: any) => {
          setSearchValue(e.target.value);
        }}
      />
      <SideBar />
      <main className="bottom-0 flex flex-col float-right px-10">
        <div className="grid w-full grid-cols-1 gap-2 mb-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-5">
          {topic_list.map((topic) => (
            <CourseCategoryCard title={topic} />
          ))}
        </div>

        <Text className="my-10" variant="h2">
          Trending hot &#128293;
        </Text>

        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-5">
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
