import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currencyCycle: number;
  config: {
    worktime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
