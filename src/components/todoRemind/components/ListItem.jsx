import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ListItem = ({ items }) => {
  return (
    <div className="mt-8">
      <ul>
        {items.map((item, index) => (
          <div className="flex items-center" key={index}>
            <input type="radio" className="mr-5" checked={item.isDone} />
            <div className="w-6">{item.id}</div>
            <li key={index} className="2-64">
              {item.text}
            </li>
            <Button name="del" className={"ml-3"} />
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
