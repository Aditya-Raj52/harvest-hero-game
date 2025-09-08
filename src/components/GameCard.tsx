import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Users, BookOpen, Target, Zap, Award } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  buttonText: string;
  onClick: () => void;
  gradient?: string;
}

export const GameCard = ({ 
  title, 
  description, 
  icon, 
  badge, 
  buttonText, 
  onClick,
  gradient = "bg-gradient-to-br from-primary to-primary-glow"
}: GameCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
      <div className={`h-2 ${gradient}`} />
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl ${gradient} text-white/90 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          {badge && (
            <Badge variant="secondary" className="text-xs font-medium">
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <Button 
          onClick={onClick}
          className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
          size="sm"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export const gameFeatures = [
  {
    title: "Farm Simulation",
    description: "Build and manage your virtual sustainable farm with real-world impact",
    icon: <Zap className="w-5 h-5" />,
    badge: "Popular",
    buttonText: "Start Farming",
    gradient: "bg-gradient-to-br from-success to-green-500"
  },
  {
    title: "Daily Challenges",
    description: "Complete sustainable farming tasks and earn rewards every day",
    icon: <Target className="w-5 h-5" />,
    badge: "3 Active",
    buttonText: "View Challenges",
    gradient: "bg-gradient-to-br from-warning to-yellow-500"
  },
  {
    title: "Leaderboards",
    description: "Compete with farmers worldwide and climb the sustainability rankings",
    icon: <Trophy className="w-5 h-5" />,
    buttonText: "View Rankings",
    gradient: "bg-gradient-to-br from-achievement-gold to-yellow-600"
  },
  {
    title: "Achievements",
    description: "Unlock badges and showcase your sustainable farming milestones",
    icon: <Award className="w-5 h-5" />,
    badge: "12 Earned",
    buttonText: "View Badges",
    gradient: "bg-gradient-to-br from-level to-purple-600"
  },
  {
    title: "Community",
    description: "Connect with fellow farmers and share sustainable practices",
    icon: <Users className="w-5 h-5" />,
    buttonText: "Join Community",
    gradient: "bg-gradient-to-br from-xp to-blue-600"
  },
  {
    title: "Learning Hub",
    description: "Access courses and resources on sustainable farming techniques",
    icon: <BookOpen className="w-5 h-5" />,
    badge: "New Content",
    buttonText: "Start Learning",
    gradient: "bg-gradient-to-br from-primary to-green-600"
  }
];