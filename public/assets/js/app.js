riot.tag2('cart', '<navbar logoname="riotux-cart"></navbar> <products></products> <product-cart></product-cart>', '', '', function(opts) {
});
riot.tag2('navbar', '<nav class="navbar"> <div class="row"> <div class="three columns"> <h4 class="navbar__text"> {opts.logoname}</h4> </div> <div class="nine columns"> <h4 class="navbar__cart"> <i class="fa fa-cart-plus navbar__icon" aria-hidden="true"></i></h4> </div> </div> </nav>', 'navbar .navbar { background-color: #1BAAD6; box-shadow: 0 2px 2px #ECE8E8; color: #fff; } navbar .navbar__text { text-align: center; font-weight: 100; margin-bottom: 0; margin-top: 0; padding: 2rem; } navbar .navbar__cart { width: 15rem; text-align: center; float: right; margin-right: 1rem; font-weight: 100; margin-bottom: 0; margin-top: 0; padding: 2rem; } navbar .navbar__icon { cursor: pointer; }', '', function(opts) {
}, '{ }');
riot.tag2('product-cart', '<div class="product-cart__title"> <h3> Cart Itens: {products.length}</h3> </div> <div class="product-cart"> <div class="product-cart__item" each="{products}" onclick="{parent.remove_item}" no-reorder> {name} {id} </div> </div>', 'product-cart .product-cart__title { margin-top: 3rem; display: flex; justify-content: center; } product-cart .product-cart__item { display: flex; justify-content: center; align-items: center; width: 50%; height: 8rem; margin-top: 1rem; margin-left: auto; margin-right: auto; cursor: pointer; font-size: 3rem; border: 1px solid #E6E1E1; transition: all .2s ease-in; } product-cart .product-cart__item:hover { border-style: dashed; text-decoration: line-through; }', '', function(opts) {
    var self = this;
    self.products = riotux.get('products_cart');

    self.on('update', function ( ) {
      self.products = riotux.get('products_cart');
    });

    riotux.subscribe(this, ['products_cart'], function ( state, value ) {
      self.update();
    });

    self.remove_item = function ( e ) {
      riotux.action('products_cart', 'REMOVE_PRODUCT', e.item);
    }

    self.on('unmount', function ( ) {
      riotux.unsubscribe(this);
    });
}, '{ }');
riot.tag2('products', '<div class="container"> <div class="row"> <div class="product-list"> <div class="three columns product" each="{list}"> <p class="product__name"> Name: {name}</p> <p class="product__price"> Price: {price}</p> <button class="button-primary" onclick="{parent.add_product}"> Add Product</button> </div> </div> </div> </div>', 'products .product-list { margin-top: 5rem; } products .product { display: flex; justify-content: center; align-items: center; align-content: center; flex-flow: column wrap; height: 20rem; border: 1px solid #e1e1e1; padding: 1rem; } products .product__name { margin-top: 1rem; color: #80827F; } products .product__price { margin-top: -2rem; color: #333; }', '', function(opts) {
    var self = this;

    self.on('update', function ( ) {
      self.list = riotux.get('products_api');
    });

    self.on('unmount', function () {
      riotux.unsubscribe(this);
    });

    self.add_product = function ( e ) {
      var item = e.item;
      riotux.action('products_cart', 'ADD_ON_CART', item);
    }
}, '{ }');