function active_menu(){
    $(document).ready(function(){

        var array = ['user','formations','projets','informations','competences'];

        for(var i=0; i<array.length; i++){
            var tmp = '#'+array[i];
            $(tmp).click(function(){
                if($(".active").length !=0){
                    var item = $(".active");
                    item.addClass('none-active');
                    item.removeClass('active');
                }
                
                if($(this).attr('id') != 'user'){
                    var url = "templates/"+$(this).attr('id')+".html";
                    $(this).addClass('active');
                    $(this).removeClass('none-active');
                }else{
                    var url = "templates/description.html";
                }
                
                $("#iframe").attr("src",url);
            });
        }
    });
}

active_menu();