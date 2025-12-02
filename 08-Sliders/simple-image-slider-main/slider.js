const rootSelector = ".container";

class ShowSlider {
    selectors = {
        sliderBoxElement: ".slider",
        paginationList: ".point",
        imagesListElements: ".image",
        prevButton: ".prev",
        nextButton: ".next",
    }

    stateClasses = {
        imageActive: "image-active",
        pointActive: "point-active",
    }

    currentIndex = 0

    constructor(rootElelement) {
        this.rootElement = rootElelement;
        this.paginationList = this.rootElement.querySelectorAll(this.selectors.paginationList);
        this.listImages = this.rootElement.querySelectorAll(this.selectors.imagesListElements);
        this.prevButton = this.rootElement.querySelector(this.selectors.prevButton);
        this.nextButton = this.rootElement.querySelector(this.selectors.nextButton);
        this.showSlider(this.currentIndex);
        this.addPointerClickHandlers();
        this.bindEvents();
    }

    showSlider(index) {

        this.listImages.forEach((image) => {
            image.classList.remove(this.stateClasses.imageActive);
        })

        this.paginationList.forEach((point) => {
            point.classList.remove(this.stateClasses.pointActive)
        })


        this.listImages[index].classList.add(this.stateClasses.imageActive);
        this.paginationList[index].classList.add(this.stateClasses.pointActive);

        this.currentIndex = index;
    }

    addPointerClickHandlers() {
        this.paginationList.forEach((point, index) => {
            point.addEventListener("click", () => this.showSlider(index))
        })
    }

    prevShowImage = () => {
        let prevIndex = this.currentIndex - 1;
        if (prevIndex <= 0) {
            prevIndex = this.listImages.length - 1;
        }
        this.showSlider(prevIndex);
    }

    nextShowImage = () => {
        let nextIndex = this.currentIndex + 1;
        if (nextIndex >= this.listImages.length) {
            nextIndex = 0;
        }
        this.showSlider(nextIndex);
    }



    bindEvents() {
        this.prevButton.addEventListener("click", this.prevShowImage);
        this.nextButton.addEventListener("click", this.nextShowImage)
    }
}




class ShowSliderCollection {

    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ShowSlider(element);
        })
    }
}

new ShowSliderCollection();