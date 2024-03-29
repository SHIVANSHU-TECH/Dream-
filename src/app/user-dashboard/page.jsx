import Sidebar from "@/components/user-sidebar/Sidebar";
import React from "react";
import css from "@/app/user-dashboard/dashboard.module.css";
import Recent from "@/components/user-recent/Recent";
import Transactions from "@/components/DashboardTransactions/Transactions";

const page = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <div className={css.rightSideRecents}>
      <div className={css.recents}>
        <Recent heading="Events" data={8} />
        <Recent heading="Internships" data={10} />
      </div>
      <div className={css.recentTables}>
        <Transactions />
      </div>
      </div>

    </div>
  );
};

export default page;
