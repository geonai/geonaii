import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const FeatureCard = ({ icon: Icon, title, items }: FeatureCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">{title}</h3>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
