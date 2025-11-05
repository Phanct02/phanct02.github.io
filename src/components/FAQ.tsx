import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Làm thế nào để tạo mật khẩu mạnh?",
      answer: "Mật khẩu mạnh nên có ít nhất 12 ký tự, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt. Tránh sử dụng thông tin cá nhân dễ đoán như ngày sinh, tên. Sử dụng trình quản lý mật khẩu để lưu trữ an toàn."
    },
    {
      question: "Tôi nên làm gì khi bị hack tài khoản?",
      answer: "Ngay lập tức đổi mật khẩu tất cả các tài khoản liên quan. Kích hoạt xác thực hai yếu tố. Kiểm tra các hoạt động bất thường và thông báo cho bạn bè về tình trạng tài khoản bị xâm nhập để họ cảnh giác với tin nhắn lừa đảo."
    },
    {
      question: "Làm sao nhận biết email lừa đảo?",
      answer: "Email lừa đảo thường có địa chỉ người gửi đáng ngờ, lỗi chính tả, yêu cầu cung cấp thông tin cá nhân khẩn cấp, hoặc chứa link/file đính kèm không rõ nguồn gốc. Luôn kiểm tra kỹ trước khi click vào bất kỳ đường link nào."
    },
    {
      question: "Xác thực hai yếu tố là gì?",
      answer: "Xác thực hai yếu tố (2FA) là lớp bảo mật bổ sung yêu cầu bạn cung cấp hai hình thức xác minh để đăng nhập. Thường là mật khẩu kết hợp với mã OTP gửi qua SMS/email hoặc ứng dụng xác thực. Điều này giúp bảo vệ tài khoản ngay cả khi mật khẩu bị lộ."
    },
    {
      question: "Tôi có nên sử dụng WiFi công cộng không?",
      answer: "WiFi công cộng có thể không an toàn vì dễ bị nghe lén. Nếu cần sử dụng, tránh truy cập các trang web nhạy cảm như ngân hàng, email. Sử dụng VPN để mã hóa kết nối và bảo vệ dữ liệu của bạn."
    },
    {
      question: "Làm thế nào để bảo vệ con em trên mạng xã hội?",
      answer: "Hướng dẫn trẻ về rủi ro trực tuyến, thiết lập quyền riêng tư trên tài khoản mạng xã hội, giám sát hoạt động của trẻ một cách hợp lý. Khuyến khích trẻ chia sẻ với bố mẹ nếu gặp vấn đề hoặc nội dung không phù hợp."
    },
    {
      question: "Tôi nên làm gì với thông tin cá nhân trên mạng?",
      answer: "Hạn chế chia sẻ thông tin cá nhân như địa chỉ nhà, số điện thoại, vị trí hiện tại. Kiểm tra cài đặt quyền riêng tư trên các nền tảng mạng xã hội. Chỉ chấp nhận kết bạn với người quen và tin tưởng."
    },
    {
      question: "Ransomware là gì và cách phòng tránh?",
      answer: "Ransomware là phần mềm độc hại mã hóa dữ liệu và yêu cầu tiền chuộc. Để phòng tránh: sao lưu dữ liệu thường xuyên, không mở file đính kèm đáng ngờ, cập nhật phần mềm bảo mật, và cài đặt các bản vá hệ thống kịp thời."
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold gradient-text">
              Câu hỏi thường gặp
            </h2>
            <p className="text-muted-foreground text-lg">
              Giải đáp các thắc mắc phổ biến về an toàn trực tuyến
            </p>
          </div>

          <Card className="border-2 p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
