import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary" | "secondary";
}

const TopicCard = ({ icon: Icon, title, description, color }: TopicCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          color === "primary" ? "gradient-primary" : "gradient-secondary"
        }`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TopicCard;
