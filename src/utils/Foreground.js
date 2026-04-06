import ReactNativeForegroundService from '@supersami/rn-foreground-service';

export const startBuddyService = () => {
  ReactNativeForegroundService.start({
    id: 101,
    title: "Buddy Overlay",
    message: "Your buddy is active in the foreground.",
    icon: "ic_launcher",
  });
};
