import Card from "./card";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-row w-3/5 my-auto flex-wrap">
        <Card title="FIPS API" thumb="" />
        <div className="w-1/3 m-4">
          <h2>Pescador</h2>
        </div>
        <div className="w-1/3 m-4">
          <h2>FIPS County Codes</h2>
        </div>
        <div className="w-1/3 m-4">
          <h2>Pescador</h2>
        </div>
      </div>
    </main>
  );
}
