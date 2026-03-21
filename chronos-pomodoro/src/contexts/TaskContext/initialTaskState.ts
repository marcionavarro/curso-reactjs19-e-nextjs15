import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currencyCycle: 0,
  config: {
    workTime: 1, //25
    shortBreakTime: 1, //5
    longBreakTime: 1, //15
  },
};
