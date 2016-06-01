var actions = riotux.Actions({
  ADD_ON_CART: function ( store, product ) {
    store.dispatch('ADD_ON_CART', product);
  },
  REMOVE_PRODUCT: function ( store, product ) {
    store.dispatch('REMOVE_PRODUCT', product);
  }
});