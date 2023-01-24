import LandingPage from "../component/layout/LandingPage";
import SlideTop from "./SlideTop";
import SlideBot from "./SlideBot";
import MainItems from "./MainItems";
import Kartus from "./Kartus";
import { OfficeBuildingIcon } from "@heroicons/react/solid";

export default function bootcamp() {
  return (
    <div>
      <LandingPage>
        <SlideTop />
        <MainItems />
        <SlideBot />
      </LandingPage>
    </div>
  );
}
