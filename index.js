function ex5(){
    var value = document.getElementById('txtNum').value * 1

    var contentHtml = ''
    
   
    for (var i = 2; i < value; i++) {
        if(i === 2){
            contentHtml += i + ' '
       
        } else if(i===3){
            contentHtml += i + ' '
        }else if (i % 2 !==0 && i%3!==0){
            contentHtml += i + ' '
        }
    }
    document.getElementById('result').innerHTML = contentHtml
}
    
        
    // document.getElementById('result').innerHTML = contentHtml

    