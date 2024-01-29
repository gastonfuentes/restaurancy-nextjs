export default function CardRestaurantSkeleton() {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <article className=" animate-pulse bg-gray-200 p-4 opacity-20">
        <img alt="" className="mb-3 h-[300px] w-full rounded-xl bg-gray-400 object-cover" />
        <h2 className="inline-flex w-full gap-2 rounded-lg bg-gray-400 text-lg font-bold">
          <span />
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span />
            <span className="font-normal opacity-75">()</span>
          </small>
        </h2>
        <p className="h-12 rounded-xl bg-gray-400" />
      </article>
      <article className=" animate-pulse bg-gray-200 p-4 opacity-20">
        <img alt="" className="mb-3 h-[300px] w-full rounded-xl bg-gray-400 object-cover" />
        <h2 className="inline-flex w-full gap-2 rounded-lg bg-gray-400 text-lg font-bold">
          <span />
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span />
            <span className="font-normal opacity-75">()</span>
          </small>
        </h2>
        <p className="h-12 rounded-xl bg-gray-400" />
      </article>
      <article className=" animate-pulse bg-gray-200 p-4 opacity-20">
        <img alt="" className="mb-3 h-[300px] w-full rounded-xl bg-gray-400 object-cover" />
        <h2 className="inline-flex w-full gap-2 rounded-lg bg-gray-400 text-lg font-bold">
          <span />
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span />
            <span className="font-normal opacity-75">()</span>
          </small>
        </h2>
        <p className="h-12 rounded-xl bg-gray-400" />
      </article>
    </section>
  );
}
