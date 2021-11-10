$(document).ready(function(){
    $('.worklist-pub-list').each(function(index, node){
        var obj = $(node)
        var count = 0;
        for (var i = 0 ; i <= $(node).find("tbody tr.row").length ; i++){
            var text = obj.find("tr").eq(i).find("td.finish").text();
            obj.find("tr").eq(i).find("td:eq(0)").css("text-align","center");
            if (text.length > 0){
                count ++
            }
            if ($(node).find("tbody tr.row").length == i){
                $(node).parent().prev().find(".completed").text(count);
            }
        }
        var len = $(node).find("tbody tr.row").length;
        $(node).parent().prev().find(".total").text(len);
    });   
    $('.header-nav li a').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});