import { BriefcaseIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline";
import Link from "next/link";

const JobCard = ({
  title,
  publishDate,
  minExp,
  maxExp,
  clitName,
  clitLogo,
  id,
}) => {
  const date = new Date(publishDate);
  const currentTime = new Date();

  const diff = currentTime - date;
  const elapsed = Math.round(diff / (1000 * 60 * 60 * 24));

  const time = (elapsed) => {
    if (elapsed <= 1) {
      return `Hari ini`;
    } else if (elapsed >= 30) {
      return `Lebih dari sebulan yang lalu`;
    } else {
      return `${elapsed} hari yang lalu`;
    }
  };

  const exp = (minExp, maxExp) => {
    if (minExp < 1) {
      return `< 1 Tahun`;
    } else if (minExp >= 10) {
      return `> 10 Tahun`;
    } else {
      return `${minExp}-${maxExp} Tahun`;
    }
  };

  return (
    <Link href={`jobs/${id}`}>
      <div className="flex flex-col justify-between border shadow-md h-52 w-96 p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="flex justify-start items-center">
          <div className="w-32 flex justify-center items-center">
            <img
              src={
                clitLogo
                  ? `./assets/images/${clitLogo}`
                  : "https://startupjobs.asia/assets/d63988b5/65cdde2d/images/default/company-logo-placeholder.png?v=1666170268"
              }
              alt="logo"
              className="h-5"
            />
          </div>
          <div className="pl-8">
            <p className="font-semibold text-lg">{title}</p>
            <p>{clitName}</p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <LocationMarkerIcon className="h-4 w-4" />
              <p className="font-medium text-sm">Jakarta</p>
            </div>
            <div className="flex items-center gap-1">
              <BriefcaseIcon className="h-4 w-4" />
              <p className="font-medium text-sm">{exp(minExp, maxExp)}</p>
            </div>
            <div className="flex items-center gap-1 bg-orange-300 p-0.5 rounded ">
              <CalendarIcon className="h-4 w-4" />
              <span className="font-medium text-xs">Actively Hiring</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            <span className="font-medium text-xs"> {time(elapsed)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
