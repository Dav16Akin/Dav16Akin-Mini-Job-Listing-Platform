import Home from "@/components/Home";

export default function Page({
  searchParams,
}: {
  searchParams: { admin?: string; page?: string };
}) {
  return (
    <Home
      isAdmin={searchParams.admin === "true"}
      currentPage={
        Number(searchParams.page) > 0 ? Number(searchParams.page) : 1
      }
    />
  );
}
