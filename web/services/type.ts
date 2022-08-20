export interface ISticker {
  id: number;
  qty: number;
  created: string; // use string instead Date for serialization for staticProps
  started: string;
  notes?: string;
  createdBy?: {
    id: string;
    name: string;
  };
}
