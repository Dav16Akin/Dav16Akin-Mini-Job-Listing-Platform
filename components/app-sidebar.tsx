import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ArrowLeft, List, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const items = [
  {
    title: "Create new job",
    url: "/admin",
    icon: Plus,
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pb-2 border-b font-semibold rounded-none text-2xl tracking-tight first:mt-0">Admin Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="list-none ">
                  <SidebarMenuButton asChild className=" bg-foreground text-background rounded-sm">
                    <Link href={item.url} className="flex items-center gap-4">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Link href="/">
          <Button className="w-full" variant="outline">
            Back Home
            <ArrowLeft />
          </Button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
