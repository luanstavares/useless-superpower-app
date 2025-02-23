import { SelectSuperpowerForm } from "@/components/ui/select-superpower-form";
import { ModeToggle } from "../components/ui/theme-toggle";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen">
        <div className="fixed w-screen">
          <ModeToggle />
        </div>


        <SelectSuperpowerForm />

      </div>
    </main>
  );
}

