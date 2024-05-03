import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { TfiPlus } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";
import avatar from "../../assets/avatar.png";

export const Header = () => {
  return (
    <header>
      <div className="logo"></div>
      <div className="drop-down-with-search-container">
        <div className="drop-down-with-search">
          <select className="global-drop-down">
            <option value="patients">Patients</option>
            <option value="labs">Labs</option>
          </select>
          <input className="global-search" type="text" placeholder="Search" />
          <span>
            <CiSearch />
          </span>
        </div>
        <button className="add-btn">
          <span>
            <TfiPlus />
          </span>
          Add New
        </button>
      </div>
      <div className="notifiction-and-profile-container">
        <div className="notifiction-badge">
          <span className="bell"><FaRegBell size={24} /></span>
          <span className="blip"></span>
        </div>
        <div className="profile">
          
        </div>
      </div>
    </header>
  );
};
