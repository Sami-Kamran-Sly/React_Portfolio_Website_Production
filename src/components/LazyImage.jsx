import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const LazyImage = ({ src, alt, hash, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div style={{ width, height }}>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      
      {imageLoaded && 
      <picture>

      <img src={src} loading="lazy" alt={alt} width={width} height={height} />
      
      </picture>
      }
    </div>
  );
};

export default LazyImage;
