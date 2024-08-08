import Card from "./card";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-row w-3/5 my-auto flex-wrap">
        <Card
          title="FIPS API"
          thumb="https://imgur.com/a/XU4w76x"
          url="https://fips-api-3c3925ce6a80.herokuapp.com/docs"
        />
      </div>
    </main>
  );
}
