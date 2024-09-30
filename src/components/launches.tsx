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
import { Badge } from './ui/badge';

export const Launches = ({
  launches,
  limitPerPage,
}: {
  launches: Launch[];
  limitPerPage: number;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
    <Card className="flex flex-col">
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
        <div className="flex flex-col justify-start items-start p-0 !mt-0">
          <CardTitle className="text-xl">{launch.name}</CardTitle>
          <CardDescription>
            {format(launch.date_local, 'LLLL d, yyyy')}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grow">
        <Separator className="mb-4" />
        <CardDescription
          className={cn('h-[2lh] text-ellipsis text-base overflow-hidden', {
            'text-primary/75': !launch.details,
          })}
        >
          {launch.details ? launch.details : 'No description available'}
        </CardDescription>
      </CardContent>
      <CardFooter className="grow justify-between px-3 py-5 items-end">
        <Badge
          variant="outline"
          className={cn('text-sm font-extralight rounded-xl', {
            'text-green-500 border-green-500/50': launch.success,
            'text-red-500 border-red-500/50': !launch.success,
          })}
        >
          {launch.success ? 'Success' : 'Failure'}
        </Badge>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
};
