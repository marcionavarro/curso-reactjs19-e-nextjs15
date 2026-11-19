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
import { sortTasks } from '../../utils/sortTasks.ts';

export function History() {
  const { state } = useTaskContext();
  const sortedTasks = sortTasks({ tasks: state.tasks });

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar todo o hisotrico"
              title="Apagar histórico"
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Data</th>
              <th>Status</th>
              <th>Tipo</th>
            </tr>
            </thead>
            <tbody>
            {sortedTasks.map((task) => {
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
      </Container>
    </MainTemplate>
  );
}
