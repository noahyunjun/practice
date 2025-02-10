import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ items }) => {
  return (
    <div className="mt-8">
      <ul>
        {items.map((item, index) => (
          <div className="flex">
            <div className="w-6">{item.id}</div>
            <li key={index} className="2-64">
              {item.text}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

ListItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListItem;
