import Image from "next/image";

interface CardProps {
  title: string;
  thumb: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="w-1/3 m-4">
      <Image src={props.thumb} alt="Project thumb" />
      <h2>{props.title}</h2>
    </div>
  );
}
