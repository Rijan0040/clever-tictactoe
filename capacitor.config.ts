
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.32999609938849b2bf6c92140285b3a5',
  appName: 'clever-tictac-tactics',
  webDir: 'dist',
  // Removing the server configuration to make it work offline
  // This will bundle the app directly into the native app
  android: {
    backgroundColor: "#9b87f5"
  }
};

export default config;
