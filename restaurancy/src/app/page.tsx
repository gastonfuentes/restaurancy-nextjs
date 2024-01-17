import api from "@/api";

import CardRestaurant from "./components/CardRestaurant";

export default async function HomePage() {
  const restaurants = await api.list();
  /* console.log(restaurants); */

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {restaurants.map((rest) => (
        <CardRestaurant
          key={rest.id}
          description={rest.description}
          id={rest.id}
          image={rest.image}
          name={rest.name}
          ratings={rest.ratings}
          score={rest.score}
        />
      ))}
    </section>
  );
}
