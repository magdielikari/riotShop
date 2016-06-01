<navbar>
  <nav class="navbar">
    <div class="row">
      <div class="three columns">
        <h4 class="navbar__text"> { opts.logoname }</h4>
      </div>
      <div class="nine columns">
        <h4 class="navbar__cart"> <i class="fa fa-cart-plus navbar__icon" aria-hidden="true"></i></h4>
      </div>
    </div>
  </nav>
  <style>
    navbar .navbar {
      background-color: #1BAAD6;
      box-shadow: 0 2px 2px #ECE8E8;
      color: #fff;
    }
    
    navbar .navbar__text {
      text-align: center;
      font-weight: 100;
      margin-bottom: 0;
      margin-top: 0;
      padding: 2rem;
    }
    navbar .navbar__cart {
     width: 15rem;
      text-align: center;
      float: right;
      margin-right: 1rem;
      font-weight: 100;
      margin-bottom: 0;
      margin-top: 0;
      padding: 2rem;
    }
    
    navbar .navbar__icon {
      cursor: pointer;
    }
  </style>
</navbar>