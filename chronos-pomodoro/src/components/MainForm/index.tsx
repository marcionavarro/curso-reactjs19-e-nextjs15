import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef /* useState */ } from 'react';

export function MainForm() {
  //const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement | null>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <form action='' className='form' onSubmit={handleCreateNewTask}>
        <div className='formRow'>
          <DefaultInput
            id='meuinput'
            labelText='task'
            type='text'
            /* value={taskName}
            onChange={e => setTaskName(e.target.value)} */
            ref={taskNameInput}
            placeholder='Digite algo'
          />
        </div>
        <div className='formRow'>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='formRow'>
          <Cycles />
        </div>

        <div className='formRow'>
          <DefaultButton icon={<PlayCircleIcon />} color='red' />
        </div>
      </form>
    </>
  );
}
