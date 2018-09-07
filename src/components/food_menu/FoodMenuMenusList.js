import React from "react";
import { HorizontalScrollBar } from "../horizontal_scrollbar/HorizontalScrollBar";
import { AddNewButton } from "../button/AddNewButton";
import { FoodMenuListMenuCard } from "./list_cards/FoodMenuListMenuCard";

export const FoodMenuMenusList = props => {
  return (
    <HorizontalScrollBar>
      <AddNewButton label="menu" />
      <div style={{ margin: "10px", height: "100%" }}>
        <FoodMenuListMenuCard name="My Menu 01" rating={5} price={4000} />
      </div>
    </HorizontalScrollBar>
  );
};
