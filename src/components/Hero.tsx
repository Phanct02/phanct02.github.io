import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-internet-safety.jpg";

const Hero = () => {
  const scrollToTopics = () => {
    const element = document.getElementById('topics');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Sử dụng Internet An toàn và Văn minh
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Tổng hợp các thông tin và mẹo hữu ích về an toàn mạng xã hội
            </p>
          </div>

          <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button 
              size="lg" 
              className="group shadow-lg hover:shadow-xl"
              onClick={scrollToTopics}
            >
              Xem nội dung
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-16 relative animate-in fade-in duration-700 delay-400">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src={heroImage} 
                alt="An toàn mạng xã hội" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
