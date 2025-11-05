import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl gradient-primary shadow-lg">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">An Toàn Mạng Xã Hội</h3>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trang web tổng hợp thông tin về an toàn mạng xã hội và cách phòng tránh rủi ro trực tuyến.
          </p>

          <div className="border-t border-border pt-8 space-y-3">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 An Toàn Mạng Xã Hội
            </p>
            <p className="text-sm text-muted-foreground">
              Được tạo bởi{" "}
              <a 
                href="https://github.com/Phanct02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium"
              >
                Phanct02
              </a>
              {" (Phan Chí Tài), "}
              <span className="font-medium">Trịnh Đức Trung</span>
              {", "}
              <a 
                href="https://claude.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium"
              >
                Claude
              </a>
            </p>
            <div className="text-xs text-muted-foreground/80 max-w-xl mx-auto pt-2 border-t border-border/50 space-y-2">
              <p className="italic">
                <strong>Phân công:</strong>
              </p>
              <ul className="list-none space-y-1">
                <li>• Ý tưởng, Research: Phanct02</li>
                <li>• Design, Effects: Claude</li>
                <li>• Ảnh, Icons, FAQ, Mẹo: Trịnh Đức Trung</li>
                <li className="opacity-70">• Bí Ý tưởng Phần Tài Nguyên, lười research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
