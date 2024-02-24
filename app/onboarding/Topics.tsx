"use client";
import { Button } from "@/public/components/clientComp";
import Header from "@/public/components/header";
import { Chip, Textarea, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { ReactElement } from "react";

function Topics(props: { cta: ReactElement }) {
  const topic_list = [
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "Web Development",
    "Database Development",
    "Data Analysis",
    "AI Development",
    "Game Development",
    "Cloud Computing",
  ];

  return (
    <>
      <main className="absolute flex flex-col items-center justify-center w-full h-full overflow-x-clip bg-blend-lighten">
        <div className="flex flex-col items-center justify-center w-1/2 gap-5 h-1/2">
          <Typography variant="h2"> What are you going to learn? </Typography>

          <div className="grid grid-cols-4 "></div>
          {topic_list.map((topic) => (
            <Chip
              key={topic}
              value={topic}
              size="lg"
              color="blue"
              variant="ghost"
            />
          ))}
          {props.cta}
        </div>
      </main>
    </>
  );
}
export default Topics;
