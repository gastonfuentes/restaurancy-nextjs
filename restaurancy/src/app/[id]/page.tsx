import Link from "next/link";

import api from "@/api";

import CardRestaurant from "../components/CardRestaurant";

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return (
    <section className="flex flex-col gap-2">
      <CardRestaurant
        description={restaurant.description}
        id={restaurant.id}
        image={restaurant.image}
        name={restaurant.name}
        ratings={restaurant.ratings}
        score={restaurant.score}
      />
      <Link href="/">
        <span className=" rounded-full bg-slate-300 px-3 py-1 font-semibold text-black">
          Regresar
        </span>
      </Link>
    </section>
  );
}
