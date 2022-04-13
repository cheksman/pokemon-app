import React from "react";

type Props = {
    image: string;
    title: string;
    altText: string;
    onClick?: React.MouseEventHandler<HTMLElement>
}

const DisplayBox: React.FC<Props> = ({
    image,
    altText,
    title,
    onClick
}) => {
  return (
    <section role="button" className="w-full p-4 rounded-full hover:bg-zinc-100" onClick={onClick}>
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={altText}
          className="rounded-full w-20 h-20"
        />
      </div>
      <div className="w-full">
        <h4 role="button" className="text-black-600 text-center">{title}</h4>
      </div>
    </section>
  );
};

export default DisplayBox;