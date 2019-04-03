'use strict';

var Book = require('../models/bookModel');
var Category = require('../models/categoryModel');


module.exports = function (router) {
    // Router for getting cart display for the products
    router.get('/', function (req, res) {
          // Get cart from session
          // when we click add to cart then it will take the item and create session values and session variables that we can use
          var cart = req.session.cart;
          var displayCart = {items:[], total:0}      //creating an array of items, by default the total will be zero
          var total =0;  // variable of totaling all the products

          // To get the total of all the products
          for(var item in cart){
              displayCart.items.push(cart[item]);  //push is used to adding the products in the array
              total += (cart[item].qty * cart[item].price);
          }
          displayCart.total = total;

          //Render cart(displaying the cart)
          res.render('cart/index', {
              cart: displayCart
          });
    });

    // Route of posting the product in the cart
    router.post('/:id', function (req, res) {
        req.session.cart = req.session.cart || {};
        var cart = req.session.cart;

        Book.findOne({_id:req.params.id}, function(err, book){
            if(err){
                console.log(err);
            }

            if(cart[req.params.id]){
                cart[req.params.id].qty++;
            }
            else {
                cart[req.params.id] = {
                    item: book._id,
                    title: book.title,
                    price: book.price,
                    qty: 1
                }
            }

            res.redirect('/cart');
        });
    });
};
