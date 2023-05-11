//Cristian Dominguez Webd 164

//Constantly rotates through an array of images, replacing each image every 2 seconds

//Hard-coding the array of images
let scrollingimgs= new Array('images/scrollingcropped/0.jpg','images/scrollingcropped/1.jpg','images/scrollingcropped/2.jpg','images/scrollingcropped/3.jpg',
                             'images/scrollingcropped/4.jpg','images/scrollingcropped/5.jpg','images/scrollingcropped/6.jpg','images/scrollingcropped/7.jpg',
                             'images/scrollingcropped/8.jpg','images/scrollingcropped/9.jpg','images/scrollingcropped/10.jpg','images/scrollingcropped/11.jpg',
                             'images/scrollingcropped/12.jpg','images/scrollingcropped/13.jpg','images/scrollingcropped/14.jpg','images/scrollingcropped/15.jpg',
                             'images/scrollingcropped/16.jpg');

//Variables to keep track
let i= 0;
let time= 2000; //2 seconds

function autoSlider(){
    document.slidingImg.src= scrollingimgs[i];
    //console.log(i);

    //Checking where in the array it is at, and starting over if at the end.
    if(i< scrollingimgs.length- 1){
        i++
    } else{
        i= 0;
    }
    setTimeout("autoSlider()", time);
}

//runnig this as soon as the page loads.
window.onload= autoSlider;