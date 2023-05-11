//Cristian Dominguez Webd 164
//Controls how and when certain divs are opened and closed with a button onclick()

function previewDiv(num) {
    //checking which button is pressed.
    //x represents the element
    if(num== 0){
        let x = document.getElementById("preview-div-0");
        if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("preview-btn-0").innerHTML = "Close Preview";
            document.getElementById("info-div-extras-0").style.display= "block";
        }else{
            x.style.display = "none";
            document.getElementById("preview-btn-0").innerHTML = "Open Preview";
            document.getElementById("info-div-extras-0").style.display= "none";
        }
    } else if (num== 1){
        let x = document.getElementById("preview-div-1");
        if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("preview-btn-1").innerHTML = "Close Preview";
            document.getElementById("info-div-extras-1").style.display= "block";
        } else {
            x.style.display = "none";
            document.getElementById("preview-btn-1").innerHTML = "Open Preview";
            document.getElementById("info-div-extras-1").style.display= "none";
        }
    }
}

previewDiv();