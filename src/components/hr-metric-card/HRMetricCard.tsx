import "./HRMetricCard";
import { PiUsersThreeThin } from "react-icons/pi";
import "./HRMetricCard.css";
import { IHRMetricCardProps } from "./HRMetricCard.interface";

export const HRMetricCard = (props: IHRMetricCardProps) => {
  const { total, day, icon, period, title, count, color } = props;

  const borderStyle = {
    borderLeft: `6px solid ${color}`,
  };

  return (
    <div className="metric-card" style={borderStyle}>
      <div className="metrics">
        <h6 className="metric-title">{title}</h6>
        <h2 className="metric-nums">
          {count} <span className="slash">/</span>
          {total}
        </h2>
        <p className="metric-time">
          {day} <span className="slash">/</span>
          {period}
        </p>
      </div>
      <div className="icon-bg" style={{ background: color }}>
        {icon}
      </div>
    </div>
  );
};
