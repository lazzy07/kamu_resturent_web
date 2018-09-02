import React from "react";
import { HorizontalScrollBar } from "../horizontal_scrollbar/HorizontalScrollBar";
import { AddNewButton } from "../button/AddNewButton";

export const FoodMenuItemsList = props => {
  return (
    <HorizontalScrollBar>
      <AddNewButton label="item" />
    </HorizontalScrollBar>
  );
};
