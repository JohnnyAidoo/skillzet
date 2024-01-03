"use client";
import SideBar from "@/public/components/sideBar";
import { Metadata } from "next";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function Learn() {
  const params = useParams();
  const videoId = params.videoID;

  useEffect(() => {
    // Update metadata dynamically when videoId changes
    const updatedMetadata: Metadata = {
      title: `Learn - Video ${videoId}`,
      description: `Learn For Free - Video ${videoId}`,
    };

    Object.assign(document, {
      title: updatedMetadata.title,
    });
  });
  return (
    <>
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="bottom-0 flex flex-col float-right px-10"
      >
        <div className="flex items-center justify-center w-full p-5">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="w-full aspect-video"
            allowFullScreen
            allow="autoplay"
            placeholder="Python for Beginners"
          ></iframe>
        </div>
      </main>
    </>
  );
}

export default Learn;
