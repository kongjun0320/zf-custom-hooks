import useDrag from '../hooks/useDrag';

const basicStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
};

const Drag = () => {
  // 自定义 hook 本质上是逻辑的复用，而非数据的复用
  const [style1, dragRef1] = useDrag();
  const [style2, dragRef2] = useDrag();
  return (
    <>
      <div
        ref={dragRef1}
        style={{
          ...basicStyle,
          backgroundColor: 'red',
          transform: `translate(${style1.x}px,${style1.y}px)`,
        }}
      ></div>
      <div
        ref={dragRef2}
        style={{
          ...basicStyle,
          backgroundColor: 'green',
          transform: `translate(${style2.x}px,${style2.y}px)`,
        }}
      ></div>
    </>
  );
};

export default Drag;
