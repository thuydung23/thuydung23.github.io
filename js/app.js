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
function dowload(fileURL,fileName){
    $(document).ready(function(){
        $("#dowload").click(function(){
            if (!window.ActiveXObject) {
                var save = document.createElement('a');
                save.href = fileURL;
                save.target = '_blank';
                console.log(fileURL)
                var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
                save.download = fileName || filename;
                   if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
                        document.location = save.href; 
                    // window event not working here
                    }else{
                        var evt = new MouseEvent('click', {
                            'view': window,
                            'bubbles': true,
                            'cancelable': false
                        });
                        save.dispatchEvent(evt);
                        (window.URL || window.webkitURL).revokeObjectURL(save.href);
                    }	
            }
        
            // for IE < 11
            else if ( !! window.ActiveXObject && document.execCommand)     {
                var _window = window.open(fileURL, '_blank');
                _window.document.close();
                _window.document.execCommand('SaveAs', true, fileName || fileURL)
                _window.close();
            }
        });
    });
}

active_menu();

var url = "NGUYEN_Thi_Thuy_Dung-CV.pdf";
var fileName = "NGUYEN_Thi_Thuy_Dung-CV";



