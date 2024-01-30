"use client";
import { Avatar, Input } from "@/public/components/clientComp";
import Header from "@/public/components/header";
import SideBar from "@/public/components/sideBar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdOutlineSearch, MdOutlineNotifications } from "react-icons/md";
import { firebaseStore } from "../backend/firebase";
import { getAuth } from "firebase/auth";

function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState();
  
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

      console.log(courses);
    
      
    };
    
    get_data();
  }, []);
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
                alt="avatar"
              />
            </div>
          </>
        }
      />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="bottom-0 flex flex-col float-right px-10"
      >
        <div className="w-full"> </div>
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10"></div>
      </main>
    </>
  );
}

export default BookmarkPage;
