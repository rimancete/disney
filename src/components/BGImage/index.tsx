import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Box = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
`;

function getWindowsDimensions() {
  const { innerHeight: height, innerWidth: width } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  const [width, setWidth] = useState<number>();
  const [heigth, setHeigth] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowsDimensions();
    setWidth(width);
    setHeigth(height);
  }, []);

  useEffect(() => {
    const handleSize = () => {
      const { width, height } = getWindowsDimensions();
      setWidth(width);
      setHeigth(height);
    };

    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  if (width && heigth) {
    return (
      <Box>
        <Image
          src={`https://source.unsplash.com/${width}x${heigth}/?disney`}
          width={width}
          height={heigth}
        />
      </Box>
    );
  }
  return null;
}

export default BGImage;
