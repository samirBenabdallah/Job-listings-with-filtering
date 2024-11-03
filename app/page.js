import Header from "./components/Header";
import Main from "./components/Main";

export default async function Home() {
  return (
    <div className="w-full h-max">
      <Header />
      <Main />
    </div>
  );
}
