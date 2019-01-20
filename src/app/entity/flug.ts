export interface Flug {
  id: number;
  from: string;
  to: string;
  date: string;
  delayed: boolean;
}

export const testFlug: Flug = {
  id: 155,
  from: 'Graz',
  to: 'Mallorca',
  date: '2019-01-21T00:05:11.6990822+00:00',
  delayed: false
};
