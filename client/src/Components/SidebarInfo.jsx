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
    link: "/home",
  },
  {
    title: "Playlist Generator",
    icon: <IoMdCreate></IoMdCreate>,
    link: "/generate"
  },
  {
    title: "Your Playlists",
    icon: <BiSolidPlaylist></BiSolidPlaylist>,
    link: "/playlists"
  },
  {
    title: "Friends",
    icon: <FaUserFriends></FaUserFriends>,
    link: "/friends"
  },

]
