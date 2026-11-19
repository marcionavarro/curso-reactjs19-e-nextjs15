export function taskTypeDictionary(taskType: string) {
  const dictionary: Record<string, string> = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  return dictionary[taskType];
}
