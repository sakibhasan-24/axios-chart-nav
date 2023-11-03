import React from "react";

export default function NavItems({ item }) {
  return (
    <li className="mr-4 font-bold text-xl p-2 hover:bg-blue-700 hover:text-white px-1">
      <a href={item.path}>{item.name}</a>
    </li>
  );
}
