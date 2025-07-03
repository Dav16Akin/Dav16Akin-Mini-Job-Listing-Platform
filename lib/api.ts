export async function getJobs(currentPage: number = 1, limit: number = 10) {
  try {
    const res = await fetch(`http://localhost:3000/job`, {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const allJobs = await res.json();

    const startIndex = (currentPage - 1) * limit;

    const endIndex = startIndex + limit;

    const data = allJobs.reverse().slice(startIndex, endIndex);

    const isNext = endIndex < allJobs.length;

    return { data, isNext };
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return { data: [], isNext: false };
  }
}

export async function getJobById(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/job?id=${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch job");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching job:", error);
    return [];
  }
}


export async function createJob(jobData: any) {
  try {
    const res = await fetch(`http://localhost:3000/job`);
    const resData = await res.json();
    const jobRes = await fetch(`http://localhost:3000/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...jobData, id: resData.length + 1 }),
    });

    if (!jobRes.ok) {
      throw new Error("Failed to create job");
    }

    const createdJob = await jobRes.json();

    return createdJob
  } catch (error) {
    console.error("Error creating job and details:", error);
    return null;
  }
}
