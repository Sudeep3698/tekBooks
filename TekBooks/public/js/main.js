//Jquery for making an ajax request whenever we delete a book
$(document).ready(function(){
    $('.removeBook').click(function(e){   // setting click event so when we delete then it will be a ajax request
      deleteId = $(this).data('id');  //this means the link we are clicking or the current object, data(function) is the way to access the data id
      $.ajax({                        // making a ajax call
          url:'/manage/books/delete/'+deleteId,
          type: 'DELETE',        // type of request
          success: function(){

          }
      });
      window.location = '/manage/books';   // redirect
    });

    $('.removeCategory').click(function(e){   // setting click event so when we delete then it will be a ajax request
      deleteId = $(this).data('id');  //this means the link we are clicking or the current object, data(function) is the way to access the data id
      $.ajax({                        // making a ajax call
          url:'/manage/categories/delete/'+deleteId,
          type: 'DELETE',        // type of request
          success: function(){

          }
      });
      window.location = '/manage/categories';   // redirect
    });
});
