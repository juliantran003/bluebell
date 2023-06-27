// JSON
import menu from "../json/menu.json";

// Imports
import Link from "next/link";

export default function Menu() {
  return (
    <menu className="menu">
      {menu.map((menu) => {
        return (
          <div className="links">
            <Link href={menu.link}>{menu.title}</Link>
          </div>
        );
      })}
    </menu>
  );
}
