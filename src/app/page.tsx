import { SelectSuperpowerForm } from "@/components/ui/select-superpower-form";
import { ModeToggle } from "../components/ui/theme-toggle";
import { BlondFly, FastBoy, FlyingGirl, StrongGirl, SuperBoy, TheButtonHolder } from "@/components/ui/superheroes-svgs";


export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen">
        <div className="fixed">
          <ModeToggle />
        </div>


        <div className="absolute top-22 sm:left-3/4 left-1/2 -z-50 animate-in duration-500">
          <FlyingGirl />
        </div>

        <div className="absolute bottom-0 right-3/4 -z-50">
          <FastBoy />
        </div>
        <div className="absolute hidden sm:inline-block bottom-0 right-10/12 -z-50">
          <StrongGirl />
        </div>
        <div className="absolute bottom-0 right-1/4 -z-50">
          <SuperBoy />
        </div>

        <div className="absolute top-1/7 left-1/12 -z-50">
          <BlondFly width="100" />
        </div>
        <div className="absolute hidden sm:inline-block  bottom-0 left-5/6 -z-50">
          <TheButtonHolder />
        </div>

        <SelectSuperpowerForm />

      </div>
    </main >
  );
}

