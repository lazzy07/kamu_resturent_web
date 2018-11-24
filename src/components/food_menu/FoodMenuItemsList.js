import React from "react";
import { HorizontalScrollBar } from "../horizontal_scrollbar/HorizontalScrollBar";
import { AddNewButton } from "../button/AddNewButton";
import { FoodMenuListItemCard } from "./list_cards/FoodMenuListItemCard";

export const FoodMenuItemsList = props => {
  let renderArr = props.data.map(elem => {
    return (
      <div key={elem.id} style={{ margin: "10px", height: "100%" }}>
        <FoodMenuListItemCard
          id={elem.id}
          setMenuEditor={props.setMenuEditor}
          setEditor={props.setEditor}
          name={elem.name}
          image={elem.image}
          price={elem.price}
          rating={elem.rating}
        />
      </div>
    );
  });

  return (
    <HorizontalScrollBar>
      <AddNewButton label="item" onClick={props.create} />
      {renderArr}
    </HorizontalScrollBar>
  );
};
