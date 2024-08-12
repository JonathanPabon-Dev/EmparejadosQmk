import PairCollection from "./components/PairCollection";

const App = () => {
  return (
    <div className="container mx-auto my-10 flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold">Emparejados</h1>
      <PairCollection />
    </div>
  );
};

export default App;
