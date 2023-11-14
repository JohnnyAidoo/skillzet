"use client";
import { Input as MTInput } from "@material-tailwind/react";

function Input(props: { label: string; type: string }) {
  return (
    <MTInput
      variant="outlined"
      label={props.label}
      crossOrigin={undefined}
      size="lg"
      className="bg-white"
      type={props.label}
    />
  );
}

export default Input;
