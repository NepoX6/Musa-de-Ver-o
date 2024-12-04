$(document).ready(function() {

        
     
     let carrinho = Number(localStorage.getItem('mycar'));
     $('.soma').text(carrinho);


    //menu
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    //carrinho 
    $('.add-car').on('click', function() {
        carrinho = carrinho + 1;
        $('.soma').text(carrinho);
        localStorage.setItem('mycar', carrinho);
        $('.caixa_car').toggleClass('show-price');
        setTimeout(function () {
            $('.caixa_car').toggleClass('show-price');
        }, 4000);
    });



});