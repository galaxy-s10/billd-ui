import { mergeRight } from 'ramda';
import { base } from './base';

export const remainFillConfig = mergeRight(base, {
  plugins: [...(base.plugins || []), { removeAttrs: { attrs: ['class'] } }],
});
