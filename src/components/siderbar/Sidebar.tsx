import { HiOutlineUserCircle } from "react-icons/hi2";
import { BsDatabase } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { MdOutlineAppRegistration } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiTestTubeThin } from "react-icons/pi";
import { CiMoneyBill } from "react-icons/ci";

import "./Sidebar.css";
import SidebarCard from "../siderbard-card/SidebarCard";

export const Sidebar = () => {
  const dashboards = [
    {
      name: "Patients",
      icon: <HiOutlineUserCircle size={24} className="nav-icon" />,
      link: "",
    },
    {
      name: "HR",
      icon: <BsDatabase size={24} className="nav-icon" />,
      link: "hr",
    },
    {
      name: "Labs",
      icon: <CiFilter size={24} className="nav-icon" />,
      link: "labs",
    },
    {
      name: "Pharma",
      icon: <BsShop size={24} className="nav-icon" />,
      link: "pharma",
    },
  ];

  const processes = [
    {
      name: "Registration",
      icon: <MdOutlineAppRegistration size={24} className="nav-icon" />,
      link: "registration",
    },
    {
      name: "Consultation",
      icon: <MdOutlineLibraryBooks size={24} className="nav-icon" />,
      link: "consultation",
    },
    {
      name: "Tests & Reports",
      icon: <PiTestTubeThin size={24} className="nav-icon" />,
      link: "test-and-report",
    },
    {
      name: "Billing",
      icon: <CiMoneyBill size={24} className="nav-icon" />,
      link: "billing",
    },
  ];

  return (
    <aside>
      <SidebarCard title="Dashboards" navItems={dashboards} />
      <SidebarCard title="Processes" navItems={processes} />
    </aside>
  );
};
