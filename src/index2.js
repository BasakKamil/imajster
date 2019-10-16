import Highway from '@dogstudio/higway';
import Fade from './scroll';

const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});

export default H
