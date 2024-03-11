"use client";
import React, { useState } from "react";
import { Alert, Button, Input } from "@/public/components/clientComp";
import { firebaseAuth, firebaseStore } from "../backend/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Textarea } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

function Upload() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    course_category: "FullStack%20Development", // Default value for select
    course_type: "One%20Video", // Default value for select
    duration: 1, // Now a number for select
    rating: 0,
    description: "",
    video_url: "",
    owner: "",
    views: "",
  });
  const [alert, seAlert] = useState(<></>);
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | any
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const upload_course = async () => {
    const collection_ref = collection(firebaseStore, "Course");
    try {
      let id: any | undefined;
      const docref = await addDoc(collection_ref, formData).then((item) => {
        updateDoc(doc(firebaseStore, "Course", item.id), { id: item.id });
        id = item.id;
      });
      if (id !== undefined) {
        seAlert(<Alert color="green"> Course Uploaded</Alert>);
        router.refresh();
      } else {
        seAlert(<Alert color="red"> Error Occurred </Alert>);
      }
    } catch (err) {
      seAlert(<Alert color="red"> Error Occurred </Alert>);
    }
    // Additional logic after upload if needed
  };

  return (
    <>
      {alert}
      <div className="flex flex-col items-center justify-center ">
        <h1>Upload course</h1>
        <form style={{ width: "70vw" }} className="flex flex-col gap-2">
          <Input
            label="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <select
            name="course_category"
            value={formData.course_category}
            onChange={handleChange}
          >
            <option value="FullStack%20Development">
              FullStack Development
            </option>
            <option value="Web%20Development">Web Development</option>
            <option value="Frontend%20Development">Frontend Development</option>
            <option value="Backend%20Development">Backend Development</option>
            <option value="Android%20Development">Android Development</option>
            <option value="IOS%20Development">IOS Development</option>
            <option value="Data%20Science">Data Science</option>
            <option value="Data%20Analytics">Data Analytics</option>
          </select>
          <select
            name="course_type"
            value={formData.course_type}
            onChange={handleChange}
          >
            <option value="One%20Video">One Video</option>
            <option value="Playlist">Playlist</option>
          </select>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <Input
            label="owner"
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
          />
          <Input
            label="rating"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
          <Input
            label="views"
            type="text"
            name="views"
            value={formData.views}
            onChange={handleChange}
          />
          <Textarea
            label="description"
            size="lg"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <Input
            label="video url"
            type="text"
            name="video_url"
            value={formData.video_url}
            onChange={handleChange}
          />
        </form>
        <Button title="Upload" onClick={upload_course} />
      </div>
      {alert}
    </>
  );
}

export default Upload;
