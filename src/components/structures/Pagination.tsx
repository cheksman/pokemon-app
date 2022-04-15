import React from "react";
import Input from "../basics/Input";
import { LeftCaretIcon, RightCaretIcon } from "../svg/Icons";

type Props = {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  maxNumber: number;
};

const Pagination: React.FC<Props> = ({
  pageNumber,
  setPageNumber,
  maxNumber,
}) => {
  return (
    <section className="flex flex-row justify-center">
      <button
        className="p-2 bg-slate-200 "
        disabled={pageNumber === 1 ? true : false}
        onClick={() => {
          setPageNumber(pageNumber - 1);
        }}
      >
        <LeftCaretIcon />
      </button>
      <div className="border">
        <Input
          disabled={true}
          className="h-9 font-black text-center w-12"
          value={pageNumber}
          type="number"
          min="1"
          max={String(maxNumber)}
          onChange={(e) => setPageNumber(Number(e.target.value))}
        />
      </div>
      <button
        className="p-2 bg-slate-200"
        disabled={pageNumber === maxNumber ? true : false}
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        <RightCaretIcon />
      </button>
    </section>
  );
};

export default Pagination;
