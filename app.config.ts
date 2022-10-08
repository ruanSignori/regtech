import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'RegTech',
  slug: "RegTech",
  icon: '',
  runtimeVersion: {
    policy: "sdkVersion"
  },
  updates: {
    url: "https://u.expo.dev/27a61312-4281-4345-9e0a-74bf6e2ee91f"
  },
  ios: {
    bundleIdentifier: "com.ruansignori.regtech"
  }
});
