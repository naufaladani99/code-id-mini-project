const JobCount = ({ filteredJopos, viewKeyword }) => {
  return (
    <p className="text-xl mb-3 mt-6 font-semibold text-gray-800">
      {filteredJopos?.length} Lowongan Kerja {viewKeyword} di Indonesia
    </p>
  );
};

export default JobCount;