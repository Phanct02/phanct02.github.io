import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";

const Survey = () => {
  return (
    <section id="survey" className="py-16 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Khảo Sát Ý Kiến
          </h2>
          <p className="text-muted-foreground text-lg">
            Chia sẻ ý kiến của bạn để giúp chúng tôi cải thiện
          </p>
        </div>

        <Card className="border-2 hover:border-primary/50 transition-all shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <ClipboardCheck className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Tham Gia Khảo Sát</CardTitle>
            <CardDescription className="text-base">
              Góp ý của bạn rất quan trọng với chúng tôi. Vui lòng dành vài phút để hoàn thành khảo sát.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-8">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8"
              onClick={() => window.open('https://forms.gle/v7bZR38D6skfWSzd6', '_blank')}
            >
              Bắt Đầu Khảo Sát
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Thời gian: ~3-5 phút
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Survey;
