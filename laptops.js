var laptopcon = document.getElementById("laptoplists")
var lapsearch = document.getElementById("l-search")
var laptopbox = laptopcon.querySelectorAll("div")

lapsearch.addEventListener("keyup", function () {

    var enteredlapvalue = event.target.value.toUpperCase()

    for (count = 0; count < laptopbox.length; count = count + 1) {

        var lapname = laptopbox[count].querySelector("p").textContent

        if (lapname.toUpperCase().indexOf(enteredlapvalue) < 0) {

            laptopbox[count].style.display = "none"
        }

        else {
            laptopbox[count].style.display = "block"
        }
    }



})