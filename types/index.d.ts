declare type JobCardProps = {
  id: number;
  title: string;
  companyName: string;
  locationType: string;
  salaryRange: string;
};


declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
