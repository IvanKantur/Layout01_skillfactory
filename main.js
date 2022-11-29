const firstApartment = document.getElementById("first");
const secondApartment = document.getElementById("second");
const thirdApartment = document.getElementById("third");
const admiralApartment = document.getElementById("admiral-apartment");
const leftArrowMobile = document.getElementById("arrow-1");
const rightArrowMobile = document.getElementById("arrow-2");
let index = 0;
let indexDots = 0;





firstApartment.addEventListener("click", () => {
    admiralApartment.style.backgroundImage = "url('https://s3-alpha-sig.figma.com/img/84d2/4980/7f2a0f3b4ed9cd6671fa4e811b625992?Expires=1670803200&Signature=g2LEN5L596pKenNRoXfUMkOJhhL4XYeB6IkwAOO9Uk-BcinXh5Z2T5OAfhLGNa8ZabjTKtQJVRCv9dS7XhTeN1mxlRwuOH4ueyTGDcx5clDvdHj3n2jH3OZ-a3lfymL-yNITPXjFblJMbXqDPxCbT78U0ZrnMISFUkibvUyG-qSu8Fi0ufoFJKD3Lx169u-4Az6C4OgvWzmaKclk3wi4HduccWBhFfLPfl0xMLoBqpaAmUOeHIzq2y-Z2Tuz9~j8y5DwqdPaFwGAfL2Hb6131SAyzluQa6yzivKanu7OYSEGnTZvX6KQKcG7YDmmw~G3eUv82kqEtQYLgqDJJkAx8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')";
    // firstApartment.style.textColor = "#E3B873";
    firstApartment.classList.add("checked-apartment");
    secondApartment.classList.remove("checked-apartment");
    thirdApartment.classList.remove("checked-apartment");
});

secondApartment.addEventListener("click", () => {
    admiralApartment.style.backgroundImage = "url('https://s3-alpha-sig.figma.com/img/2b61/d91d/0d504ae5ddf821a6b6600ee9bd6d98fa?Expires=1670803200&Signature=Vxtq6BMcYfnufXVLNCKgQmgAJRMvNZ8CGOCz09caDOHIJZ5SWMjuNGvyAhW3vxOLSqt7pjyos00I1hUF9S9SHoByVnfiNl0mCphy2QLeBgoK3~f0ncuX2vngytEnnuTvJY50MzvyAnhT7S9JDHvggLwOj0pYYgCMX~CeuGn-YQVJX6zxoCErsRa24N7spaSTM1c5uS7uY-MpFnDGfrw6Z3lDTXU8dw~feoprcDMxDGNetYb7CMosxORr7XBjjUyXZm2fsGSY9iwowwks4YVCXHG60O8PJITnmXk6L5TCXuK-88DOaHrb6dIXcpGXE61cNsBJqax~E1ydWdsbVMprMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')";
    secondApartment.classList.add("checked-apartment");
    firstApartment.classList.remove("checked-apartment");
    thirdApartment.classList.remove("checked-apartment");
});

thirdApartment.addEventListener("click", () => {
    admiralApartment.style.backgroundImage = "url('https://s3-alpha-sig.figma.com/img/2882/358d/e0332eab0ee26bbd0cebfe5592a469dc?Expires=1670803200&Signature=YvenqetHNck1Y47gLx2BdJhq0P3Od2LzkmoWfH68Xme0OEo3kD--juR7u4-jdFWSSpU77HP5z397PLLITrDpb4rhckf5VkO4QM7nwFzllTdt68meF1RyvpUd8YuURznE5Rak1Je~IUIEn1ZKhtfCbO52WN0sbD1haAOJ7VAiMSan83LOwKC4bIi5jB4mnjjbvaDh-rCZoLEXDK5wxR4AmaRMfyYhUyluiI5xljowx1-81LOstEFyfMCTz7O~2pRMg6Rqf9NGJD5mVA3pOEKcT-sSaJuK4XUS9Ef8TkdBQBOMtn0ZG8mNCq9wBOntvgI0wU0O~6JjL4lvHKm3GjpX~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')";
    thirdApartment.classList.add("checked-apartment");
    secondApartment.classList.remove("checked-apartment");
    firstApartment.classList.remove("checked-apartment");
});


function changeApartment(apartment){
    this.classList.toggle("checked-apartment");
}

