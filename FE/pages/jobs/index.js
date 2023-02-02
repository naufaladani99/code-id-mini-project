import LandingPage from "../component/layout/LandingPage";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetJobTypeRequest } from "../redux-saga/Action/JobTypeAction";
import { GetJobCategoryRequest } from "../redux-saga/Action/JobCategoryAction";
import { GetJobPostRequest } from "../redux-saga/Action/JobPostAction";
import { GetClientRequest } from "../redux-saga/Action/ClientAction";
import Head from "next/head";
import ClientCarousel from "../component/jobhiring/ClientCarousel";
import SearchJob from "../component/jobhiring/SearchJob";
import JobCount from "../component/jobhiring/JobCount";
import Sidebar from "../component/jobhiring/Sidebar";
import JobContainer from "../component/jobhiring/JobContainer";
import Wrapper from "../component/jobhiring/Wrapper";
import Container from "../component/jobhiring/Container";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobtypes } = useSelector((state) => state.jotyStated);
  const { jobcategories } = useSelector((state) => state.jocaStated);
  const { jobposts } = useSelector((state) => state.jopoStated);
  const { clients } = useSelector((state) => state.clitStated);

  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [location, setLocation] = useState("Indonesia");
  const [viewKeyword, setViewKeyword] = useState("");
  const [category, setCategory] = useState("1");
  const [jotyTerm, setJotyTerm] = useState(["1", "2", "3", "4", "5", "6"]);
  const [updTerm, setUpdTerm] = useState("365");
  // const [expTerm, setExpTerm] = useState(["0,1", "1,3", "5,10", "10"]);
  const [expTerm, setExpTerm] = useState(["0", "1", "3", "5", "10"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newest, setNewest] = useState(false);
  const [match, setMatch] = useState(false);
  const jopoPerPage = 8;

  const exps = [
    {
      expValue: "0,1",
      expMin: 0,
      expMax: 1,
      expName: "< 1 Tahun",
    },
    {
      expValue: "1,3",
      expMin: 1,
      expMax: 3,
      expName: "1-3 Tahun",
    },
    {
      expValue: "3,5",
      expMin: 3,
      expMax: 5,
      expName: "3-5 Tahun",
    },
    {
      expValue: "5,10",
      expMin: 5,
      expMax: 10,
      expName: "5-10 Tahun",
    },
    {
      expValue: "10",
      expMin: 10,
      expMax: null,
      expName: "> 10 Tahun",
    },
  ];

  const updates = [
    {
      updValue: 1,
      updName: "24 Jam Terakhir",
    },
    {
      updValue: 7,
      updName: "Seminggu Terakhir",
    },
    {
      updValue: 30,
      updName: "Sebulan Terakhir",
    },
    {
      updValue: 365,
      updName: "Kapan Pun",
    },
  ];

  const handleSearch = () => {
    setSearchTerm(keyword);
    setCategoryTerm(category);
  };

  const calculateDate = (publishDate) => {
    const date = new Date(publishDate);
    const currentTime = new Date();

    const diff = currentTime - date;
    const elapsed = Math.round(diff / (1000 * 60 * 60 * 24));
    return elapsed;
  };

  const filteredJopos = useMemo(() => {
    if (categoryTerm.length > 0 || searchTerm.length > 0) {
      setCurrentPage(1);
      setViewKeyword(searchTerm);
      return jobposts.filter((jopo) => {
        return (
          (jopo.jopoTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            jopo.jopoClit.clitName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())) &&
          categoryTerm.includes(jopo.jopoJoca.jocaId)
        );
      });
    }
    if (jotyTerm.length > 0 || updTerm.length > 0 || expTerm.length > 0) {
      setCurrentPage(1);
      return jobposts.filter((jopo) => {
        return (
          jotyTerm.includes(jopo.jopoJoty.jotyId.toString()) &&
          updTerm >= calculateDate(jopo.jopoPublishDate) &&
          expTerm.includes(jopo.jopoMinExperience.toString())
        );
      });
    }
    return jobposts;
  }, [searchTerm, categoryTerm, jobposts, jotyTerm, updTerm, expTerm]);

  const handleJotyChange = (e) => {
    let newArray = [...jotyTerm, e.target.id];
    if (jotyTerm.includes(e.target.id)) {
      newArray = newArray.filter((item) => item !== e.target.id);
    }
    setJotyTerm(newArray);
  };

  const handleExpChange = (e) => {
    let newArray = [...expTerm, e.target.value];
    if (expTerm.includes(e.target.value)) {
      newArray = newArray.filter((item) => item !== e.target.value);
    }
    setExpTerm(newArray);
  };

  useEffect(() => {
    dispatch(GetJobPostRequest());
  }, [match]);

  useEffect(() => {
    dispatch(GetJobTypeRequest());
    dispatch(GetJobCategoryRequest());
    dispatch(GetClientRequest());
  }, []);

  // Pagination
  const lastJopoIndex = currentPage * jopoPerPage;
  const firstJopoIndex = lastJopoIndex - jopoPerPage;
  const currentJopo = filteredJopos.slice(firstJopoIndex, lastJopoIndex);

  const compare = (a, b) => {
    if (a.jopoPublishDate > b.jopoPublishDate) {
      return -1;
    }
    if (a.jopoPublishDate < b.jopoPublishDate) {
      return 1;
    }
    return 0;
  };

  const handleNewest = () => {
    setNewest(true);
    filteredJopos.sort(compare);
  };

  const handleMatch = () => {
    setMatch(!match);
    setNewest(false);
  };

  return (
    <LandingPage>
      <Head>
        <title>Lowongan Pekerjaan | CodeAcademy</title>
      </Head>
      <Wrapper>
        <ClientCarousel clients={clients} />
        <SearchJob
          handleSearch={handleSearch}
          jobcategories={jobcategories}
          keyword={keyword}
          location={location}
          category={category}
          setKeyword={setKeyword}
          setCategory={setCategory}
          setLocation={setLocation}
        />
        <JobCount filteredJopos={filteredJopos} viewKeyword={viewKeyword} />

        {/* Container */}
        <Container>
          {/* Sidebar Filter */}
          <Sidebar
            handleMatch={handleMatch}
            handleNewest={handleNewest}
            newest={newest}
            jobtypes={jobtypes}
            handleJotyChange={handleJotyChange}
            jotyTerm={jotyTerm}
            exps={exps}
            handleExpChange={handleExpChange}
            expTerm={expTerm}
            updates={updates}
            setUpdTerm={setUpdTerm}
            updTerm={updTerm}
          />

          {/* Job Container */}
          <JobContainer
            currentJopo={currentJopo}
            filteredJopos={filteredJopos}
            jopoPerPage={jopoPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Container>
      </Wrapper>
    </LandingPage>
  );
};

export default Jobs;
