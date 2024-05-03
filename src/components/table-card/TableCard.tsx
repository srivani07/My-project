import { ITableCardProps } from "./TableCard.interface";
import { HiOutlineArrowDown } from "react-icons/hi";
import { LuRedo2 } from "react-icons/lu";
import "./TableCard.css";

export const TableCard = (props: ITableCardProps) => {
  const { title, tableData } = props;
  return (
    <div className="table-card">
      <div className="table-top">
        <h4 className="table-title">{title}</h4>
        <div className="arrow-block">
          <div className="redo-icon arrow-icon">
            <LuRedo2 />
          </div>
          <div className="down-arrow-icon arrow-icon">
            <HiOutlineArrowDown />
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>PATIENT COUNT</th>
            <th>LABS</th>
            <th>DIET PLANS</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.patientCount}</td>
              <td>{data.labs}</td>
              <td>{data.dietPlan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
