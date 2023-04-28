import Image from "next/image";
import Link from "next/link";
import React from "react";

const Images = ({ image }) => {
  return (
    <div>
      {" "}
      <div
        key={image.url}
        className="image-container max-h-min rounded overflow-hidden shadow-lg hover:shadow-black"
      >
        <div className="object-contain">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <Image
                className="w-full h-48 object-cover transform transition-all duration-500 hover:scale-110"
                width={100}
                height={130}
                src={image.url}
                alt={image.description}
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600 mb-2">
                  {image.caption}
                </p>
                <p className="mt-3 text-base leading-6 text-gray-500">
                  {image.description}
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  {/* <a
              href="/view"
              class="text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
            /> */}
                  <Link
                    // href={`https://images.pexels.com//photos/${image.id}`}
                    href="#"
                    className="text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
