import { IEngine } from '@zappjs/core';

export const JsonEngine: IEngine = (spec) => {
  return JSON.stringify(spec, null, '  ');
}
