import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import { shuffle } from "lodash";
import { useRecoilState } from "recoil";
import {
  playlistIdState,
  playlistState,
} from "../../atoms/playlist/plalistAtom";
import useSpotify from "../../hooks/useSpotify";
import Songs from "../Songs";
const colors = [
  "from-indigo-500",
  "from-red-500",
  "from-yellow-500",
  "from-green-500",
  "from-pink-500",
  "from-purple-500",
  "from-blue-500",
];
const Center = () => {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const spotifyApi = useSpotify();
  const [playlistId] = useRecoilState(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    console.log("Playlist ID", playlistId);

    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => console.log("Something went wrong", err));
  }, [spotifyApi, playlistId, setPlaylist]);
  return (
    <div className="text-black flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center space-x-2 opacity-90 hover:opacity-80 cursor-pointer p-1 pr-2 rounded-full bg-black text-white cursor-pointer"
          onClick={signOut}
        >
          <img
            className="rounded-full h-10 w-10"
            src={
              "https://lh3.googleusercontent.com/ogw/ADea4I7ntPffLGoMTsVO8UPOBrGQYlMyOmlU33POfq7FtA=s83-c-mo"
            }
            alt="user image"
          />
          <h2>Rohik Galli</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0].url} />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>
      <Songs />
    </div>
  );
};

export default Center;
