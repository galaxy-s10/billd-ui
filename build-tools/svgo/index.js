import SVGO from 'svgo';
import { createTrasformStreamAsync } from '../creator';

export const svgo = (options) => {
  const optimizer = new SVGO(options);
  return createTrasformStreamAsync(async (before) => {
    const { data } = await optimizer.optimize(before);
    return data;
  });
};
