import { useRecoilValue } from "recoil";
import { playlistState } from "../../atoms/playlist/plalistAtom";
import Song from "../Song";
function Songs() {
  const playlist = useRecoilValue(playlistState);
  console.log(playlist);
  return (
    <div className="px-8 flex flex-col pb-28 space-y-1 text-white ">
      {playlist?.tracks?.items.map((track, index) => (
        <Song key={track.track.id} track={track} order={index + 1} />
      ))}
    </div>
  );
}

export default Songs;
