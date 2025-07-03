"use client";

import { useEffect, useMemo, useState } from "react";
import { getJobs } from "@/lib/api";
import Card from "@/components/shared/Card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import PasskeyModal from "@/components/PasskeyModal";
import Link from "next/link";

export default function Home({ isAdmin, currentPage }: { isAdmin: boolean ; currentPage: number}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState<any[]>([]);
  const [isNext, setIsNext] = useState(false);

  const limit = 10;

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await getJobs(currentPage, limit);
      const jobData = Array.isArray(response) ? response : response.data || [];
      setJobs(jobData);
      setIsNext(Array.isArray(response) ? false : response.isNext || false);
    };

    fetchJobs();
  }, [currentPage]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.locationType.toLowerCase().includes(searchTerm.toLowerCase)
    );
  }, [searchTerm, jobs]);

  return (
    <>
      {isAdmin && <PasskeyModal />}
      <div className="justify-between gap-4 px-8 py-2 flex m-6 items-center border">
        <SearchIcon className="text-gray-500" />
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-0 focus-visible:ring-0"
        />
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8">
        {filteredJobs.map((job) => (
          <Card key={job.id} {...job} />
        ))}
      </div>

      <div className="flex justify-center gap-4 py-8">
        {currentPage > 1 && (
          <Link href={`/?page=${currentPage - 1}`}>
            <Button className="px-4 py-2  rounded">Previous</Button>
          </Link>
        )}
        {isNext && (
          <Link href={`/?page=${currentPage + 1}`}>
            <Button className="px-4 py-2  rounded">Next</Button>
          </Link>
        )}
      </div>
    </>
  );
}
