const rootElement = document.querySelectorAll('[data-js-tabs-root]');

class Tabs{

  selectors = {
    root: '[data-js-tabs-root]',
    btnBox: '[data-js-nav-box]',
    btn: '[data-js-btn]',
    tabText: '[data-tab-text]'
}

  attributes = {
    btnAttribute: "data-js-btn",
}

stateClasses = {
    activeButton: 'active',
    activeTab: 'show',
    btn: '.tabs__btn'
}
  constructor(element){
    this.rootElement = element;
    this.boxButttonElement = this.rootElement.querySelector(this.selectors.btnBox);
    this.listButtonElements = this.rootElement.querySelectorAll(this.selectors.btn);
    this.listTabTextElements = this.rootElement.querySelectorAll(this.selectors.tabText);
    this.bindEvents();
  }

  bindEvents() {
    this.boxButttonElement.addEventListener("click", (e) => {
      const targetButton = e.target.closest(this.stateClasses.btn) ? e.target : "";
      // Находим индекс нажатой кнопки
      const buttonIndex = Array.from(this.listButtonElements).indexOf(targetButton);
      if(!targetButton) {
        return;
      } else {
      this.listButtonElements.forEach((button) => {
        button.classList.remove(this.stateClasses.activeButton);
      });
      targetButton.classList.add(this.stateClasses.activeButton);
      }


      this.listTabTextElements.forEach((text) => {
        text.classList.remove(this.stateClasses.activeTab);
      })
      if(this.listTabTextElements[buttonIndex]){
        this.listTabTextElements[buttonIndex].classList.add(this.stateClasses.activeTab);
      }


    })
  }
}

class TabsCollection{
  constructor(){
    this.init();
  }

  init() {
    rootElement.forEach((element) => {
      new Tabs(element);
    })
  }
}

new  TabsCollection();

