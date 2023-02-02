const SearchJob = ({
  setKeyword,
  setLocation,
  setCategory,
  keyword,
  location,
  category,
  jobcategories,
  handleSearch,
}) => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-y-4 md:gap-y-0 gap-x-5 py-5 justify-center px-16 border shadow my-5 rounded">
      <input
        type="text"
        placeholder="Jabatan, Kata Kunci, Perusahaan"
        className="rounded w-full md:w-4/12 bg-gray-50 border-gray-200"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        className="rounded w-full md:w-4/12 bg-gray-50 border-gray-200"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        className="rounded w-full md:w-4/12 bg-gray-50 border-gray-200"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {jobcategories.map((joca) => (
          <option key={joca.jocaId} value={joca.jocaId}>
            {joca.jocaName}
          </option>
        ))}
      </select>
      <button
        onClick={handleSearch}
        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 w-full md:w-min"
      >
        Search
      </button>
    </div>
  );
};

export default SearchJob;
