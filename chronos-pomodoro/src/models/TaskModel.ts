import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // Quando o timer chegar no final
  interrruptedDate: number | null; // Quando a task for interrompida
  type: keyof TaskStateModel['config'];
};
