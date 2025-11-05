import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-xl gradient-primary shadow-lg group-hover:shadow-xl transition-all">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="text-lg font-bold group-hover:text-primary transition-colors">
                An Toàn Mạng Xã Hội
              </h1>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('topics')}
              className="hover:bg-accent"
            >
              Chủ đề
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('tips')}
              className="hover:bg-accent"
            >
              Mẹo hay
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('security-tools')}
              className="hover:bg-accent"
            >
              Công cụ
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('resources')}
              className="hover:bg-accent"
            >
              Tài liệu
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('survey')}
              className="hover:bg-accent"
            >
              Khảo sát
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('faq')}
              className="hover:bg-accent"
            >
              FAQ
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => scrollToSection('topics')}
                >
                  Chủ đề
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => scrollToSection('tips')}
                >
                  Mẹo hay
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => scrollToSection('security-tools')}
                >
                  Công cụ
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => scrollToSection('resources')}
                >
                  Tài liệu
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => scrollToSection('survey')}
                >
                  Khảo sát
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => scrollToSection('faq')}
                >
                  FAQ
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
