"use client";
import { Button as MTButton } from "@material-tailwind/react";
import styles from "../static/theme";
function Button(props: {
  title: string;
  className: string;
  variant: any;
  color: any;
}) {
  return (
    <MTButton
      className={props.className}
      value={props.title}
      variant={props.variant}
      size="md"
      color={props.color}
      style={{ backgroundColor: styles.light.cta }}
    >
      {props.title}
    </MTButton>
  );
}

export default Button;
