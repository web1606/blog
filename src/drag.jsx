import { PureComponent, cloneElement } from 'react';


export default class Drag extends PureComponent {

  dragState= {}

  onTouchStart = (event) => {
    const dragState = this.dragState;
    const touch = event.touches[0];

    dragState.startX = touch.pageX;
    dragState.startY = touch.pageY;
    dragState.startTime = new Date();

    const { onDragStart } = this.props;
    if (typeof onDragStart === 'function') {
      onDragStart(event, dragState);
    }
  }

  onTouchMove = (event) => {
    const dragState = this.dragState;
    const touch = event.touches[0];

    const currentX = touch.pageX;
    const currentY = touch.pageY;

    const offsetX = currentX - dragState.startX;
    const offsetY = currentY - dragState.startY;

    const state = {
      ...dragState,
      offsetX,
      offsetY,
      currentX,
      currentY,
    };
    console.log(currentX,offsetX)
    const { onDragMove } = this.props;
    // if (typeof onDragMove === 'function' && !onDragMove(event, state)) {
    //   return;
    // }

    this.dragState = state;
  }

  onTouchEnd = (event) => {
    const dragState = this.dragState;
    const { onDragEnd } = this.props;
    if (typeof onDragEnd === 'function') {
      onDragEnd(event, dragState);
    }
    this.dragState = {};
  }

  render() {
    const { children } = this.props;
    return cloneElement(children, {
      onTouchStart: this.onTouchStart,
      onTouchMove: this.onTouchMove,
      onTouchEnd: this.onTouchEnd,
    });
  }
}
