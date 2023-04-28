import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Images from "./Images";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
      {images.map((image) => (
        <Images key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGallery;
