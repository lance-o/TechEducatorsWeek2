const displayImg = document.getElementById("DisplayImg");
const birdBtn = document.getElementById("BirdImg");
const treeBtn = document.getElementById("TreeImg");
const desertBtn = document.getElementById("DesertImg");
const announcer = document.getElementById("announcer");
const previousBtn = document.getElementById("PreviousButton");
const nextBtn = document.getElementById("NextButton");

const images ={
    imageArray: [
        {src: "./images/birb/2000x2000.webp", alt:"Bird walking on a Beach during the sunset.",
            srcset:`
            ./images/birb/2000x2000.webp 2000w,
            ./images/birb/1000x1000.webp 1000w,
            ./images/birb/500x500.webp 500w,
            `
        },
        {src: "./images/tree/2000x2000.webp", alt:"Tree.",
            srcset:`
            ./images/tree/2000x2000.webp 2000w,
            ./images/tree/1000x1000.webp 1000w,
            ./images/tree/500x500.webp 500w,
            `
        },
        {src: "./images/desert/2000x2000.webp", alt:"Desert at night. Coarse and rough.", 
            srcset:`
            ./images/desert/2000x2000.webp 2000w,
            ./images/desert/1000x1000.webp 1000w,
            ./images/desert/500x500.webp 500w,
            `
        },
    ],
    imageIndex: 0,
    updateDisplay: function(index){
        displayImg.src = this.imageArray[index].src;
        displayImg.alt = this.imageArray[index].alt;
        displayImg.srcset = this.imageArray[index].srcset;
    },
    setIndex: function(newIndex){
        if(newIndex == this.imageIndex){
            return;
        }

        if(newIndex < 0){
            newIndex = this.imageArray.length-1;
        }
        else if(newIndex > this.imageArray.length-1){
            newIndex = 0;
        }
        this.imageIndex = newIndex;
        this.updateDisplay(this.imageIndex);
    },
    goBack: function(){
        this.setIndex(this.imageIndex-1);
    },
    goForward: function(){
        this.setIndex(this.imageIndex+1);
    },
}

birdBtn.addEventListener("click", function(){
    images.setIndex(0);
});
treeBtn.addEventListener("click",  function(){
    images.setIndex(1);
});
desertBtn.addEventListener("click",  function(){
    images.setIndex(2);
});

birdBtn.addEventListener("focus", function(){
    images.setIndex(0);
});
treeBtn.addEventListener("focus",  function(){
    images.setIndex(1);
});
desertBtn.addEventListener("focus",  function(){
    images.setIndex(2);
});

birdBtn.addEventListener("mouseover", function(){
    announcer.textContent = birdBtn.alt;
    console.log("hover over birdbtn");
});
treeBtn.addEventListener("mouseover",  function(){
    announcer.textContent = treeBtn.alt;
});
desertBtn.addEventListener("mouseover",  function(){
    announcer.textContent = desertBtn.alt;
});

previousBtn.addEventListener("click",  function(){
    images.goBack();
});
nextBtn.addEventListener("click",  function(){
    images.goForward();
});

document.addEventListener("keydown", function(event){
    if(event.key == "ArrowRight" || event.key == "."){
        images.goForward();
    }
    if(event.key == "ArrowLeft"|| event.key == ","){
        images.goBack();
    }
});