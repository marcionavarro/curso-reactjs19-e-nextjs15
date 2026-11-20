import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { Heading } from '../../components/Heading';

import styles from './style.module.css';
import { DefaultInput } from '../../components/DefaultInput';
import { SaveIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext.ts';

export function Settings() {
  const { state } = useTaskContext();

  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longBreakTime = longBreakTimeInput.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime);
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curto e descanso
          longo.
        </p>
      </Container>

      <Container>
        <form action="" className={styles.form} onSubmit={handleSaveSettings}>
          <div className={styles.formRow}>
            <DefaultInput
              id="worktime"
              labelText="Foco"
              ref={workTimeInput}
              defaultValue={state.config.workTime}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo"
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salva configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
