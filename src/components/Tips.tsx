import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tips = () => {
  const tips = [
    "Luôn sử dụng mật khẩu mạnh và khác nhau cho mỗi tài khoản",
    "Kích hoạt xác thực hai yếu tố (2FA) khi có thể",
    "Không chia sẻ thông tin cá nhân với người lạ trực tuyến",
    "Kiểm tra kỹ nguồn gốc trước khi click vào link lạ",
    "Cập nhật phần mềm và hệ điều hành thường xuyên",
    "Sử dụng mạng Wi-Fi công cộng cẩn thận, tránh giao dịch nhạy cảm",
    "Đọc kỹ điều khoản dịch vụ trước khi đồng ý",
    "Sao lưu dữ liệu quan trọng định kỳ",
    "Tôn trọng bản quyền và sở hữu trí tuệ của người khác",
    "Dạy trẻ em về an toàn Internet và giám sát hoạt động online",
  ];

  return (
    <section id="tips" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              10 mẹo sử dụng Internet an toàn
            </h2>
            <p className="text-lg text-muted-foreground">
              Những thói quen đơn giản giúp bạn bảo vệ mình trực tuyến
            </p>
          </div>
          <Card className="border-2 animate-float">
            <CardHeader>
              <CardTitle className="text-2xl">Danh sách kiểm tra hàng ngày</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 group animate-in fade-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tips;
