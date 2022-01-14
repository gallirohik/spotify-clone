import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { shuffle } from "lodash";
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
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className="text-black flex-grow">
      <header className="absolute top-5 right-8">
        <div
          className={`flex items-center space-x-2 opacity-90 hover:opacity-80 cursor-pointer p-1 pr-2 rounded-full bg-green-500`}
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
      <session
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}
      ></session>
    </div>
  );
};

export default Center;
