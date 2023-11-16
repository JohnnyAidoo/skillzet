"use client";
import {
  Button as MTButton,
  Input as MTInput,
  IconButton as MTIconButton,
  Avatar as MTAvatar,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Chip,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
  Badge,
} from "@material-tailwind/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../static/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import { size } from "@material-tailwind/react/types/components/avatar";
import Image from "next/image";
import {
  MdBookmark,
  MdStar,
  MdOutlineSearch,
  MdOutlineNotifications,
} from "react-icons/md";

//
//
export function Button(props: {
  title: string;
  className?: string;
  variant?: any;
  color?: any;
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

export function Input(props: {
  label: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  width?: string | number;
  icon?: ReactNode;
}) {
  return (
    <MTInput
      icon={props.icon}
      width={props.width}
      className={props.className}
      variant="outlined"
      label={props.label}
      crossOrigin={undefined}
      size="lg"
      type={props.label}
    />
  );
}

export function IconButton(props: {
  icon: IconDefinition;
  className?: string;
  color?: string;
}) {
  return (
    <MTIconButton className="bg-transparent">
      <FontAwesomeIcon
        className={props.className}
        color={props.color}
        icon={props.icon}
      />
    </MTIconButton>
  );
}

export function Avatar(props: {
  src: string;
  alt: string;
  className?: string;
  size?: size | undefined;
}) {
  return (
    <MTAvatar
      className={props.className}
      src={props.src}
      alt={props.alt}
      size={props.size}
    />
  );
}
export function CardTemplate() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="absolute z-20 w-fit bottom-0 mb-5 ml-3 text-black bg-white p-2 rounded-xl">
          <p>Cloud Computing</p>
        </div>
        <img
          src="https://i.ytimg.com/vi/9Kvf12FOVW4/maxresdefault.jpg"
          alt="course thumbnail"
          className="-z-10 h-full"
        />
      </CardHeader>

      {/* Title */}
      <CardBody>
        <Typography variant="h5">
          AWS full course for Absolute Beginners
        </Typography>
      </CardBody>

      {/* descriptions */}
      <CardBody
        className="flex w-full justify-between items-center h-fit p-0 my-0"
        style={{ paddingInline: "5%" }}
      >
        <div className="flex flex-col ">
          <Typography variant="small">by Adobe</Typography>
          <div className="flex">
            <MdStar size={20} color={styles.light.cta} />
            <MdStar size={20} color={styles.light.cta} />
            <MdStar size={20} color={styles.light.cta} />
            <MdStar size={20} color={styles.light.cta} />
            <MdStar size={20} color={styles.light.cta} />
          </div>
        </div>
        <div className="flex flex-col ">
          <Typography variant="small">Duration : 2 weeks</Typography>
          <Typography variant="small">One Video</Typography>
        </div>
      </CardBody>

      {/* Buttons */}
      <CardFooter className="flex w-full justify-center items-center ">
        <MTIconButton color="white">
          <MdBookmark size={35} />
        </MTIconButton>
        <MTButton
          className=""
          style={{ width: "70%", backgroundColor: styles.light.cta }}
        >
          Start Learning
        </MTButton>
      </CardFooter>
    </Card>
  );
}

export function QuickTab(props: { value: string }) {
  return <MTButton style={{ backgroundColor: "gray" }}>{props.value}</MTButton>;
}

export function NotificationPopUP() {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <MTButton size="sm" variant="text">
          <Badge content="5">
            <MdOutlineNotifications
              size={30}
              className="mx-2 rounded-xl hover:bg-gray-400"
            />
          </Badge>
        </MTButton>
      </PopoverHandler>
      <PopoverContent>
        <List>
          <ListItem>Notification One</ListItem>
          <ListItem> Two</ListItem>
        </List>
      </PopoverContent>
    </Popover>
  );
}
