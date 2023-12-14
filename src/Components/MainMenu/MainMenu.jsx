import sheikBG from "../../assests/Sheik/Sheik_SSBU.png";
import marthBG from "../../assests/Marth/Marth_SSBU.png";
import { Link } from "react-router-dom";
import CharacterIcon from "./CharacterIcon";

export default function MainMenu() {
  return (
    <>
      <div className="flex bg-UFD-bg h-screen pt-5 gap-1">
        <Link to={"/Sheik"}>
          <CharacterIcon name={"Sheik"} img={sheikBG} />
        </Link>
        <Link to={"/Marth"}>
          <CharacterIcon name={"Marth"} img={marthBG} />
        </Link>
      </div>
    </>
  );
}
