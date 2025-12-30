class DragAndDrop {
  selectors = {
    root: "[data-js-dnd]",
  };

  stateClasses = {
    isDragging: "is-dragging",
  };

  initialState = {
    offSetX: null,
    offSetY: null,
    isDragging: false,
    currentDraggingElement: null,
  };

  constructor() {
    this.state = {...this.initialState};
    this.bindEvents();
  }

  onPointerDown(e) {
    const isDraggeble = e.target.matches(this.selectors.root);
    if(!isDraggeble) return;

    const { top, left } = e.target.getBoundingClientRect();

    this.state = {
      offSetX: e.x - left,
      offSetY: e.y - top,
      isDragging: true,
      currentDraggingElement: e.target,
    };
    e.target.classList.add(this.stateClasses.isDragging);
    
  };


  onPointerMove(e) {
    if(!this.state.isDragging) {
      return;
    }
    const x = e.pageX - this.state.offSetX;
    const y = e.pageY - this.state.offSetY;

    this.state.currentDraggingElement.style.left = `${x}px`;
    this.state.currentDraggingElement.style.top = `${y}px`;
  };

  onPointerUp() {
    if(!this.state.isDragging) {
      return;
    };

    this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging);
    this.state = {...this.initialState};
  };

  bindEvents() {
    document.addEventListener("pointerdown", (e) => this.onPointerDown(e));
    document.addEventListener("pointermove", (e) => this.onPointerMove(e));
    document.addEventListener("pointerup", () => this.onPointerUp());
  }
}

new DragAndDrop();
