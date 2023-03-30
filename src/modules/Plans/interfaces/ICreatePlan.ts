export interface ICreatePlan {
  name: string;
  description?: string;
  itens: string[];
  dueDays: string;
  value: number;
}
