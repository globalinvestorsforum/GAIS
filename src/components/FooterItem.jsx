import React from "react";

const FooterItem = ({ category }) => {
  return (
    <div>
      <h6 className="font-bold pb-1 text-neutral-200">{category.title}</h6>
      <ul>
      {category.items.map((item, index) => (
          <li key={index}>
            <a className="text-neutral-300 hover:font-semibold " href={item.link}>{item.text} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
