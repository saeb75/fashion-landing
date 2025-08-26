import MainHeader from "./Components/Header/MainHeader";
import Footer from "./Components/Footer/Footer";
import UserReview from "./Components/UserReview";
import OperationSection from "./Components/OperationSection/OperationSection";
import Contact from "./Components/Contact/Contact";

export default function Home() {
  return (
    <>
      <div className=" bg-gradient-to-br from-gray-50 to-white">
        <MainHeader />
        <OperationSection />
        <UserReview />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
