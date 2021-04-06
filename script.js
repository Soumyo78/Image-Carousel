let slideImgArr = [
    "Resources/slide-pic-9.png",
    "Resources/slide-pic-10.png",
    "Resources/slide-pic-11.png",
    "Resources/slide-pic-12.png",
    "Resources/slide-pic-13.png",
    "Resources/slide-pic-14.png"
];

const autoSlideCarousel = (locationDOM, ImgArr) =>{
    let offset = 0;
    const slideImg = (numberOfImg, locationDOM) =>{
        if(offset < 100){
            let rate = 100/numberOfImg;
            offset = (offset+rate)%100;
            locationDOM.style.transform = `translate(-${offset}%, 0)`
        }
    }
    
    const slideImgBack = (numberOfImg, locationDOM) =>{
        if(offset > 0){
            let rate = 100/numberOfImg;
            offset = (offset-rate)%100;
            locationDOM.style.transform = `translate(-${offset}%, 0)`
        }
    }

    locationDOM.style.width = `${ImgArr.length*100}%`;

    ImgArr.forEach(imgUrl => {
        const imgContainer = document.createElement('div');
        imgContainer.style.width = "100%";
        imgContainer.style.marginLeft = "1px";
        imgContainer.style.marginRight = "1px";

        const slideImg = document.createElement('img');
        slideImg.src = imgUrl;
        slideImg.style.width = "100%";

        imgContainer.appendChild(slideImg);
        locationDOM.appendChild(imgContainer);
    });

    document.getElementById('next-btn').addEventListener('click', ()=>slideImg(ImgArr.length, carouselContainer));
    document.getElementById('prev-btn').addEventListener('click', ()=>slideImgBack(ImgArr.length, carouselContainer));

    setInterval(()=>slideImg(ImgArr.length, carouselContainer), 3000);
}

const carouselContainer = document.getElementById('app');
autoSlideCarousel(carouselContainer, slideImgArr); 