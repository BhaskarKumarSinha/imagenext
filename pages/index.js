import ImageGallery from "../components/ImageGallery";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredImages(images);
  }, [images]);

  return (
    <div className="bg-gradient-to-b from-sky-500 to-pink-500">
      <SearchBar images={images} setFilteredImages={setFilteredImages} />
      <ImageGallery images={filteredImages} />
    </div>
  );
}
