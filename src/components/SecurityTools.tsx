import { Shield, Search, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SecurityTools = () => {
  const antivirusApps = [
    {
      name: "Kaspersky Anti-Virus",
      description: "Phần mềm diệt virus hàng đầu với khả năng phát hiện và ngăn chặn mối đe dọa theo thời gian thực. Bảo vệ toàn diện khỏi virus, trojan, ransomware và các phần mềm độc hại khác.",
      features: ["Quét thời gian thực", "Bảo vệ web", "Firewall tích hợp", "Cập nhật tự động"],
      link: "https://www.kaspersky.com/"
    },
    {
      name: "Malwarebytes",
      description: "Công cụ chuyên dụng phát hiện và loại bỏ malware, adware, spyware. Hoạt động tốt cùng với phần mềm antivirus khác để tăng cường bảo mật.",
      features: ["Quét sâu malware", "Chặn ransomware", "Bảo vệ web", "Phát hiện rootkit"],
      link: "https://www.malwarebytes.com/"
    }
  ];

  const malwareDetectors = [
    {
      name: "VirusTotal",
      description: "Dịch vụ phân tích file và URL miễn phí sử dụng hơn 70 công cụ antivirus và scanners khác nhau để phát hiện mọi loại malware.",
      url: "virustotal.com",
      link: "https://www.virustotal.com/"
    },
    {
      name: "Triage",
      description: "Nền tảng phân tích malware tự động, cung cấp sandbox để chạy file nghi ngờ trong môi trường an toàn và quan sát hành vi của chúng.",
      url: "tria.ge",
      link: "https://tria.ge/"
    },
    {
      name: "ANY.RUN",
      description: "Sandbox tương tác cho phép phân tích malware theo thời gian thực. Bạn có thể xem file hoạt động như thế nào trong môi trường an toàn.",
      url: "any.run",
      link: "https://any.run/"
    },
    {
      name: "UncoverIt",
      description: "Công cụ phân tích URL và website để phát hiện các trang web lừa đảo, phishing và các mối đe dọa trực tuyến khác.",
      url: "uncoverit.org",
      link: "https://uncoverit.org/"
    }
  ];

  return (
    <section className="py-20 bg-background" id="security-tools">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Antivirus Section */}
          <div className="mb-16">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold gradient-text">
                Phần mềm diệt virus
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Các ứng dụng bảo mật đáng tin cậy giúp bảo vệ thiết bị của bạn
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {antivirusApps.map((app, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {app.name}
                      <a 
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Tính năng nổi bật:</h4>
                      <ul className="space-y-1">
                        {app.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Malware Detection Tools Section */}
          <div>
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-4">
                <Search className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-4xl font-bold gradient-text">
                Công cụ phát hiện Malware
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Kiểm tra file và URL nghi ngờ trước khi sử dụng
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {malwareDetectors.map((tool, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-lg transition-all duration-300 hover:border-secondary/50 group"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {tool.name}
                      <a 
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(tool.link, '_blank')}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Truy cập {tool.url}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Hướng dẫn sử dụng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    1
                  </div>
                  <p>
                    <strong className="text-foreground">Trước khi tải xuống:</strong> Kiểm tra file hoặc link với VirusTotal hoặc UncoverIt để xác định nguồn gốc an toàn.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    2
                  </div>
                  <p>
                    <strong className="text-foreground">Phân tích sâu:</strong> Sử dụng Triage hoặc ANY.RUN để xem file nghi ngờ hoạt động như thế nào trong môi trường sandbox.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    3
                  </div>
                  <p>
                    <strong className="text-foreground">Bảo vệ thường xuyên:</strong> Cài đặt phần mềm antivirus như Kaspersky hoặc Malwarebytes để bảo vệ liên tục.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTools;
