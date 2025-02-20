import { SuperpowerForm } from "./ui/superpower-form";
import { ModeToggle } from "./ui/theme-toggle";

export default function Home() {


  return (
    <main>
      <div>
        <ModeToggle />
        <SuperpowerForm />
      </div>
    </main>
  );
}
