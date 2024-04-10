import React from "react";

const FooterItem = ({ category }) => {
  return (
    <div>
      <h6 className="font-bold pb-1">{category.title}</h6>
      <ul>
      {category.items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
