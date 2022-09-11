import type { MapPosition } from './map';

export type Togo = {
  id: number | undefined;
  done: boolean;
  location: string;
  position: MapPosition;
  tag: string;
};
