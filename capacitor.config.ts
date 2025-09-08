import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e80a45bf149e4f13bfa16bd9ea616880',
  appName: 'Harvest Hero',
  webDir: 'dist',
  server: {
    url: 'https://e80a45bf-149e-4f13-bfa1-6bd9ea616880.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#6b9b47', // Primary green color
      showSpinner: false
    }
  }
};

export default config;