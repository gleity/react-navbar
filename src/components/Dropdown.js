
import MenuItem from "./MenuItem";

export default function Dropdown({subMenu, isActive, depth}){
    const currentDepth = depth + 1;
    const depthClass = currentDepth >= 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${depthClass} ${isActive ? "show" : ""}`}>
          {subMenu.map((subMenuItem, index) => (
            <MenuItem item={subMenuItem} key={index} depth={currentDepth}></MenuItem>
          ))}
        </ul>
      );
};