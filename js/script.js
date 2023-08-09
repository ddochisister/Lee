$(function(){


    $(".move li").hide();
    $(".move li").eq(0).show();

    var n=0; // 0 1 2

    setInterval(function(){

        $(".move li").eq(n).fadeOut();

        // if(n < 2){
        //     n++;
        // } else{
        //     n=0;
        // }

        // if( n == 2){
        //     n=0;
        // }else{
        //     n++;
        // }

        // if(n >= 2){
        //     n=0;
        // } else{
        //     n++;
        // }

        n = ( n + 1 ) % 3

        console.log(n)

        $(".move li").eq(n).fadeIn();

    }, 3000)


    // 메뉴

    // $(".m_menu a").click(function(){

    //     $(".m_nav").toggleClass("act");

    // })

    $(".m_menu").click(function(){
        if($(".m_nav").hasClass("act")==true){
            $(".m_nav").removeClass("act")
        }else{
            $(".m_nav").addClass("act")
        }
    })

    $(".f_menu").click(function(e){
        console.log(e)
        e.preventDefault()
        $(".m_sitemap").toggleClass("act")
    })


})//jquery