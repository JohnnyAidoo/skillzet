"use client";
import { Avatar, CardTemplate, Input } from "@/public/components/clientComp";
import Header from "@/public/components/header";
import SideBar from "@/public/components/sideBar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdOutlineSearch, MdOutlineNotifications } from "react-icons/md";
import { firebaseStore } from "../backend/firebase";
import { getAuth } from "firebase/auth";
import RichHeader from "@/public/components/richHeader";

function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState<Course[]>();
  
  type Links={
    id:string;
    uid:string;
    courseID:string;
  }
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
      const collection_ref = collection(firebaseStore, "Bookmarks");
      const q = await query(collection_ref,where("uid", "==", getAuth().currentUser?.uid));
      const doc_ref = await getDocs(q);

      let links:Links[] = [];

      const linksData = doc_ref.forEach((doc) => {
        links.push({ id: doc.id,...doc.data() } as Links);
      });
      console.log(links);
      // let bookmarks:Course = [];
      const courseIDs = links.map((item) => item.courseID);
      
      const coursesCollection_ref = collection(firebaseStore, "Course");
      const courses_query = await query(coursesCollection_ref, where("id", "in", courseIDs));
      const courses_doc_ref = await getDocs(courses_query);

      let courses:Course[] = [];
      const courseData = courses_doc_ref.forEach((doc) => {
        courses.push({ id: doc.id,...doc.data() } as Course);
      });

      setBookmarks(courses);
    
      
    };
    
    get_data();
  }, [bookmarks]);
  return (
    <>
     <RichHeader />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="bottom-0 flex flex-col float-right px-10"
      >
        <div className="w-full"> </div>
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10">
          {bookmarks?.map((item) =>(
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

export default BookmarkPage;
