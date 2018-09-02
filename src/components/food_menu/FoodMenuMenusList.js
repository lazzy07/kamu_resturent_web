import React from "react";
import { HorizontalScrollBar } from "../horizontal_scrollbar/HorizontalScrollBar";
import { AddNewButton } from "../button/AddNewButton";

export const FoodMenuMenusList = props => {
  return (
    <HorizontalScrollBar>
      <AddNewButton label="menu" />
    </HorizontalScrollBar>
  );
};
