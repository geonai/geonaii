import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  iconColor?: string;
}

export const StatCard = ({ icon: Icon, value, label, iconColor = "text-primary" }: StatCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,198,255,0.15)] w-full">
      <div className="flex flex-col items-center text-center space-y-3">
        <Icon className={`w-8 h-8 ${iconColor} transition-transform group-hover:scale-110`} />
        <div className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {value}
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};
