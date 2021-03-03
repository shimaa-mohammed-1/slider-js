

var imgList = document.querySelectorAll(".item img");
var imgArray = [];
var lightboxItem = document.getElementById("lightbox-item");
var lightboxContainer = document.getElementById("lightbox-container");
var currentSlideIndex = 0;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

for(var i=0 ; i <imgList.length ; i++)
{

    imgArray.push(imgList[i]);

    imgList[i].addEventListener("click" , function(e){
        
        currentSlideIndex =  imgArray.indexOf(e.target);//2
    
        var imgSrc = e.target.getAttribute("src"); 
        lightboxContainer.style.display = "flex";
        lightboxItem.style.backgroundImage = "url("+imgSrc+")";

    })
}




function nextSlide()
{
    currentSlideIndex++;//9
    if(currentSlideIndex == imgArray.length)//9
    {
        currentSlideIndex = 0;
    }
    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage= "url("+imgSrc+")";
}
function prevSlide()
{
    currentSlideIndex--;  
    if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgArray.length -1;
    }
    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage= "url("+imgSrc+")";
}
function closeSlide()
{
    lightboxContainer.style.display = "none";
}
nextBtn.addEventListener("click" , nextSlide);
prevBtn.addEventListener("click" , prevSlide);
closeBtn.addEventListener("click" , closeSlide);
document.addEventListener("keydown" , function(e){

    if(e.keyCode == 39)
    {
        nextSlide();
    }
    else if(e.keyCode  == 37)
    {
        prevSlide();
    }
    else if(e.keyCode == 27 )
    {
        closeSlide();
    }
})


lightboxContainer.addEventListener("click" , function(e){
  
    if(e.target == lightboxItem || e.target == nextBtn || e.target == prevBtn)
    {
        return false;
    }
    closeSlide();
})