"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import GalleryTab from "./gallery-tab";

import { Image as ImageType } from "@/types";

interface GalleryProps {
  images: ImageType[];
}


const Gallery: React.FC<GalleryProps> = ({
  images
}) => {
  return (
    <Tab.Group as="div" className="flex flex-col">
      <Tab.Panels>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-contain"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
      <div className="mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}

export default Gallery;