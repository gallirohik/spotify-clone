import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  DocumentSearchIcon,
  CashIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import useSpotify from "../../hooks/useSpotify";
function Sidebar() {
  const { data: sesssion, status } = useSession();
  const spotifyApi = useSpotify();
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        console.log(data);
        setPlaylists(data.body.items);
      });
    }
  }, [sesssion, spotifyApi]);
  return (
    <nav className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={(_) => signOut()}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Log out</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <ScaleIcon className="h-5 w-5" />
          <p>Counter</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Products</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <DocumentSearchIcon className="h-5 w-5" />
          <p>Reports</p>
        </button>
        <hr className="border-t-2 border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p> Category</p>
        </button>
        <hr className="border-t-2 border-gray-900" />
        {/* Categories list */}
        {playlists.map((playlist, i) => (
          <p key={playlist.id} className="cursor-pointer hover:text-white">
            {playlist.name}
          </p>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
