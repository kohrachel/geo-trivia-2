export default function Home() {
  return (
    <div>
      {/* Header */}
      <h1 className="w-full text-center bg-blue-600">Guess the Country!</h1>
      <h2 className="w-full text-center bg-blue-600">
        Can you guess the country based on its capital city and flag?
      </h2>

      {/* Hints */}
      <div className="w-full text-center bg-yellow-600">Capital: </div>
      <div className="w-full text-center bg-yellow-600">Facts: </div>
      <div className="w-full text-center bg-yellow-600">Flag</div>

      {/* Input */}
      <form>
        <input placeholder="Guess the country!" />
        <button>Guess</button>
      </form>
    </div>
  );
}
