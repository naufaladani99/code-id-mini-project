import { useRouter } from "next/router";
import Link from "next/link";

export default function TesLink() {
  const tes = useRouter();
  const { id } = tes.query;
  return (
    <div>
      <div>
        <h1>id:{id}</h1>
      </div>
      <div>
        <Link href={`/bootcamp`}>
          <button className="btn-primary">Kembali</button>
        </Link>
      </div>
    </div>
  );
}
