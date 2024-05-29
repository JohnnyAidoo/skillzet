"use client";
import { firebaseStore } from "@/app/backend/firebase";
import { Button, CardTemplate } from "@/app/components/clientComp";
import styles from "@/public/static/theme";
import { Option, Select, Typography } from "@material-tailwind/react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideBar from "@/app/components/sideBar";
import RichHeader from "@/app/components/richHeader";

export default function SearchDetail() {
  const params = useParams().searchId;
  const [Selectedvalue, setSelectedvalue] = useState("react");
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

  const handleSearch = async () => {
    const collection_ref = collection(firebaseStore, "Course");
    const doc_ref = await getDocs(collection_ref);
    const q = query(
      collection(firebaseStore, "Course"),
      where("course_category", "==", params)
    );
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());
    setCourses(results as Course[]);
  };

  // filter search
  const handleFilter = async () => {
    const collection_ref = collection(firebaseStore, "Course");
    const doc_ref = await getDocs(collection_ref);
    const q = query(
      collection(firebaseStore, "Course"),
      where("course_category", "==", params),
      orderBy("createdAt", Selectedvalue === "latest_to_old " ? "asc" : "desc")
    );
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());
    setCourses(results as Course[]);
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <RichHeader />
      <SideBar />
      <main className="bottom-0 flex flex-col float-right px-10">
        <div className="w-full mb-10">
          <Typography variant="h4" style={{ color: styles.light.textColor }}>
            Search Result for &#34;{decodeURIComponent(params as string)}&#34;
          </Typography>
          <div className="flex items-baseline w-full gap-1">
            <Typography variant="h6">{courseList?.length}</Typography>
            <span>
              <Typography
                variant="paragraph"
                className="font-thin"
                style={{ color: styles.light.textColor }}
              >
                Results
              </Typography>
            </span>
          </div>

          {/* filters */}
          <div className="flex w-full gap-5 mt-7">
            <Select
              key={Selectedvalue}
              label="Sort by"
              color="blue"
              value={Selectedvalue}
              onChange={(val: any) => setSelectedvalue(val)}
            >
              <Option color="black" value="latest_to_old">
                Latest to Old
              </Option>
              <Option value="old_to_latest">Old to Latest</Option>
            </Select>
            <Button title="Filter" onClick={handleFilter} />
          </div>
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
