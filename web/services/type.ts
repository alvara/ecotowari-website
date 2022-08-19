export interface ISticker {
  id: number
  qty: number
  created: Date
  notes?: string
  createdBy?: {
    id: string
    name: string
  }
}
