import api from "@/api";

export default async function HomePage() {
  const restaurants = await api.list();

  console.log(restaurants);

  return (
    <section>
      {restaurants.map((rest) => (
        <article key={rest.id} className="bg-slate-200">
          <img alt={rest.name} src={rest.image} />
          <h1>{rest.name}</h1>
        </article>
      ))}
    </section>
  );
}
