var store = riotux.Store({
  state: {
    products_api: [
      {
        id: "1",
        name: "Computer",
        price: "$99,99",
      },
      {
        id: "2",
        name: "Notebook",
        price: "$119,90",
      },
      {
        id: "3",
    
        name: "Computer Dell",
        price: "$929,99",
      },
      {
        id: "4",
        name: "Macbook",
        price: "$9999",
      }
  ], 
  products_cart: []  
  },
  mutations: {
    ADD_ON_CART: function ( state, product ) {
      state.products_cart.push(product);
    },
    REMOVE_PRODUCT: function ( state, product ) {
      var index = state.products_cart.indexOf(product);
      state.products_cart.splice(index, 1);
    }
  }
});