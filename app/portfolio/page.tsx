import Card from "./card";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-row w-3/5 my-auto flex-wrap">
        <Card
          title="FIPS API"
          thumb=""
          url="https://fips-code-api.herokuapp.com"
        />
        <Card title="Pescador" thumb="" url="" />
      </div>
    </main>
  );
}
