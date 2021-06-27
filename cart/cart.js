'use strict';

const Cart = function(items) {
    this.items = items;
}

Cart.prototype.addItem = function(product){

    let newItem = new CartItem(product);
    this.items.push(newItem);
  };

