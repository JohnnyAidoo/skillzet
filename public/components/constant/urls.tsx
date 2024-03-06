import {
  MdOutlineBookmarks,
  MdOutlineHome,
  MdOutlineSearch,
  MdOutlineSettings,
} from "react-icons/md";

export const nav_links = [
  {
    label: "Home",
    url: "/home",
    icon: <MdOutlineHome className="w-5 h-5" />,
  },
  {
    label: "Bookmarks",
    url: "/bookmarks",
    icon: <MdOutlineBookmarks className="w-5 h-5" />,
  },
  {
    label: "Search",
    url: "/search",
    icon: <MdOutlineSearch className="w-5 h-5" />,
  },
  {
    label: "Settings",
    url: "/settings",
    icon: <MdOutlineSettings className="w-5 h-5" />,
  },
];
