import { ISidebarCardProp } from "./SiderbarCard.interface";
import { SidebarCardItem } from "../sidebar-card-item/SidebarCardItem";
import "./SidebarCard.css";

export default function SidebarCard(props: ISidebarCardProp) {
  const { title, navItems } = props;

  return (
    <section className="nav">
      <h6 className="nav-title">{title}</h6>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <SidebarCardItem
            key={index}
            name={item.name}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </ul>
    </section>
  );
}
