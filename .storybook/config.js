import { configure,addDecorator  } from '@storybook/react';
import {withProvider} from './decorators';

// automatically import all files ending in *.stories.js
configure([
    require.context('../src/components/__stories__', true, /\.stories\.js$/),
    require.context('../src/containers/__stories__', true, /\.stories\.js$/)
  ], module);

  addDecorator(withProvider)