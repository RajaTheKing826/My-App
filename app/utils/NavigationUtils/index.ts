import {Actions} from 'react-native-router-flux';
import {
  APP_LAUNCH_SCENE,
  SIGUNUP_SCENE,
} from '../../constants/NavigationConstants';

export function goToLaunchScene(props = {}) {
  Actions.push(APP_LAUNCH_SCENE, props);
}

export function goToSignUpScene(props = {}) {
  Actions.push(SIGUNUP_SCENE, props);
}
