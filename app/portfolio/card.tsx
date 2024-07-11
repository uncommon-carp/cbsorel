import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  thumb: string;
  url: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="w-1/3 m-4">
      <Image src={props.thumb} alt="Project thumb" />
      <Link href={props.url ?? "#"}>
        <h2>{props.title}</h2>
      </Link>
    </div>
  );
}
