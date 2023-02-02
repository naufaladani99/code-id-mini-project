import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRef } from "react";

const ClientCarousel = ({ clients }) => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="flex justify-center items-center border shadow">
      <div>
        <ChevronLeftIcon
          className="h-16 w-16 text-gray-600 cursor-pointer hover:text-gray-800"
          onClick={() => scroll(-40)}
        />
      </div>
      <div
        className="flex gap-x-5 py-6 justify-center items-center px-16 my-5 rounded overflow-x-auto scrollbar-hide border shadow-inner"
        ref={ref}
      >
        {clients.map((clit) => (
          <img
            key={clit.clitName}
            src={`./assets/images/${clit.clitLogo}`}
            className="h-8 sm:h-12"
            alt="network-logo"
          />
        ))}
      </div>
      <div>
        <ChevronRightIcon
          className="h-16 w-16 text-gray-600 cursor-pointer hover:text-gray-800"
          onClick={() => scroll(40)}
        />
      </div>
    </div>
  );
};

export default ClientCarousel;
