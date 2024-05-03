import { NavLink } from "react-router-dom";
import { PiUsersThreeLight } from "react-icons/pi";

import "./Tabs.css";

export const Tabs = () => {
  return (
    <section className="tabs-block">
      <ul>
        <li className="tab-link">
          <NavLink to="consultants">
            <PiUsersThreeLight />
            <span className="tab-title">Consultants</span> 
          </NavLink>
        </li>
      </ul>
    </section>
    
  );
};
