import React from "react";

type Props = {
    image: string;
    link?: string;
    title: string;
    description: string;
}

const DisplayBox: React.FC<Props> = ({
    image,
    link,
    title,
    description
}) => {
  return (
    <div className="w-full bg-white rounded shadow-2xl">
      <div className="flex flex-row items-center justify-center p-2">
        <div className="w-1/4 flex items-center justify-center">
        </div>
        <div className="w-3/4">
          <h3 className="text-xs">{title}</h3>
        </div>
      </div>
      <div className="h-52 md:h-44 lg:h-40 xl:h-36">
        <img
          src={image}
          alt="school"
          className="h-full w-full"
        />
      </div>
      <div className="h-28 p-2">
        <p className="text-sm text-center text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DisplayBox;