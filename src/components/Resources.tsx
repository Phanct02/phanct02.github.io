import { ExternalLink, BookOpen, Video, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      icon: Video,
      title: "Video hướng dẫn",
      description: "Xem các video ngắn dễ hiểu về bảo mật",
      link: "https://www.youtube.com/watch?v=22_ehwwb4NA",
    },
    {
      icon: FileText,
      title: "Tài liệu tham khảo",
      description: "Tải về các tài liệu PDF và checklist hữu ích",
      link: "https://drive.google.com/file/d/1-sWNtp1oXtC3jswNrEkmkIoIZSD0A_Tu/view?usp=sharing",
    },
  ];

  return (
    <section id="resources" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tài nguyên hữu ích
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá thêm nhiều tài liệu và công cụ giúp bạn luôn an toàn trực tuyến
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group" 
                  asChild
                >
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    Xem thêm
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
