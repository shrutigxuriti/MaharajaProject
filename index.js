/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const TextRender = Text.render;
Text.render = function render(props) {
  props = { ...props, style: [{ fontFamily: 'Roboto' }, props.style] };
  return TextRender.apply(this, [props]);
};

AppRegistry.registerComponent(appName, () => App);
