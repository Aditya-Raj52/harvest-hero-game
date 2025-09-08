import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, Trophy, Coins } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-card border-b border-border/50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">HH</span>
          </div>
          <span className="font-bold text-lg text-foreground">Harvest Hero</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-achievement-gold/10 px-3 py-1 rounded-full">
          <Coins className="w-4 h-4 text-accent" />
          <span className="font-semibold text-sm text-foreground">2,450</span>
        </div>
        
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-4 h-4" />
          <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-warning" />
        </Button>
        
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white text-xs">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <div className="flex items-center space-x-1">
              <Trophy className="w-3 h-3 text-achievement-gold" />
              <span className="text-xs text-muted-foreground">Level 12</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};