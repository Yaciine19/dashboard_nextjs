import AnaylticsChart from "@/components/dashboard/AnaylticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

const Cards = [
  {
    title: "Posts",
    count: 100,
    icon: <Newspaper className="text-slate-500" size={72} />
  },
  {
    title: "Categories",
    count: 12,
    icon: <Folder className="text-slate-500" size={72} />
  },
  {
    title: "Users",
    count: 750,
    icon: <User className="text-slate-500" size={72} />
  },
  {
    title: "Comments",
    count: 1200,
    icon: <MessageCircle className="text-slate-500" size={72} />
  },
]

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        {Cards.map((card, index) => <DashboardCard
        key={index}
          title={card.title}
          count={card.count}
          icon={card.icon}
        />)}
      </div>
      <AnaylticsChart />
      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
