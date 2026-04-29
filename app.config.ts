import "dotenv/config";

export default ({ config }: any) => ({
  ...config,
  orientation: "default", // genel

  android: {
    ...config.android,
    orientation: "portrait", // sadece Android
  },

  ios: {
    ...config.ios,
    orientation: "landscape", // sadece iOS
  },
});
