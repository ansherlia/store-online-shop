import DashboardPage from "@/components/templates/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/signin");
  console.log(session);
  return <DashboardPage email={session.user.email} />;
}

export default Dashboard;
