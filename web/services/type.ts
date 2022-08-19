export interface ISticker {
  id: number;
  qty: number;
  created: Date;
  started: Date;
  notes?: string;
  createdBy?: {
    id: string;
    name: string;
  };
}
