let motors_id = localStorage.getItem("motors_id")
let motors = JSON.parse(localStorage.getItem("Motors"))

let motor = motors[motors_id]

$('#sanpham').append('<div class="row s_product_inner">' +
  '<div class="col-lg-5">' +
  '<img src="' + motor.img + ' "height="300" width="350">' +
  '</div>' +
  '<div class="col-lg-5 offset-lg-1">' +
  '<div class="s_product_text">' +
  '<h3>' + motor.name + '</h3>' +
  '<h2>' + motor.price + '</h2>' +
  '<ul class="list">' +
  '<li>' +
  '<a class="active" href="#">' +
  '<span>Category</span> : ' + motor.category + '</a>' +
  '</li>' +
  '<li>' +
  '<a href="#"> <span>Availibility</span> : In Stock</a>' +
  '</li>' +
  '</ul>' +
  '<p>' +
  motor.information +
  '</p>' +
  '<div class="card_area">' +
  '<div class="product_count d-inline-block">' +
  '<span class="inumber-decrement"> <i class="ti-minus"></i></span>' +
  ' <input class="input-number" type="text" value="1" min="0" max="10">' +
  ' <span class="number-increment"> <i class="ti-plus"></i></span>' +
  '</div>' +
  '<div class="add_to_cart">' +
  '<a href="#" class="btn_3">add to cart</a>' +
  '  <a href="#" class="like_us"> <i class="ti-heart"></i> </a>' +
  ' </div>' +
  '<div class="social_icon">' +
  '<a href="#" class="fb"><i class="ti-facebook"></i></a>' +
  ' <a href="#" class="tw"><i class="ti-twitter-alt"></i></a>' +
  ' <a href="#" class="li"><i class="ti-linkedin"></i></a>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>)')

$(document).ready(function () {
    let motors = JSON.parse(localStorage.getItem('Motors')) || [];

    let searchParams = new URLSearchParams(window.location.search)

    let id = searchParams.get('id');
    console.log(id);
    let mortor = motors.filter(i => i.id === id);
    mortor.forEach(product => {
        $('#san_pham').append('<div class="row s_product_inner">' +
            '<div class="col-lg-5" style="padding-left: 200px;">' +
            '<img src="' + product.img +'" height="380" width="450">' +
            '</div>' +
            '<div class="col-lg-5 offset-lg-1">' +
            '<div class="s_product_text">' +
            '<h3>'+product.name+'</h3>' +
            '<h2>'+product.price+'</h2>' +
            '<ul class="list">' +
            '<li>' +
            '<a class="active" href="#">' +
            '</li>' +
            '<li>' +
            '<a href="#"> <span>Availibility</span> : In Stock</a>' +
            '</li>' +
            '</ul>' +
            '<p>' +
            product.information+
          '</p>' +
      '</div >'+
    '</div >');
    })
});