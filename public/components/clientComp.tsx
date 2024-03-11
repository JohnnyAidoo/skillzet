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
  TypographyProps,
  TypographyStylesType,
  InputProps,
  AvatarProps,
  IconButtonProps,
} from "@material-tailwind/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../static/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  ReactNode,
  useState,
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
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth, firebaseStore } from "@/app/backend/firebase";
import { colors } from "@material-tailwind/react/types/generic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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

export function Input(props: InputProps) {
  // @ts-ignore
  return <MTInput {...props} />;
}
export function IconButton(props: IconButtonProps) {
  return (
    // @ts-ignore
    <MTIconButton {...props} className="bg-transparent"></MTIconButton>
  );
}

export function Avatar(props: AvatarProps) {
  // @ts-ignore

  return <MTAvatar {...props} />;
}
export function CardTemplate(props: {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  id: string;
  href: string;
  video_url: string;
  title: string;
  duration: string;
  owner: string;
  type: string;
  category: string;
  rating: number;
}) {
  const [bookmarked, setBookmarked] = useState<boolean>();
  const [alert, setAlert] = useState(<></>);
  useEffect(() => {
    AOS.init();
  });

  //check for bookmark and set icon color
  const checkIfBookmarked = async () => {
    const bookmarkRef = collection(firebaseStore, "Bookmarks");
    const q = query(
      bookmarkRef,
      where("uid", "==", getAuth().currentUser?.uid),
      where("courseID", "==", props.id)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.empty ? setBookmarked(false) : setBookmarked(true);
  };

  //use effect to run check bookmark function
  useEffect(() => {
    checkIfBookmarked();
  }, []);

  const regex = /(?<=\?v=)(.*?)(?=&|$)/;
  const match = regex.exec(props.video_url);
  const videoID = match ? match[0] : null;

  const handleBookmark = async () => {
    try {
      const bookmarkRef = collection(firebaseStore, "Bookmarks");
      const q = query(
        bookmarkRef,
        where("uid", "==", getAuth().currentUser?.uid),
        where("courseID", "==", props.id)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("not marked");
        addDoc(bookmarkRef, {
          uid: getAuth().currentUser?.uid,
          courseID: props.id,
        }).then(() => {
          console.log("now marked");
          checkIfBookmarked();
          setAlert(
            <MTAlert
              className="fixed top-0 z-50"
              variant="filled"
              color="green"
            >
              Item Added to Bookmarks
            </MTAlert>
          );
        });
      } else {
        querySnapshot.forEach((item) => {
          deleteDoc(doc(firebaseStore, "Bookmarks", item.id));
          checkIfBookmarked();
          setAlert(
            <MTAlert className="fixed top-0 z-50" variant="filled" color="red">
              Item Removed to Bookmarks
            </MTAlert>
          );
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (alert != <></>) {
      setTimeout(() => {
        setAlert(<></>);
      }, 3000);
    }
  });

  return (
    <>
      {alert}
      <Card data-aos="fade-up " onClick={props.onClick} className="h-fit">
        {/* card header */}
        <CardHeader>
          <div className="absolute bottom-0 z-20 p-2 mb-5 ml-3 text-black bg-white w-fit rounded-xl">
            <p>{decodeURIComponent(props.category)}</p>
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
          <div className="flex flex-col text-right">
            <Typography variant="small">
              Average Duration : {props.duration} day
            </Typography>
            <Typography variant="small">{props.type}</Typography>
          </div>
        </CardBody>

        {/* Buttons */}
        <CardFooter className="flex items-center justify-between w-full ">
          <MTIconButton color="white" className="shadow-none ">
            <MdBookmark
              onClick={handleBookmark}
              size={35}
              color={bookmarked ? styles.light.cta : "black"}
            />
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
    </>
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

export function Text(props: TypographyProps) {
  // @ts-ignore
  return <Typography {...props} />;
}
export function CourseCategoryCard(props: { title: string; key: string }) {
  return (
    <Link key={props.key} href={`/search/${props.title}`}>
      <Card
        key={props.key}
        className="grid justify-center overflow-hidden text-center text-white"
        style={{ backgroundColor: styles.light.cta }}
      >
        <CardBody className="bg-red-300">
          <Typography>{props.title}</Typography>
        </CardBody>
      </Card>
    </Link>
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
