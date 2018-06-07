$(function(){
   
    $('#download').on('click', function() {
        
        function ajax(method, url){

            let httpReq = new XMLHttpRequest();
            httpReq.open(method, url);
            httpReq.onreadystatechange = function() {

                if(httpReq.readyState == 4) {
                    if(httpReq.status == 200) {

                        let returnData = httpReq.responseText;

                        httpReq.onsuccess(returnData);
                        httpReq = null;        
                    }
                }
            }

            httpReq.onsuccess = function(response) {
                
                //parsowanie danych
                let jsonObj = JSON.parse(response);
                console.log(jsonObj);
                
                //tworze diva
                $('.container').append('<div id="dane-programisty"></div>');
                
                
                //wypelniam diva textem
                $('#dane-programisty').text(jsonObj.imie + ' ' + jsonObj.nazwisko + ' ' + jsonObj.zawod + ' ' + jsonObj.firma);
                
                //wylaczam btn po akcji
                setTimeout(function () { disableButton(); }, 0);
                
                function disableButton() {
                    $("#download").prop('disabled', true);
                };

            }

            httpReq.send();
        }

        
        ajax('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');

    });
    
});






































