import PairCollection from "./components/PairCollection";
import ScienceImg from "./assets/alien_science.svg";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="container relative mx-auto flex min-h-screen flex-col items-center py-16 text-slate-600">
        <div
          className="absolute left-0 top-0 -z-50 h-full w-full"
          style={{
            backgroundImage: `url(${ScienceImg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.15,
          }}
        />
        <h1 className="text-center text-4xl font-bold">Emparejados</h1>
        <PairCollection />
      </div>
      <button
        className="fixed bottom-2 left-2 rounded bg-slate-100 px-4 py-2 font-bold text-slate-200 hover:bg-slate-200 hover:text-slate-100"
        title="Illustration by unDraw"
      >
        !
      </button>
      <ToastContainer theme="dark" />
    </>
  );
};

export default App;
