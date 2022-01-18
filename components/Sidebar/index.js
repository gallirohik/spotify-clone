import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  DocumentSearchIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useSpotify from "../../hooks/useSpotify";
import { playlistIdState } from "../../atoms/playlist/plalistAtom";
function Sidebar() {
  const { data: sesssion, status } = useSession();
  const spotifyApi = useSpotify();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [sesssion, spotifyApi]);
  const handlePlaylistClick = (id) => {
    setPlaylistId(id);
  };
  return (
    <nav className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex">
      <div className="space-y-4">
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
        <div className="flex flex-col items-start p-2">
          {playlists.map((playlist, i) => (
            <button
              key={playlist.id}
              onClick={() => handlePlaylistClick(playlist.id)}
            >
              <p className="cursor-pointer hover:text-white">{playlist.name}</p>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
