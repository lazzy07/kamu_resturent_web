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
  image: {},
  createdBy: "",
  createdAt: Date.now(),
  rating: 0,
  votes: 0
};

/**
 * @param {String} userName user's name
 * @param {String} type type must be one of the following "foodMenu" "foodCategory" "foodItem"
 */
export const createId = (userName, type) => {
  return userName + "_" + type + "_" + Date.now();
};
