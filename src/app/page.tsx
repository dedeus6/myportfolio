import Header from "@/app/components/Header";
import HomePage from "@/app/pages/homePage";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <HomePage />
    </div>
  );
}
