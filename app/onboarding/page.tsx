"use client";
import React, { useEffect } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Welcome from "./Wecome";
import Header from "@/public/components/header";
import styles from "@/public/static/theme";
import Bio from "./bio";
import DateOfBirth from "./dateOfBirth";
import Topics from "./Topics";

export default function DefaultStepper() {
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [content, setContent] = React.useState(
    <Welcome
      cta={
        <Button
          onClick={handleNext}
          style={{ backgroundColor: styles.light.cta }}
        >
          Get Started
        </Button>
      }
    />
  );

  useEffect(() => {
    if (activeStep === 0) {
      setContent(
        <Welcome
          cta={
            <Button
              onClick={handleNext}
              style={{ backgroundColor: styles.light.cta }}
            >
              Get Started
            </Button>
          }
        />
      );
    } else if (activeStep === 1) {
      setContent(
        <Bio
          cta={
            <Button
              onClick={handleNext}
              style={{ backgroundColor: styles.light.cta }}
            >
              Next
            </Button>
          }
        />
      );
    } else if (activeStep === 2) {
      setContent(
        <DateOfBirth
          cta={
            <Button
              onClick={handleNext}
              style={{ backgroundColor: styles.light.cta }}
            >
              Next
            </Button>
          }
        />
      );
    } else if (activeStep === 3) {
      setContent(
        <Topics
          cta={
            <Button
              onClick={handleNext}
              style={{ backgroundColor: styles.light.cta }}
            >
              Next
            </Button>
          }
        />
      );
    }
  }, []);

  return (
    <>
      <div className="w-full px-8 py-4">
        <h1 className="text-4xl font-bold text-left text-indigo-500">
          skillZet
        </h1>

        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          <Step onClick={() => setActiveStep(2)}>3</Step>
          <Step onClick={() => setActiveStep(3)}>4</Step>
        </Stepper>
        <section className="w-full h-[calc(90vh)]">{content}</section>
        <div className="fixed flex justify-around w-full mt-16 bottom-2">
          {/* <Button
            style={{ backgroundColor: styles.light.cta }}
            onClick={handlePrev}
            disabled={isFirstStep}
          >
            Prev
          </Button>
          <Button
            style={{ backgroundColor: styles.light.cta }}
            onClick={handleNext}
            disabled={isLastStep}
          >
            Next
          </Button> */}
        </div>
      </div>
    </>
  );
}
