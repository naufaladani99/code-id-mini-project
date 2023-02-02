import JobCard from "./JobCard";
import Pagination from "./Pagination";

const JobContainer = ({
  currentJopo,
  filteredJopos,
  jopoPerPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div>
      <div className="min-w-8/12 grid grid-cols-1 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-4">
        {currentJopo && currentJopo.length > 0 ? (
          currentJopo
            // .filter((jopo) =>
            //   jotyTerm.includes(jopo.jopoJoty.jotyId.toString()) &&
            //   updTerm >= calculateDate(jopo.jopoPublishDate) &&
            //   (
            //   expTerm.includes(jopo.jopoMinExperience.toString())
            //   )
            // )
            .map((jopo) => (
              <JobCard
                key={jopo.jopoId}
                id={jopo.jopoId}
                title={jopo.jopoTitle}
                publishDate={jopo.jopoPublishDate}
                minExp={jopo.jopoMinExperience}
                maxExp={jopo.jopoMaxExperience}
                clitName={jopo.jopoClit.clitName}
                clitLogo={jopo.jopoClit.clitLogo}
              />
            ))
        ) : (
          <div className="font-medium text-lg text-center w-full">
            <p>No Job Found</p>
          </div>
        )}
      </div>
      <div className="mt-5 flex justify-center items-end">
        {filteredJopos.length > 0 && (
          <Pagination
            totalData={filteredJopos.length}
            jopoPerPage={jopoPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default JobContainer;
