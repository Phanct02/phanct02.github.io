import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Topics from "@/components/Topics";
import Tips from "@/components/Tips";
import SecurityTools from "@/components/SecurityTools";
import Resources from "@/components/Resources";
import Survey from "@/components/Survey";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Topics />
        <Tips />
        <SecurityTools />
        <Resources />
        <Survey />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
