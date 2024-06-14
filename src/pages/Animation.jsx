import useAnimation from '../hooks/useAnimation';

import './Animation.css';

const Animation = () => {
  const [className, toggle] = useAnimation('circle', 'circle-active');

  return <div className={className} onClick={toggle}></div>;
};

export default Animation;
