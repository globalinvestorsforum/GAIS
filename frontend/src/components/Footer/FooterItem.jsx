import React from "react";
import { Link } from "react-router-dom";

const FooterItem = ({ category }) => {
  return (
    <div>
      <h6 className="font-bold pb-1 text-neutral-200">{category.title}</h6>
      <ul>
        {category.items.map((item, index) =>
          index === 1 ? (
            <li key={index}>
              <a
                className="text-neutral-300 md:text-[15px] text-sm  hover:text-yellow-600"
                href={item.link}
              >
                {item.text}
              </a>
            </li>
          ) : (
            <li key={index}>
              <Link
                className="text-neutral-300 md:text-[15px] text-sm  hover:text-yellow-600"
                to={item.link}
              >
                {item.text}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterItem;
