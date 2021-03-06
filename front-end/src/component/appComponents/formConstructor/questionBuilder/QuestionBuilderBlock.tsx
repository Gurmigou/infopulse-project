import React from "react";
import QuestionTitleBuilder from "./QuestionTitleBuilder";
import {Card} from "primereact/card";
import QuestionTypeSelector from "./QuestionTypeSelector";
import SingleAnswerBuilder from "./questionTypes/SingleAnswerBuilder";
import MultipleAnswerBuilder from "./questionTypes/MultipleAnswerBuilder";
import OpenAnswerBuilder from "./questionTypes/OpenAnswerBuilder";
import SingleQuestionCorrectAnswerSelector from "./questionGrades/SingleQuestionCorrectAnswerSelector";
import {addNewQuestion, deleteQuestion, questionTypes} from "../../../../utils/formConstructor/formConstructorUtils";

function QuestionBuilderBlock({questionIndex, questionType, questionList, setQuestionList}) {
    return (
        <Card style={{boxShadow: `3px 5px 20px #D0D0D0`, marginTop: `30px`}}>
            <div style={{display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
                <QuestionTitleBuilder question={questionList[questionIndex]} setQuestionList={setQuestionList}/>
                <QuestionTypeSelector questionTypes={questionTypes}
                                      questionSelectedType={questionType}
                                      questionList={questionList}
                                      setQuestionList={setQuestionList}
                                      index={questionIndex}/>
            </div>
            <div>
                {
                    questionList[questionIndex].possibleAnswersDto.map((value, index) => {
                        if (questionType.type === "SINGLE")
                            return <SingleAnswerBuilder
                                question={questionList[questionIndex]} setQuestionList={setQuestionList}
                                answer={value} answerIndex={index}/>

                        if (questionType.type === "MULTI")
                            return <MultipleAnswerBuilder
                                question={questionList[questionIndex]} setQuestionList={setQuestionList}
                                answer={value} answerIndex={index}/>
                        else
                            return <OpenAnswerBuilder setQuestionList={setQuestionList} answer={value}/>
                    })
                }
            </div>
            {
                questionType.type === "SINGLE" && <SingleQuestionCorrectAnswerSelector
                    numOfAnswers={questionList[questionIndex].possibleAnswersDto.length}
                    question={questionList[questionIndex]}
                    setQuestionList={setQuestionList}/>
            }
            <hr style={{margin: `35px 0`, border: `0`, borderTop: `1px solid #E0E0E0`}}/>
            <div style={{display: `flex`, justifyContent: `end`}}>
                <div style={{width: `30%`, display: `flex`, justifyContent: `end`,
                             alignItems: `center`, marginRight: `20px`
                }}>
                    {
                        <div style={{width: `40%`, display: `flex`, justifyContent: `right`}}>
                            {
                                (questionList.length === 1) &&
                                <i style={{color: `#4F46E5`}} onClick={() => addNewQuestion(setQuestionList)} className="fas fa-plus-circle fa-2x"/>
                            }
                            {
                                (questionIndex + 1) !== questionList.length &&
                                <i style={{color: `#4F46E5`}} onClick={() => deleteQuestion(questionList, questionIndex, setQuestionList)}
                                   className="fas fa-trash-alt fa-2x"/>
                            }
                        </div>
                    }
                    {
                        ((questionIndex + 1) === questionList.length && (questionList.length !== 1)) &&
                        <div style={{width: `40%`, display: `flex`, justifyContent: `space-around`}}>
                            <i style={{color: `#4F46E5`}} onClick={() => addNewQuestion(setQuestionList)} className="fas fa-plus-circle fa-2x"/>
                            <i style={{color: `#4F46E5`}} onClick={() => deleteQuestion(questionList, questionIndex, setQuestionList)}
                               className="fas fa-trash-alt fa-2x"/>
                        </div>
                    }
                </div>
            </div>
        </Card>
    )
}

export default QuestionBuilderBlock;