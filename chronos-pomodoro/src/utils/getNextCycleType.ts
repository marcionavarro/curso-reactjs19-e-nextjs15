import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currencyCycle: number): TaskModel['type'] {
  if (currencyCycle % 8 === 0) return 'longBreakTime';
  if (currencyCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
