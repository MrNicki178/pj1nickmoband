var mobilescontainer = document.getElementById("mobiles-lists")                   
var searchbar = document.getElementById("search")
var mobilesunit = mobilescontainer.querySelectorAll("div")

searchbar.addEventListener("keyup",function(){

    var enteredvalue = event.target.value.toUpperCase()

    for(count=0;count<mobilesunit.length;count=count+1)
    {
        var mobilesname = mobilesunit[count].querySelector("p").textContent

        if(mobilesname.toUpperCase().indexOf(enteredvalue)<0)
        {
            mobilesunit[count].style.display = "none"

        }
        else{
            mobilesunit[count].style.display = "block"
        }
    }


})


