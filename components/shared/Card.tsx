import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Card = ({
  id,
  title,
  companyName,
  locationType,
  salaryRange,
}: JobCardProps) => {
  return (
    <div className="flex flex-col border hover:card-hover">
      <div className="border-b">
        <Image
          src="/assets/images/vacant.jpg"
          alt="vacant job image"
          width={1000}
          height={1000}
          className="object-cover h-72"
        />
      </div>
      <div className="space-y-4 p-8 relative">
        <h1>{title}</h1>
        <h2>{companyName}</h2>
        <Badge variant="outline" className="rounded-full border-dashed px-4">
          <p>{locationType}</p>
        </Badge>
        <h3>{salaryRange}</h3>

        <Link href={`jobs/${id}`}>
          <div className="lg:absolute lg:bottom-11 lg:right-8">
            <Button>
              View details <ArrowUpRight />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
