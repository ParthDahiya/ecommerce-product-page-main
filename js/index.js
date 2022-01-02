

 $('.btn-minuse').on('click', function(){
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
});

$('.btn-pluss').on('click', function(){
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
});

$(function () {
    $('[data-toggle="popover"]').popover({
        placement : 'top',
		trigger : 'click',
        container: 'body',
        html : true,
        content : '<div class="media"><img src="../images/image-product-1-thumbnail.jpg" class="mr-3" alt="Sample Image"><div class="media-body"><p>Fall Limited Edition Sneakers <br> $125*3 <strong>$375</strong></strong></p><br></div></div><div><a href="#" class="btn checkout">Checkout</a></div>'
    });
  });
$('.popover-dismiss').popover({
    trigger: 'focus'
  });
  $('#staticBackdrop').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus'); 
  });


  function openNav() {
    document.getElementById("myNav").style.width = "80%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

