import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();

  // ciclos
  const nextCycle = getNextCycle(state.currencyCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  // tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por: {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Descanse por: {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
