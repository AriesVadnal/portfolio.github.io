$('.cf').on('click', function(Event){
    if (this.hash !== '') {
        Event.preventDefault();
        
        const hash = this.hash;
        
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800,'easeInOutExpo',function(){
            window.location.hash = hash;
        });
    }
});


// about 
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})

$(window).scroll(function(){
    let Wscroll = $(this).scrollTop();
    
    // jumbotron
    $('.img-circle').css({
        'transform' : 'translate(0px, '+ Wscroll/4 +'%)'
    });
    
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ Wscroll/2 +'%)'
    })
    
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ Wscroll/1.2+'%)'
    })
    
    
    // Portfolio
    if( Wscroll > $('.portfolio').offset().top-300 ){
        
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
               $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        
        
    }
                 
 });



















