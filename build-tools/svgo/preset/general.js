import { mergeRight } from 'ramda';
import { base } from './base';

export const generalConfig = mergeRight(base, {
  plugins: [
    ...(base.plugins || []),
    { removeAttrs: { attrs: ['class', 'fill'] } },
  ],
});
