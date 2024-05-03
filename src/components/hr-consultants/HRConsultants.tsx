import { CiMoneyBill } from "react-icons/ci";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { PiUsersThreeThin } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { Filters } from "../filters/Filters";
import { HRMetricCard } from "../hr-metric-card/HRMetricCard";
import { TableCard } from "../table-card/TableCard";
import "./HRConsultants.css";
import { Outlet } from "react-router-dom";

export const HRConsultants = () => {
  const metrics = [
    {
      title: "Consultant Count",
      count: 90,
      total: 900,
      day: "Today",
      period: "Period",
      icon: <PiUsersThreeThin />,
      color: "#ffffe6",
    },
    {
      title: "Consultations",
      count: 11,
      total: 25,
      day: "Today",
      period: "Period",
      icon: <TbReportAnalytics />,
      color: "#e6f7ff",
    },
    {
      title: "Labs",
      count: 25,
      total: 560,
      day: "Today",
      period: "Period",
      icon: <CiMoneyBill />,
      color: "#e6ffe6",
    },
    {
      title: "Diet Plans",
      count: 25,
      total: 250,
      day: "Today",
      period: "Period",
      icon: <FaMoneyCheckDollar />,
      color: "#f5e6ff",
    },
  ];

  const tableData = [
    {
      name: "John",
      patientCount: 12,
      labs: 3,
      dietPlan: 6,
    },
    {
      name: "Alice",
      patientCount: 8,
      labs: 1,
      dietPlan: 4,
    },
    {
      name: "Michael",
      patientCount: 15,
      labs: 5,
      dietPlan: 9,
    },
    {
      name: "Emily",
      patientCount: 20,
      labs: 2,
      dietPlan: 7,
    },
    {
      name: "David",
      patientCount: 10,
      labs: 4,
      dietPlan: 8,
    },
    {
      name: "Sophia",
      patientCount: 18,
      labs: 3,
      dietPlan: 5,
    },
    {
      name: "Olivia",
      patientCount: 14,
      labs: 2,
      dietPlan: 6,
    },
    {
      name: "James",
      patientCount: 11,
      labs: 1,
      dietPlan: 3,
    },
    {
      name: "Emma",
      patientCount: 16,
      labs: 3,
      dietPlan: 7,
    },
    {
      name: "Alexander",
      patientCount: 9,
      labs: 2,
      dietPlan: 5,
    },
  ];

  return (
    <>
      <Filters />

      <div className="metric-cards">
        {metrics.map((metric, index) => (
          <HRMetricCard
            key={index}
            title={metric.title}
            total={metric.total}
            count={metric.count}
            day={metric.day}
            period={metric.period}
            icon={metric.icon}
            color={metric.color}
          />
        ))}
      </div>
      <TableCard title="Consultants" tableData={tableData} />
      <Outlet />
    </>
  );
};
