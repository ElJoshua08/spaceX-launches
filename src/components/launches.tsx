import { Launch } from '@/interfaces';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { format } from 'date-fns';
import Image from 'next/image';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

export const Launches = ({
  launches,
  limitPerPage,
}: {
  launches: Launch[];
  limitPerPage: number;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {launches.map((launch) => (
        <LaunchCard
          key={launch.id}
          launch={launch}
        />
      ))}
    </div>
  );
};

const LaunchCard = ({ launch }: { launch: Launch }) => {
  return (
    <Card className='flex flex-col'>
      <CardHeader className="flex flex-row gap-2 items-center justify-start">
        {launch.links.patch.small && (
          <Image
            src={launch.links.patch.small}
            alt="Patch"
            width={256}
            height={256}
            className="rounded-full size-12 object-cover"
          />
        )}
        <div className="flex flex-col">
          <CardTitle className="text-xl">{launch.name}</CardTitle>
          <CardDescription>
            {format(launch.date_local, 'LLLL d, yyyy')}
          </CardDescription>
        </div>
      </CardHeader>
      <Separator className='mb-4' />
      <CardContent className="grow overflow-hidden max-h-16">
        <CardDescription className={cn("max-w-[45ch] text-ellipsis", {"text-primary/75": !launch.details})}>
          {launch.details ? launch.details : 'No details available'}
        </CardDescription>
      </CardContent>
      <CardFooter className="grow justify-end py-5">
        <Button>View Launch In Details</Button>
      </CardFooter>
    </Card>
  );
};
