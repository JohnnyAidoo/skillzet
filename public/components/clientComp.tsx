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
  Alert as MTAlert,
  Textarea,
} from "@material-tailwind/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../static/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  ReactNode,
} from "react";
import { size } from "@material-tailwind/react/types/components/avatar";
import {
  MdBookmark,
  MdStar,
  MdOutlineSearch,
  MdOutlineNotifications,
  MdOutlineArrowBackIos,
  MdOutlineArrowBack,
} from "react-icons/md";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "@/app/backend/firebase";
import { colors } from "@material-tailwind/react/types/generic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//
//
export function Button(props: {
  title: string;
  className?: string;
  variant?: any;
  color?: any;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: any;
}) {
  return (
    <MTButton
      type={props.type}
      className={props.className}
      value={props.title}
      variant={props.variant}
      size="md"
      color={props.color}
      style={{ backgroundColor: styles.light.cta }}
      onClick={props.onClick}
    >
      {props.icon}
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
  name?: string;
  value?: string | number | readonly string[] | undefined;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}) {
  return (
    <MTInput
      onClick={props.onClick}
      icon={props.icon}
      width={props.width}
      className={props.className}
      variant="outlined"
      label={props.label}
      crossOrigin={undefined}
      size="lg"
      type={props.label}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
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
export function CardTemplate(props: {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  href: string;
  video_url: string;
  title: string;
  duration: string;
  owner: string;
  type: string;
  category: string;
  rating: number;
}) {
  useEffect(() => {
    AOS.init();
  });
  const regex = /(?<=\?v=)(.*?)(?=&|$)/;
  const match = regex.exec(props.video_url);
  const videoID = match ? match[0] : null;

  return (
    <Card data-aos="fade-up " onClick={props.onClick} className="h-fit">
      <CardHeader>
        <div className="absolute bottom-0 z-20 p-2 mb-5 ml-3 text-black bg-white w-fit rounded-xl">
          <p>{props.category}</p>
        </div>
        <img
          src={`https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
          alt="course thumbnail"
          className="h-full -z-10"
        />
      </CardHeader>

      {/* Title */}
      <CardBody>
        <Typography variant="h5">{props.title}</Typography>
      </CardBody>

      {/* descriptions */}
      <CardBody
        className="flex items-center justify-between w-full p-0 my-0 h-fit"
        style={{ paddingInline: "5%" }}
      >
        <div className="flex flex-col ">
          {/* owner */}
          <Typography variant="small">{props.owner}</Typography>

          {/* rating */}
          <div className="flex">
            {Array.from({ length: props.rating }, (_, index) => (
              <div>
                <MdStar key={index} size={25} color={styles.light.cta} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col ">
          <Typography variant="small">Duration : {props.duration}</Typography>
          <Typography variant="small">{props.type}</Typography>
        </div>
      </CardBody>

      {/* Buttons */}
      <CardFooter className="flex items-center justify-between w-full ">
        <MTIconButton color="white">
          <MdBookmark size={35} />
        </MTIconButton>
        <Link href={`${props.href}`} className="w-3/4">
          <MTButton
            className="w-full"
            style={{ backgroundColor: styles.light.cta }}
          >
            Start Learning
          </MTButton>
        </Link>
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

export function Alert(props: {
  children: ReactNode;
  color: colors | undefined;
}) {
  return (
    <MTAlert className="absolute top-0 z-10 text-center" color={props.color}>
      {props.children}
    </MTAlert>
  );
}

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};
export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

// very custom
export const Backbutton = ({}) => {
  const router = useRouter();

  return (
    <MdOutlineArrowBack
      className="hover:bg-gray-600"
      size={30}
      color="grey"
      onClick={() => {
        router.back();
      }}
    />
  );
};
