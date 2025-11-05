import { Lock, MessageCircle, AlertTriangle, UserCheck, Globe, Eye } from "lucide-react";
import TopicCard from "./TopicCard";

const Topics = () => {
  const topics = [
    {
      icon: Lock,
      title: "Bảo mật thông tin",
      description: "Học cách bảo vệ mật khẩu, dữ liệu cá nhân và tài khoản trực tuyến khỏi tin tặc và kẻ xấu.",
      color: "primary" as const,
    },
    {
      icon: MessageCircle,
      title: "Giao tiếp văn minh",
      description: "Hiểu về văn hóa ứng xử trên mạng, tránh nói tục, spam và tôn trọng người khác.",
      color: "secondary" as const,
    },
    {
      icon: AlertTriangle,
      title: "Nhận diện lừa đảo",
      description: "Phát hiện email giả mạo, website lừa đảo và các hình thức gian lận trực tuyến.",
      color: "primary" as const,
    },
    {
      icon: UserCheck,
      title: "Quyền riêng tư",
      description: "Kiểm soát thông tin cá nhân, hiểu về quyền riêng tư và cách bảo vệ danh tính.",
      color: "secondary" as const,
    },
    {
      icon: Globe,
      title: "Mạng xã hội an toàn",
      description: "Sử dụng Facebook, TikTok, Instagram một cách thông minh và an toàn.",
      color: "primary" as const,
    },
    {
      icon: Eye,
      title: "Kiểm chứng thông tin",
      description: "Phân biệt tin thật - tin giả, tránh chia sẻ thông tin sai lệch và fake news.",
      color: "secondary" as const,
    },
  ];

  return (
    <section id="topics" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Các chủ đề quan trọng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tìm hiểu những kiến thức cần thiết để bảo vệ bản thân và cộng đồng trên môi trường mạng
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TopicCard {...topic} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