let images = [{
    url : 'https://s3-alpha-sig.figma.com/img/84d2/4980/7f2a0f3b4ed9cd6671fa4e811b625992?Expires=1670803200&Signature=g2LEN5L596pKenNRoXfUMkOJhhL4XYeB6IkwAOO9Uk-BcinXh5Z2T5OAfhLGNa8ZabjTKtQJVRCv9dS7XhTeN1mxlRwuOH4ueyTGDcx5clDvdHj3n2jH3OZ-a3lfymL-yNITPXjFblJMbXqDPxCbT78U0ZrnMISFUkibvUyG-qSu8Fi0ufoFJKD3Lx169u-4Az6C4OgvWzmaKclk3wi4HduccWBhFfLPfl0xMLoBqpaAmUOeHIzq2y-Z2Tuz9~j8y5DwqdPaFwGAfL2Hb6131SAyzluQa6yzivKanu7OYSEGnTZvX6KQKcG7YDmmw~G3eUv82kqEtQYLgqDJJkAx8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
}, {
    url : 'https://s3-alpha-sig.figma.com/img/2b61/d91d/0d504ae5ddf821a6b6600ee9bd6d98fa?Expires=1670803200&Signature=Vxtq6BMcYfnufXVLNCKgQmgAJRMvNZ8CGOCz09caDOHIJZ5SWMjuNGvyAhW3vxOLSqt7pjyos00I1hUF9S9SHoByVnfiNl0mCphy2QLeBgoK3~f0ncuX2vngytEnnuTvJY50MzvyAnhT7S9JDHvggLwOj0pYYgCMX~CeuGn-YQVJX6zxoCErsRa24N7spaSTM1c5uS7uY-MpFnDGfrw6Z3lDTXU8dw~feoprcDMxDGNetYb7CMosxORr7XBjjUyXZm2fsGSY9iwowwks4YVCXHG60O8PJITnmXk6L5TCXuK-88DOaHrb6dIXcpGXE61cNsBJqax~E1ydWdsbVMprMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
}, {
    url : 'https://s3-alpha-sig.figma.com/img/2882/358d/e0332eab0ee26bbd0cebfe5592a469dc?Expires=1670803200&Signature=YvenqetHNck1Y47gLx2BdJhq0P3Od2LzkmoWfH68Xme0OEo3kD--juR7u4-jdFWSSpU77HP5z397PLLITrDpb4rhckf5VkO4QM7nwFzllTdt68meF1RyvpUd8YuURznE5Rak1Je~IUIEn1ZKhtfCbO52WN0sbD1haAOJ7VAiMSan83LOwKC4bIi5jB4mnjjbvaDh-rCZoLEXDK5wxR4AmaRMfyYhUyluiI5xljowx1-81LOstEFyfMCTz7O~2pRMg6Rqf9NGJD5mVA3pOEKcT-sSaJuK4XUS9Ef8TkdBQBOMtn0ZG8mNCq9wBOntvgI0wU0O~6JjL4lvHKm3GjpX~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
}
]

leftArrowMobile.addEventListener("click", () => {
    if ((index < images.length) && (index => 0)){
        if (index === 0 ){
            index = images.length - 1;
            admiralApartment.style.backgroundImage = `url(${images[index].url})`;
        } else {
            index--;
            admiralApartment.style.backgroundImage = `url(${images[index].url})`;
        }
        // debugger;
    }
    return index;
})

rightArrowMobile.addEventListener("click", () => {
    if ((index < images.length) && (index => 0)){
        if (index === images.length -1){
            index = 0;
            admiralApartment.style.backgroundImage = `url(${images[index].url})`;
        } else {
            index++
            admiralApartment.style.backgroundImage = `url(${images[index].url})`;
        }       
    }
    return index;
    })





    // для декстопа

    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const dot1 = document.getElementById("dot1");
    const dot2 = document.getElementById("dot2");
    const dot3 = document.getElementById("dot3");
    const dots = [dot1, dot2, dot3];
    const apartments = [firstApartment, secondApartment, thirdApartment];


    leftArrow.addEventListener("click", () => {
        if ((indexDots < dots.length) && (index => 0)){
            if (indexDots === 0 ){
                dots[indexDots].classList.toggle("checked-dot");
                indexDots = dots.length - 1;
                dots[indexDots].classList.toggle("checked-dot");
                index = indexDots;
                admiralApartment.style.backgroundImage = `url(${images[index].url})`;
            } else {
                
                dots[indexDots].classList.toggle("checked-dot");
                indexDots--;
                
                dots[indexDots].classList.toggle("checked-dot");
                index--;
                admiralApartment.style.backgroundImage = `url(${images[index].url})`;
            }
            // debugger;
        }
        return (
            indexDots,
            index)
    })