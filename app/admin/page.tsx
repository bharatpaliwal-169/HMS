import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/Admin/utils/StatCard";
import { columns } from "@/components/Admin/table/columns";
import { DataTable } from "@/components/Admin/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { siteData } from "@/constants/SiteData";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-nbg.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">{siteData.adminDash}</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">{siteData.welcomeAdmin}</h1>
          <p className="text-dark-700">
            {siteData.despAdmin}
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;