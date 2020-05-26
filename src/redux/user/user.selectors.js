import { createSelector } from "reselect";

const selectUser = state => state.user;

const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
    [selectUser], ///No es necesario pasar los argumentos en un array, podemos pasar los argumentos que necesitemos en orden, sin tener que estar dentro de un array
    user => user.currentUser
)