import Link from "next/link";
import LandingPage from "../component/layout/LandingPage";

export default function bootcamp() {
  return <div>
    <LandingPage>
      <h1>
        Bootcamp Page</h1>
      <Link href={`/bootcamp/mode`}>mode</Link>
    </LandingPage>
  </div>;
}
