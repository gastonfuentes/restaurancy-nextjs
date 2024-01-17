import Link from "next/link";

interface Restaurancy {
  id: string;
  name: string;
  image: string;
  description: string;
  /* address: string; */
  score: number;
  ratings: number;
}

export default function CardRestaurant(props: Restaurancy) {
  return (
    <article key={props.id}>
      <img alt={props.name} className="mb-3 h-[300px] w-full object-cover" src={props.image} />
      <Link href={`/${props.id}`}>
        <h2 className="inline-flex gap-2 text-lg font-bold">
          <span>{props.name}</span>
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span>{props.score}</span>
            <span className="font-normal opacity-75">({props.ratings})</span>
          </small>
        </h2>
      </Link>
      <p className="opacity-90">{props.description}</p>
    </article>
  );
}
