import React from "react";
import { HorizontalScrollBar } from "../horizontal_scrollbar/HorizontalScrollBar";
import { AddNewButton } from "../button/AddNewButton";
import { FoodMenuListMenuCard } from "./list_cards/FoodMenuListMenuCard";

export const FoodMenuMenusList = props => {
  let renderArr = props.data.map(ele => {
    return (
      <div key={ele.id} style={{ margin: "10px", height: "100%" }}>
        <FoodMenuListMenuCard
          id={ele.id}
          setMenuEditor={props.setMenuEditor}
          setEditor={props.setEditor}
          name={ele.name}
          rating={ele.rating}
          price={4000}
        />
      </div>
    );
  });

  return (
    <HorizontalScrollBar>
      <AddNewButton onClick={props.create} label="menu" />
      {renderArr}
    </HorizontalScrollBar>
  );
};
