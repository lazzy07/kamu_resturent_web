import React from "react";
import { HorizontalScrollBar } from "../horizontal_scrollbar/HorizontalScrollBar";
import { AddNewButton } from "../button/AddNewButton";
import { FoodMenuListCategoryCard } from "./list_cards/FoodMenuListCategoryCard";

export const FoodMenuCategoriesList = props => {
  let renderArr = props.data.map(elem => {
    return (
      <div key={elem.id} style={{ margin: "10px", height: "100%" }}>
        <FoodMenuListCategoryCard
          id={elem.id}
          categoryList={props.data}
          setEditor={props.setEditor}
          name={elem.name}
          content={[{ name: "las" }, { name: "las" }, { name: "las" }]}
          rating={elem.rating}
        />
      </div>
    );
  });

  return (
    <HorizontalScrollBar>
      <AddNewButton onClick={props.create} label="category" />
      {renderArr}
    </HorizontalScrollBar>
  );
};
