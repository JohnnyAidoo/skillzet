"use client";
import { Button, Typography } from "@material-tailwind/react";
import { ReactElement, useState } from "react";

function Topics(props: { cta: ReactElement }) {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (topic: never) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };
  //

  const topic_list = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "DevOps",
    "Android Development",
    "Data Science",
    "Mobile Development",
    "Web Development",
    "Database Development",
    "Data Analysis",
    "AI and Data Science",
    "Game Development",
    "Cloud Computing",
    "Block chain",
    "DataStructures and Algorithms",
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-full overflow-x-clip bg-blend-lighten">
        <div className="flex flex-col items-center justify-center gap-5 md:w-3/4 h-1/2">
          <Typography variant="h2"> What are you going to learn? </Typography>

          <div className="flex flex-wrap w-full gap-2">
            {topic_list.map((topic) => (
              <Button
                onClick={() => {
                  toggleTopic(topic as never);
                }}
                variant={
                  selectedTopics.includes(topic as never)
                    ? "filled"
                    : "outlined"
                }
                color="indigo"
                key={topic}
                className="px-3 min-w-1/4"
              >
                {topic}
              </Button>
            ))}
          </div>

          {props.cta}
        </div>
      </main>
    </>
  );
}
export default Topics;
