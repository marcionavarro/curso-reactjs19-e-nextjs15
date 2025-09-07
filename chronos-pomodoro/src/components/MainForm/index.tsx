import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '21:00',
      };
    });
  }

  return (
    <>
      <form action='' className='form'>
        <button type='button' onClick={handleClick}>
          clicar
        </button>
        <div className='formRow'>
          <DefaultInput
            id='meuinput'
            labelText='task'
            type='text'
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
