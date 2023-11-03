import React, { useState } from "react";
import NavItems from "./NavItems";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
export default function Navbar() {
  const routes = [
    { name: "Home", path: "/", id: 1 },
    { name: "About Us", path: "/about", id: 2 },
    { name: "Services", path: "/services", id: 3 },
    { name: "Contact Us", path: "/contact", id: 4 },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="md:hidden lg:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>

      <nav
        className={`bg-purple-500 absolute md:static duration-1000 w-4/5  mx-20    ${
          open ? "top-8" : " -top-72"
        }     rounded-lg`}
      >
        <ul className=" md:flex  gap-2 flex-col md:flex-row lg-flex-row   ">
          {routes.map((item) => (
            <NavItems key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
