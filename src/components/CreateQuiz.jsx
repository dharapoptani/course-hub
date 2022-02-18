import FormControl from '../UI/FormControl'
import {useState} from 'react'
import Tags from './Tags';

export default () => {
const [quiz, setQuiz]=useState({})

	const getQuiz = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const newData = {
		  ...quiz,
		};
		newData[name] = value;
		setQuiz(newData);
	  };
	  
  return (
    <>
      <FormControl
        type="text"
        label="question"
        icon="QUESTION"
        onChange={getQuiz}
      />
      <div className={groupClass}>
        <FormControl
          type="text"
          label="correct"
          icon="CORRECT"
          onChange={getQuiz}
        />
        <FormControl
          type="text"
          label="incorrect"
          icon="INCORRECT"
          onChange={getQuiz}
        />
      </div>
    </>
  );
};

