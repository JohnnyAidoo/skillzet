"use client";
import React, { useState } from "react";
import { Alert, Button, Input } from "@/public/components/clientComp";
import { firebaseStore } from "../backend/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Textarea } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

function Upload() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    course_category: "",
    course_type: "",
    duration: "",
    rating: 0,
    description: "",
    video_url: "",
    owner: "",
  });
  const [alert, seAlert] = useState(<></>);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const upload_course = async () => {
    const collection_ref = collection(firebaseStore, "Course");
    try {
      const docref = await addDoc(collection_ref, formData);
      if (docref.id) {
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
          <Input
            label="course category"
            type="text"
            name="course_category"
            value={formData.course_category}
            onChange={handleChange}
          />
          <Input
            label="course type"
            type="text"
            name="course_type"
            value={formData.course_type}
            onChange={handleChange}
          />
          <Input
            label="duration"
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
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
        <Button title="Upload " onClick={upload_course} />
      </div>
      {alert}
    </>
  );
}

export default Upload;
