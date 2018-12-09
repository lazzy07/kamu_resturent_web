import React from "react";
import FoodMenuCard from "./card/FoodMenuCard";
import FoodCategoryCard from "./card/FoodCategoryCard";

export const foodMenu_init = {
  id: "",
  type: "menu",
  name: "New Menu",
  createdBy: "",
  parent: "",
  createdAt: Date.now(),
  content: []
};

export const foodCategory_init = {
  id: "",
  type: "category",
  name: "New Category",
  parent: "",
  createdBy: "",
  createdAt: Date.now(),
  content: []
};

export const foodItem_init = {
  id: "",
  type: "item",
  name: "New Item",
  parent: "",
  description: "",
  image: null,
  price: 0,
  createdBy: "",
  createdAt: Date.now(),
  rating: {
    rating: 0,
    total: 0,
    stars: {
      stars5: 0,
      stars4: 0,
      stars3: 0,
      stars2: 0,
      stars1: 0
    }
  },
  votes: 0
};

/**
 * @param {String} userName user's name
 * @param {String} type type must be one of the following "foodMenu" "foodCategory" "foodItem"
 */
export const createId = (userName, type) => {
  return userName + "_" + type + "_" + Date.now();
};

/**
 * Render prices array to calculate price range
 * @param {array} content content of a category or a menu
 * @returns {array} array with prices
 */
export const getPriceArray = content => {
  let prices = [];
  if (content) {
    for (let i = 0; i < content.length; i++) {
      if (content[i].type === "item") {
        prices.push(content[i].price);
      } else if (content[i].type === "category") {
        prices.push(this.getPriceArray(content[i].content));
      }
    }
  }
  return prices;
};

/**
 * Rendering items data
 * @param {array} itemsArr array (content) of a "category" or a "menu"
 */
export const renderFoodMenuData = itemsArr => {
  if (itemsArr) {
    return itemsArr.map(item => {
      if (item.type === "item") {
        return <FoodMenuCard key={item.id} />;
      } else if (item.type === "category") {
        return <FoodCategoryCard key={item.id} />;
      } else {
        return null;
      }
    });
  } else {
    return null;
  }
};
