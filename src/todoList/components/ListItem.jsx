import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ListItem = ({ items, delList, onClick }) => {
  return (
    <div className="mt-8">
      <ul>
        {items.map((item, index) => (
          <div className="flex items-center" key={index}>
            <input
              type="radio"
              className="mr-5"
              checked={item.isDone}
              onClick={() => onClick(item.id)}
            />
            <div className="w-6">{index + 1}</div>
            <li key={index} className="2-64">
              {item.text}
            </li>
            <Button
              name="del"
              className={"ml-3"}
              onClick={() => delList(index)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

ListItem.propTypes = {
  items: PropTypes.array.isRequired,
  delList: PropTypes.func.isRequired,
};

export default ListItem;
