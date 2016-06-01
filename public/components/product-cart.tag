<product-cart>
  <div class="product-cart__title">
    <h3> Cart Itens: {products.length}</h3>
  </div>
  <div class="product-cart">
    <div class="product-cart__item" each = { products } onclick = {parent.remove_item} no-reorder>
      { name } { id }
    </div>
  </div>
  
  <style>
    product-cart .product-cart__title {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
    }
    
    product-cart .product-cart__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 8rem;
      margin-top: 1rem;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
      font-size: 3rem;
      border: 1px solid #E6E1E1;
      transition: all .2s ease-in;
    }
    product-cart .product-cart__item:hover {
      border-style: dashed;
      text-decoration: line-through;
    }
  </style>  
  <script>
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
  </script>
  
</product-cart>