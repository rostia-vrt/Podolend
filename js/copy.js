function Copy(string)
{
    navigator.clipboard.writeText(string);
    $(".notify").toggleClass("active");

    setTimeout(function(){
        $(".notify").removeClass("active");
    },2000);
}