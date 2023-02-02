import JobDisclosure from "./JobDisclosure";

const Sidebar = ({
  handleMatch,
  handleNewest,
  newest,
  jobtypes,
  handleJotyChange,
  jotyTerm,
  exps,
  handleExpChange,
  expTerm,
  updates,
  setUpdTerm,
  updTerm,
}) => {
  return (
    <div className="border border-gray-200 w-11/12 md:w-3/12 px-5 py-3 flex flex-col gap-y-5">
      <p className="font-semibold text-lg border-b pb-3">Filter Pencarianmu</p>

      <JobDisclosure title="Tampilkan Berdasarkan">
        <div className="flex gap-2 justify-around">
          <button
            onClick={handleMatch}
            className={`whitespace-nowrap inline-flex items-center justify-center px-4 py-1 rounded-lg shadow-sm text-sm border border-gray-400 text-gray-500 bg-gray-300 hover:text-orange-600 font-medium ${
              !newest &&
              `border text-orange-600 border-orange-400 bg-orange-200 hover:bg-gray-300 hover:border-gray-400`
            }`}
          >
            Match
          </button>
          <button
            onClick={handleNewest}
            className={`whitespace-nowrap inline-flex items-center justify-center px-4 py-1 rounded-lg shadow-sm text-sm border border-gray-400 text-gray-500 bg-gray-300 hover:text-orange-600 font-medium ${
              newest &&
              `border text-orange-600 border-orange-400 bg-orange-200 hover:bg-gray-300 hover:border-gray-400`
            }`}
          >
            Newest
          </button>
        </div>
      </JobDisclosure>

      <JobDisclosure title="Tipe Pekerjaan">
        <div className="ml-3 text-gray-700 text-[14px] font-medium">
          {jobtypes.map((joty) => (
            <>
              <input
                type="checkbox"
                id={joty.jotyId}
                name={joty.jotyName}
                value={joty.jotyName}
                className="mr-1"
                checked={jotyTerm.includes(joty.jotyId.toString())}
                onChange={handleJotyChange}
              />
              <label for={joty.jotyName}>{joty.jotyName}</label>
              <br />
            </>
          ))}
        </div>
      </JobDisclosure>
      <JobDisclosure title="Pengalaman">
        <div className="ml-3 text-gray-700 text-[14px] font-medium">
          {exps.map((exp) => (
            <>
              <input
                type="checkbox"
                id={exp.expValue}
                name={exp.expValue}
                value={exp.expMin}
                className="mr-2"
                checked={expTerm.includes(exp.expMin.toString())}
                onChange={handleExpChange}
              />
              <label for={exp.expName}>{exp.expName}</label>
              <br />
            </>
          ))}
        </div>
      </JobDisclosure>
      <JobDisclosure title="Terupdate">
        <div className="ml-3 text-gray-700 text-[14px] font-medium">
          {updates.map((update) => (
            <>
              <input
                type="radio"
                id={update.updValue}
                name="update"
                value={update.updValue}
                className="mr-2"
                onChange={() => setUpdTerm(update.updValue)}
                checked={updTerm == update.updValue}
              />
              <label for={update.updValue}>{update.updName}</label>
              <br />
            </>
          ))}
        </div>
      </JobDisclosure>
    </div>
  );
};

export default Sidebar;
