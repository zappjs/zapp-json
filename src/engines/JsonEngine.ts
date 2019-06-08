import { Engine } from '@zappjs/core';

export const JsonEngine: Engine = (spec) => {
  return JSON.stringify(spec, null, '  ');
}