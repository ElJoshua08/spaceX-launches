import { Launches } from "@/components/launches";
import { Launch } from "@/interfaces";

export default async function Home() {
  const launches: Launch[] = await fetch('https://api.spacexdata.com/v5/launches').then(res => res.json());

  return (
    <div className="flex flex-col h-screen w-full p-4 items-center justify-start">
      <h1 className="text-6xl font-light">SpaceX Launches</h1>
      {/* All launches */}
      <section>
        <Launches launches={launches} limitPerPage={15} />
      </section>
    </div>
  );
}
