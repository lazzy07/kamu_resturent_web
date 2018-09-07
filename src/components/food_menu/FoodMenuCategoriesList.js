import React from "react";
import { HorizontalScrollBar } from "../horizontal_scrollbar/HorizontalScrollBar";
import { AddNewButton } from "../button/AddNewButton";
import { FoodMenuListCategoryCard } from "./list_cards/FoodMenuListCategoryCard";

export const FoodMenuCategoriesList = props => {
  return (
    <HorizontalScrollBar>
      <AddNewButton label="category" />
      <div style={{ margin: "10px", height: "100%" }}>
        <FoodMenuListCategoryCard
          name="My Category 01"
          content={[{ name: "las" }, { name: "las" }, { name: "las" }]}
          rating={1.55}
        />
      </div>
    </HorizontalScrollBar>
  );
};
