import { useLayoutEffect, useRef, useState } from 'react';

function useDrag() {
  // dom 元素的位置
  // useRef 保存的对象可以在组件多次渲染的时候保持不变
  const positionRef = useRef({
    currentX: 0,
    currentY: 0, // 当前的位置
    lastX: 0,
    lastY: 0, // 上一次的位置
  });
  // 你要让哪一个 DOM 元素进行移动
  const domRef = useRef(null);
  const [, forceUpdate] = useState({});

  // useLayoutEffect 在所有 DOM 变更之后立即同步执行，浏览器执行绘制之前。，
  // 执行的时机比 useEffect 早
  useLayoutEffect(() => {
    // 拖拽开始的 X 坐标、Y 坐标
    let startX, startY;
    const start = function (event) {
      const { clientX, clientY } = event.targetTouches[0];
      startX = clientX;
      startY = clientY;
      domRef.current.addEventListener('touchmove', move);
      domRef.current.addEventListener('touchend', end);
    };

    const move = function (event) {
      const { clientX, clientY } = event.targetTouches[0];
      positionRef.current.currentX =
        positionRef.current.lastX + (clientX - startX);
      positionRef.current.currentY =
        positionRef.current.lastY + (clientY - startY);

      forceUpdate({});
    };

    const end = function () {
      positionRef.current.lastX = positionRef.current.currentX;
      positionRef.current.lastY = positionRef.current.currentY;

      domRef.current.removeEventListener('touchmove', move);
      domRef.current.removeEventListener('touchend', end);
    };

    domRef.current.addEventListener('touchstart', start);
  }, []);

  const style = {
    x: positionRef.current.currentX,
    y: positionRef.current.currentY,
  };

  return [style, domRef];
}

export default useDrag;
