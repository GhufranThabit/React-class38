import React from "react";

const Categories = ({ categories, activeBtn, handelCategorySelect }) => {
  return (
    <div className="btn_area">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={activeBtn === category ? "activeBtn" : "btn"}
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
