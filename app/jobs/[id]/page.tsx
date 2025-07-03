import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDetails, getJobById } from "@/lib/api";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const data = await getJobById(id);
  const jobData = await getDetails(id);

  const { description, requirements, benefits, howToApply } = jobData[0]
  const { title, companyName, locationType, salaryRange } = data[0]

  return (
    <>
      {/* Job title */}
      <div className="flex lg:flex-row p-6 gap-4 flex-col border justify-between md:p-8 m-8">
        <div className="space-y-2">
          <h1 className="md:text-3xl text-2xl">Job title: {title}</h1>
          <h3>{companyName}</h3>
        </div>
        <div>
          <Badge variant="outline" className="px-8 rounded-full border-dashed">
            <p>{locationType}</p>
          </Badge>
          <p>{salaryRange}</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link href="/">
          <Button variant="outline" className="rounded-none">
            Back to job listings <ArrowLeft />
          </Button>
        </Link>
      </div>

      {/* Job information details */}
      <section className="md:px-32 md:py-8 p-8 space-y-8">
        <div>
          <h2>Description</h2>
          <p>{description}</p>
        </div>

        <div>
          <h2>Requirements</h2>
          <ul>
            {requirements &&
              requirements.map((d: string, index: any) => (
                <li key={index}>{d}</li>
              ))}
          </ul>
        </div>

        <div>
          <h2>Benefits</h2>
          <ul>
            {benefits &&
              benefits.map((d: string, index: any) => <li key={index}>{d}</li>)}
          </ul>
        </div>

        <div>
          <h2>How to apply</h2>
          <p>{howToApply}</p>
        </div>
      </section>
    </>
  );  
}
