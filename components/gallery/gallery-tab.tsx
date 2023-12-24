import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import {Image as ImageType} from "@/types";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return (
    <Tab className="relative aspect-square ">
      {({selected}) => (
        <div>
          <span className="absolute inset-0 h-full w-full">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover"
            />
          </span>
          <span className={cn(
            "absolute inset-0 rounded-md ring-2",
            selected ? "ring-black" : "ring-transparent"
          )} />
        </div>
      )}
    </Tab>
  );
}

export default GalleryTab;