import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { DefaultButton } from '../../components/DefaultButton';
import { TrashIcon } from 'lucide-react';

import styles from './style.module.css';
import { Heading } from '../../components/Heading';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext.ts';
import { formatDate } from '../../utils/formatDate.ts';
import { getTaskStatus } from '../../utils/getTaskStatus.ts';
import { taskTypeDictionary } from '../../utils/taskTypeDictionary.ts';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks.ts';
import { useEffect, useState } from 'react';
import { showMessage } from '../../components/adapters/showMessage.ts';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction.ts';

export function History() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOption, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        field: prevState.field,
        direction: prevState.direction,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    if (!confirmClearHistory) return;
    setConfirmClearHistory(confirmClearHistory);

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    return () => showMessage.dismiss();
  }, []);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOption.direction === 'desc' ? 'asc' : 'desc';
    setSortTaskOptions({
      tasks: sortTasks({
        tasks: sortTasksOption.tasks,
        field,
        direction: newDirection,
      }),
      field,
      direction: newDirection,
    });
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm(
      'Tem certeza que deseja limpar o historico?',
      confirmation => setConfirmClearHistory(confirmation),
    );
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          {hasTasks && (
            <span className={styles.buttonContainer}>

              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                aria-label="Apagar todo o hisotrico"
                title="Apagar histórico"
                onClick={handleResetHistory}
              />
          </span>
          )}
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
              <tr>
                <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'name' })}>Tarefa ↕</th>
                <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'duration' })}>Duração ↕</th>
                <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'startDate' })}>Data ↕</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
              </thead>
              <tbody>
              {sortTasksOption.tasks.map((task) => {
                return (<tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary(task.type)}</td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        )}
        {!hasTasks && (
          <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            Ainda não exsitem tarefas criadas
          </p>
        )}

      </Container>
    </MainTemplate>
  );
}
