import Header from "@/components/Header";
import HomePage from "@/pages/homePage";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <HomePage />
    </div>
  );
}
