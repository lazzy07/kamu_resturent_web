import React from "react";
import { HorizontalScrollBar } from "../horizontal_scrollbar/HorizontalScrollBar";
import { AddNewButton } from "../button/AddNewButton";
import { FoodMenuListItemCard } from "./list_cards/FoodMenuListItemCard";

export const FoodMenuItemsList = props => {
  return (
    <HorizontalScrollBar>
      <AddNewButton label="item" />
      <div style={{ margin: "10px", height: "100%" }}>
        <FoodMenuListItemCard
          setEditor={props.setEditor}
          name="My Item 01"
          image="/dependencies/pics/egg.jpg"
          price={1000}
          rating={4.55}
        />
      </div>
    </HorizontalScrollBar>
  );
};
