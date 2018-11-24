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
