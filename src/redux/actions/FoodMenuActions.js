import { db } from "../../firebase/firebase";
import {
  foodMenu_init,
  foodCategory_init,
  foodItem_init,
  createId
} from "../../components/food_menu/FoodMenuGetData";
//Food Menu Action Dispatchers
export const LOAD_FOOD_MENUS = "LOAD_FOOD_MENUS";
export const LOAD_FOOD_CATEGORIES = "LOAD_FOOD_CATEGORIES";
export const LOAD_FOOD_ITEMS = "LOAD_FOOD_ITEMS";

export const CHANGE_FOOD_MENU = "CHANGE_FOOD_MENU";
export const CHANGE_FOOD_CATEGORY = "CHANGE_FOOD_CATEGORY";
export const CHANGE_FOOD_ITEM = "CHANGE_FOOD_ITEM";

//Food Menu Actions
/**
 * Loading Food Menus
 */
export const loadFoodMenus = () => {
  return (dispatch, state) => {
    db.collection("foodMenus")
      .where("createdBy", "==", state().user.userName)
      .onSnapshot(docs => {
        if (docs.size !== 0) {
          let docArr = [];
          docs.forEach(doc => {
            docArr.push(doc);
          });
          dispatch({
            type: LOAD_FOOD_MENUS,
            payload: docArr
          });
        }
      });
  };
};

/**
 * Load food categories
 */
export const loadFoodCategories = () => {
  return (dispatch, state) => {
    db.collection("foodCategories")
      .where("createdBy", "==", state().user.userName)
      .onSnapshot(docs => {
        if (docs.size !== 0) {
          let docArr = [];
          docs.forEach(doc => {
            docArr.push(doc);
          });
          dispatch({
            type: LOAD_FOOD_CATEGORIES,
            payload: docArr
          });
        }
      });
  };
};

/**
 * Load food Items
 */
export const loadFoodItems = () => {
  return (dispatch, state) => {
    db.collection("foodItems")
      .where("createdBy", "==", state().user.userName)
      .onSnapshot(docs => {
        if (docs.size !== 0) {
          let docArr = [];
          docs.forEach(doc => {
            docArr.push(doc);
          });
          dispatch({
            type: LOAD_FOOD_ITEMS,
            payload: docArr
          });
        }
      });
  };
};

/**
 * Create new food menu
 */
export const createFoodMenu = () => {
  return (dispatch, state) => {
    let data = foodMenu_init;
    data.createdBy = state().user.userName;
    data.id = createId(state().user.userName, "foodMenu");
    db.collection("foodMenus")
      .doc(data.id)
      .set(data);
  };
};

/**
 * Create new food category
 */
export const createFoodCategory = () => {
  return (dispatch, state) => {
    let data = foodCategory_init;
    data.createdBy = state().user.userName;
    data.id = createId(state().user.userName, "foodCategory");
    db.collection("foodCategories")
      .doc(data.id)
      .set(data);
  };
};

/**
 * Create new food item on firebase
 */
export const createFoodItem = () => {
  return (dispatch, state) => {
    let data = foodItem_init;
    data.createdBy = state().user.userName;
    data.id = createId(state().user.userName, "foodItem");
    db.collection("foodItems")
      .doc(state().user.userName)
      .set(data);
  };
};

/**
 * Change food menu on firebase action
 * @param {Object} data changed food menu
 */
export const changeFoodMenu = data => {
  return {
    type: CHANGE_FOOD_MENU,
    payload: data
  };
};

/**
 * Change food category on firebase action
 * @param {Object} data changed food category
 */
export const changeFoodCategory = data => {
  return {
    type: CHANGE_FOOD_CATEGORY,
    payload: data
  };
};

/**
 * Change food item on firebase action
 * @param {Object} data changed food Item
 */
export const changeFoodItem = data => {
  return {
    type: CHANGE_FOOD_ITEM,
    payload: data
  };
};

/**
 * Save foodMenu on firebase, since we are listning to updates, store will automatically get changes
 * @param {String} id id of the foodMenu eg - userName_foodMenu_date.now
 */
export const saveFoodMenu = id => {
  return (dispatch, state) => {
    db.collection("foodMenus/" + state().user.userName)
      .doc(id)
      .set(state().foodMenuState.foodMenus[id]);
  };
};

/**
 * Save foodCategory on firebase, since we are listning to updates, store will automatically get changes
 * @param {String} id id of the foodCategory eg - userName_foodCategory_date.now
 */
export const saveFoodCategory = id => {
  return (dispatch, state) => {
    db.collection("foodCategories")
      .doc(id)
      .set(state().foodMenuState.foodCategories[id]);
  };
};

/**
 * Save foodItem on firebase, since we are listning to updates, store will automatically get updated
 * @param {String} id id of the foodItem eg - userName_foodItem_date.now
 */
export const saveFoodItem = id => {
  return (dispatch, state) => {
    db.collection("foodItems")
      .doc(id)
      .set(state().foodMenuState.foodItems[id]);
  };
};
