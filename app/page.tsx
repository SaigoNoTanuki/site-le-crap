import WelcomeLeCrap from "./ui/homePageLeCrap/welcomeLeCrap";
import BodyLeCrap from "./ui/homePageLeCrap/bodyLeCrap";

export default function HomeLeCrap() {
  return (
    <div >
      <main className="flex items-center justify-center h-screen">
        <WelcomeLeCrap />
        <BodyLeCrap />
      </main>
    </div>
  );
}
