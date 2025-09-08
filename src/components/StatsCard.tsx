import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  color?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  icon, 
  trend,
  color = "text-primary"
}: StatsCardProps) => {
  return (
    <Card className="hover:shadow-card transition-all duration-300 border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className={`p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary-glow/10 ${color}`}>
            {icon}
          </div>
          {trend && (
            <span className="text-xs font-medium text-success">
              {trend}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};