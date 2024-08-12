import PairCollection from "./components/PairCollection";

const App = () => {
  return (
    <div className="container mx-auto mt-16 flex min-h-screen flex-col items-center text-slate-600">
      <h1 className="text-center text-4xl font-bold">Emparejados</h1>
      <PairCollection />
    </div>
  );
};

export default App;
