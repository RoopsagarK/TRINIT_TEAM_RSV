import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import Options from '../components/Options';
import { useQuestionContext } from '../QuestionsContext';

const AssessmentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [clicked, setClicked] = useState(null);
  const { questions } = useQuestionContext();

    console.log("Questions", questions);

    if(questions.length === 0) {
      return <div>Loading...</div>
    }
  const Questions = [
  {
    "question": "The direction in which the formal communication flows is always",
    "options": [
      "A. Upward",
      "B. Downward",
      "C. Horizontal",
      "D. All of the Abcne"
    ]
  },
  {
    "question": "Communiction in an organization should ideally flow",
    "options": [
      "A. From top to bottom",
      "B. From bottom to top",
      "C. Both",
      "D. None of these"
    ]
  },
  {
    "question": "Which one of the following cam10t become a type of u.Titten communication",
    "options": [
      "A. P ictures and visual aids",
      "B. Meetings and conferenc es",
      "C _ Letters and suggestions",
      "D. Rules and Instructions"
    ]
  },
  {
    "question": "Consider the following statements about comrnumcationz\n1. It is a process of interaction with people and environment\n2. Two or more individuals interact and influence the ideas, beliefs and attitudes of\neach other.\n3. They can exchange information through words: gestures, signs and symbols,\nexpressions etc _",
    "options": [
      "A. land 2",
      "B. 2 and3",
      "C. 1 and 3",
      "D 122 and 3"
    ]
  },
  {
    "question": "Iv\\hich of the following is/are not included in the tools of verbal communication?",
    "options": [
      "A. Listening",
      "B. Reading",
      "C. Writing",
      "D. Graphics"
    ]
  },
  {
    "question": "Iv\\hich of the follo•vving statements explain Interpersonal skills?",
    "options": [
      "A. The skills that a person uses to interact with other people.",
      "B. People skills or communication skills",
      "C. It explains how people relate to one another",
      "D _ All the aboxe_"
    ]
  },
]
  const handlePageChange = (event, newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };

  return (
  <>
    {questions.length !== 0 && (
      <div className="bg-purple-200 h-screen">
        <div className='text-2xl mx-24 py-4'>
          <span className='font-bold'>Question Number {currentPage}.</span><br/>
          {questions[currentPage-1]?.question}
        </div>
        <Options
          options={questions[currentPage-1]?.options}
          clicked={clicked}
          setClicked={setClicked}
        />
        <div className='fixed bottom-4 left-1/2 -translate-x-1/2'>
          <Pagination 
            count={questions?.length-1}
            size='large'
            page={currentPage}
            onChange={handlePageChange}
            color='secondary'
          />
        </div>
      </div>
    )}
  </>
);

}

export default AssessmentPage
