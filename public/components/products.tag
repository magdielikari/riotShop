<products>
  <div class="container">
    <div class="row">
      <div class="product-list">
        <div class="three columns product" each = { list }>
          <p class="product__name"> Name: { name }</p>  
          <p class="product__price"> Price: { price }</p>  
          <button class="button-primary" onclick= { parent.add_product }> Add Product</button>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  products .product-list {
    margin-top: 5rem;
  }
  
  products .product {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-flow: column wrap;
    height: 20rem;
    border: 1px solid #e1e1e1;
    padding: 1rem;
  }

  products .product__name {
    margin-top: 1rem;
    color: #80827F;
  }
  products .product__price {
    margin-top: -2rem;
    color: #333;
  }
</style>

  <script>
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
  </script>
</products>