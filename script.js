$(document).ready(function(){
    $(".faq .main1 ul li p").click(function () {

        console.log($(this).find(".fa").css("transform"))

        if($(this).find(".fa").css("transform") == "none"){
            $(this).find(".fa").css("transform", "rotate(45deg)")
        }else{
            $(this).find(".fa").css("transform", "rotate(0deg)")
            $(this).find(".fa").css("transform", "none")
        }
        
        $(this).siblings("div").slideToggle()
    })
})