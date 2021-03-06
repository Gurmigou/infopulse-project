import React from "react";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {setQuestionName} from "../../../../utils/formConstructor/formConstructorUtils";

function QuestionTitleBuilder({question, setQuestionList}) {
    return (
        <Card style={{
            boxShadow: `none`,
            width: `50%`
        }}>
            <div style={{
                display: `flex`,
                flexDirection: `column`
            }}>
                <div className="flex justify-content-start" style={{marginBottom: `15px`}}>
                    <p style={{fontSize: `22px`, fontWeight: `bold`}}>Question title</p>
                </div>
                <InputText style={{width: `100%`}} value={question.questionName}
                           onChange={(e) =>
                               setQuestionName(question, e.target.value, setQuestionList)} />
            </div>
        </Card>
    )
}

export default QuestionTitleBuilder