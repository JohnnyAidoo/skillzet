"use client";
import { Backbutton } from "@/public/components/clientComp";
import RichHeader from "@/public/components/richHeader";
import SideBar from "@/public/components/sideBar";
import { Spinner, Typography } from "@material-tailwind/react";
import { Metadata } from "next";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

function Learn() {
  const params = useParams();
  const videoId = params.videoID;
  const [videoDetails, setVideoDetails] = useState({ title: "", duration: "" });

  useEffect(() => {
    // Update metadata dynamically when videoId changes
    const updatedMetadata: Metadata = {
      title: `SkillZet - Learn ${videoId}`,
      description: `Learn For Free - Video ${videoId}`,
    };

    Object.assign(document, {
      title: updatedMetadata.title,
    });
  });

  const onPlayerReady = (event: any) => {
    event.target.seekTo(localStorage.getItem(videoId as string));
    const seconds = event.target.getDuration();
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // formated seconds
    const formated_duration = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

    setVideoDetails({
      title: event.target.videoTitle as string,
      duration: formated_duration,
    });
  };

  return (
    <>
      <RichHeader />
      <SideBar />
      <main
        style={{ width: "79%" }}
        className="bottom-0 flex flex-col float-right px-10"
      >
        <Backbutton />
        <div className="flex items-center justify-center w-full p-5">
          {/* <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="w-full aspect-video"
            allowFullScreen
            allow="autoplay"
            placeholder="Python for Beginners"
          ></iframe> */}

          <YouTube
            videoId={videoId as string}
            opts={{
              playerVars: {
                autoplay: 1,
              },
            }}
            loading={"eager"}
            onReady={onPlayerReady}
            onStateChange={(event) => {
              localStorage.setItem(
                videoId as string,
                event.target.getCurrentTime()
              );
            }}
          />
        </div>
        <Typography variant="h2">{videoDetails.title}</Typography>
        <div className="flex gap-4">
          <Typography variant="lead">Video Duration</Typography>
          <Typography variant="lead">{videoDetails.duration}</Typography>
        </div>
      </main>
    </>
  );
}

export default Learn;
