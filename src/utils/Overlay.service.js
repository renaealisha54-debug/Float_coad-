import { DeviceEventEmitter } from 'react-native';

export const OverlayService = {
  toggle: (isVisible) => {
    DeviceEventEmitter.emit('OVERLAY_STATE', { visible: isVisible });
  },
  updatePosition: (x, y) => {
    DeviceEventEmitter.emit('OVERLAY_POS', { x, y });
  }
};
