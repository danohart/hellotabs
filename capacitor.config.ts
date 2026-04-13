import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'co.hellochicago.app',
  appName: 'Hello Chicago',
  webDir: 'public',
  bundledWebRuntime: false,
  server: {
    // Point to your production website
    // This allows the app to use your live backend with all features
    url: 'https://www.hellochicago.co',
    cleartext: true,
    androidScheme: 'https',
    iosScheme: 'https'
  },
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
    // Handle different safe areas on newer iPhones
    limitsNavigationsToAppBoundDomains: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#EEF2FF",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small"
    },
    // Enable iOS keyboard accessory bar
    Keyboard: {
      resize: 'native',
      style: 'light',
      resizeOnFullScreen: true
    }
  }
};

export default config;
