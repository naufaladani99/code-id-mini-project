import { GetCosmRequest } from "../../redux-saga/Action/CosmAction";

export default function Titless() {
  const dispatch = useDispatch();
  const cosms = useSelector((state) => state.cosmStated.cosms);
  useEffect(() => {
    dispatch(GetCosmRequest());
    console.log(cosms);
  }, []);

  return (
    <div>
      <div className="border-y border-solid border-black bg-black px-4 py-2 pl-5 h-fit text-white brake-words">
        <h1 className="text-4xl">NodesJS Full Stack</h1>
        <p key={cosms.cosmId}>
          {cosms.cosmCose.coseCont.contProg.corseProg.progHeadline}
        </p>
      </div>
      <div className="basis-1/4 border border-solid border-black w-max h-max">
        <iframe
          className="object-scale-down h-315 w-300"
          src="https://www.youtube.com/embed/sSLJx5t4OJ4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button className="button button3">Apply Regular Bootcamp</button>
        <h1>Persyaratan : </h1>
      </div>
    </div>
  );
}
