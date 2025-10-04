import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement | null>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currencyCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current == null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interrruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <>
      <form action='' className='form' onSubmit={handleCreateNewTask}>
        <div className='formRow'>
          <DefaultInput
            id='meuinput'
            labelText='task'
            type='text'
            ref={taskNameInput}
            placeholder='Digite algo'
            disabled={!!state.activeTask}
          />
        </div>
        <div className='formRow'>
          <p>Próximo intervalo é de 25min.</p>
        </div>

        {state.currencyCycle > 0 && (
          <div className='formRow'>
            <Cycles />
          </div>
        )}

        <div className='formRow'>
          {!state.activeTask && (
            <DefaultButton
              aria-label='Iniciar nova tarefa'
              title='Iniciar nova tarefa'
              type='submit'
              icon={<PlayCircleIcon />}
            />
          )}

          {!!state.activeTask && (
            <DefaultButton
              aria-label='Interromper tarefa atual'
              title='Interromper tarefa atual'
              type='button'
              icon={<StopCircleIcon />}
              color='red'
              onClick={handleInterruptTask}
            />
          )}
        </div>
      </form>
    </>
  );
}
