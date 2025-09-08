import { Navigation } from "@/components/Navigation";
import { GameCard, gameFeatures } from "@/components/GameCard";
import { StatsCard } from "@/components/StatsCard";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Leaf, 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  Star,
  Calendar,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const { toast } = useToast();

  const handleButtonClick = (title: string) => {
    toast({
      title: `${title} clicked!`,
      description: "Feature coming soon. Stay tuned for exciting updates!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-64 md:h-80 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Welcome to Harvest Hero
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Gamify your sustainable farming journey and make a real impact
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => handleButtonClick("Start Your Journey")}
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total Points"
            value="12,450"
            icon={<Star className="w-5 h-5" />}
            trend="+250 today"
          />
          <StatsCard
            title="Rank"
            value="#127"
            icon={<TrendingUp className="w-5 h-5" />}
            trend="↑5 positions"
          />
          <StatsCard
            title="Tasks Done"
            value="48"
            icon={<CheckCircle2 className="w-5 h-5" />}
            trend="+3 this week"
          />
          <StatsCard
            title="Achievements"
            value="12"
            icon={<Award className="w-5 h-5" />}
            trend="2 new"
          />
        </div>

        {/* Progress Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>Your Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ProgressBar
              label="Weekly Challenge Progress"
              current={3}
              max={5}
              color="bg-gradient-to-r from-success to-green-500"
            />
            <ProgressBar
              label="Experience Points"
              current={2450}
              max={5000}
              color="bg-gradient-to-r from-xp to-blue-500"
            />
            <ProgressBar
              label="Sustainability Score"
              current={78}
              max={100}
              color="bg-gradient-to-r from-achievement-gold to-yellow-500"
            />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameFeatures.map((feature, index) => (
              <GameCard
                key={index}
                {...feature}
                onClick={() => handleButtonClick(feature.title)}
              />
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Completed 'Organic Composting' challenge", points: "+50 pts", time: "2 hours ago", type: "success" },
                { action: "Unlocked 'Water Saver' achievement", points: "+100 pts", time: "5 hours ago", type: "achievement" },
                { action: "Joined the 'Sustainable Seeds' community", points: "+25 pts", time: "1 day ago", type: "community" },
                { action: "Finished 'Drip Irrigation Basics' course", points: "+75 pts", time: "2 days ago", type: "learning" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {activity.points}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
