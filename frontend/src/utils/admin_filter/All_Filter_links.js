import React from "react";
import { NavLink } from "react-router-dom";

const All_Filter_links = () => {
  return (
    <div>
      <ul className="row" style={{ gap: 5, padding: "10px 0" }}>
        <li className="border-right">
          <NavLink className="xsm-font-size" to={"#"}>
            All (0)
          </NavLink>
        </li>
        <li className="border-right">
          <NavLink className="xsm-font-size" to={"#"}>
            Mine (0)
          </NavLink>
        </li>
        <li className="border-right">
          <NavLink className="xsm-font-size" to={"#"}>
            Pulished (0)
          </NavLink>
        </li>
        <li className="border-right">
          <NavLink className="xsm-font-size" to={"#"}>
            Draft (0)
          </NavLink>
        </li>
        <li>
          <NavLink className="xsm-font-size" to={"#"}>
            Pillar Content (0)
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default All_Filter_links;
