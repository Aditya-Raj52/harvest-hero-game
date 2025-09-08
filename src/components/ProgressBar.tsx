import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  label: string;
  current: number;
  max: number;
  color?: string;
  showNumbers?: boolean;
}

export const ProgressBar = ({ 
  label, 
  current, 
  max, 
  color = "bg-gradient-to-r from-primary to-primary-glow",
  showNumbers = true 
}: ProgressBarProps) => {
  const percentage = Math.min((current / max) * 100, 100);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {showNumbers && (
          <span className="text-xs text-muted-foreground">
            {current.toLocaleString()} / {max.toLocaleString()}
          </span>
        )}
      </div>
      <div className="relative">
        <Progress value={percentage} className="h-2" />
        <div 
          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};