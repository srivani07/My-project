import { NavLink } from "react-router-dom";
import { INavItem } from "../siderbard-card/SiderbarCard.interface";
import "./SidebarCardItem.css";

export const SidebarCardItem = (props: INavItem) => {
    const { name, icon, link} = props;
  return (
    <li className="nav-link">
    <NavLink to={link}>
      {icon}
      <span className="name">{name}</span>
    </NavLink>
  </li>
  )
}
