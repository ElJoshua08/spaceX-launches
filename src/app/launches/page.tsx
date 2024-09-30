import { Launches } from "@/components/launches";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Launch } from "@/interfaces";

export default async function LaunchesPage() {
  const launches: Launch[] = await fetch('https://api.spacexdata.com/v5/launches').then(res => res.json());

  return (
    <main className="flex flex-col w-full h-full px-4 py-1 items-center justify-start">
      {/* All launches */}
      <ScrollArea className="pr-3 h-[calc(100vh-103px)] w-full overflow-y-auto">
        <Launches launches={launches} limitPerPage={15} />
      </ScrollArea>
    </main>
  );
}
