import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* Align button */}
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
