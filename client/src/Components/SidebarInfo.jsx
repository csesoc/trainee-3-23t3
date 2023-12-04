// Contains Title 
// Contains Link
// Contains Icon 
import { BiHome, BiSolidPlaylist } from "react-icons/bi"
import { FaUserFriends } from "react-icons/fa"
import { IoMdCreate } from "react-icons/io"


export const SidebarInfo = [
  {
    title: "Home",
    icon: <BiHome></BiHome>,
    link: "/",
  },
  {
    title: "Playlist Generator",
    icon: <IoMdCreate></IoMdCreate>,
    link: "/generator"
  },
  {
    title: "Your Playlists",
    icon: <BiSolidPlaylist></BiSolidPlaylist>,
    link: "/playlist"
  },
  {
    title: "Friends",
    icon: <FaUserFriends></FaUserFriends>,
    link: "/friends"
  },

]
