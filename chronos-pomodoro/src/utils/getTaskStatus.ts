import type { TaskModel } from '../models/TaskModel.ts';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return 'Completa';
  if (task.interrruptedDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Em Progresso';
  return 'Abandonada';
}
