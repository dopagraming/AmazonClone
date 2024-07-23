export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);

export const initialState = {
  basket: [],
  user: null,
  favorite: [],
  darkTheme: true,
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      localStorage.setItem(
        "basket",
        JSON.stringify({
          basket: [...state.basket, action.item],
        })
      );
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket?.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      newBasket.splice(index, 1);
      localStorage.removeItem("basket");
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    case "ON_LOAD":
      return {
        ...state,
        basket: action.payload,
        favorite: action.payload,
        darkTheme: action.theme,
      };
    case "BUY_NOW":
      return {
        ...state,
        basket: action.payload,
      };
    case "ADD_TO_FAVORITE":
      localStorage.setItem(
        "favorite",
        JSON.stringify({
          favorite: [...state.favorite, action.product],
        })
      );
      return {
        ...state,
        favorite: [...state.favorite, action.product],
      };
    case "REMOVE_FROM_FAVORITE":
      const favoriteIndex = state.favorite?.findIndex(
        (favoriteItem) => favoriteItem.id === action.id
      );
      let newFavorite = [...state.favorite];
      newFavorite.splice(favoriteIndex, 1);
      localStorage.removeItem("favorite");
      localStorage.setItem("favorite", JSON.stringify(newFavorite));
      return {
        ...state,
        favorite: newFavorite,
      };
    case "CHANGE_THEME":
      localStorage.setItem("theme", action.payload);
      return {
        ...state,
        darkTheme: action.payload,
      };
    case "CHANGE_THEME_FROM_LOCAL":
      return {
        ...state,
        darkTheme: action.theme,
      };
    default:
      return state;
  }
};

export default AppReducer;
