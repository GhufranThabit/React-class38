import React from "react";
import categories from "../fake-data/all-categories";

const Categories = ({ handelCategorySelect }) => {
  return (
    <div className="btn_area">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            key={category}
            onClick={() => handelCategorySelect(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
