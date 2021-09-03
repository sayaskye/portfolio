import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypeWriter = ({ text, typeSpeed = 90, classElements = '' }) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [text],
      typeSpeed,
      backSpeed: 50,
      autoInsertCss: true,
      shuffle: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span className={`${classElements} `} ref={typeTarget} />
  );
};

export default TypeWriter;