import React from 'react'

// post '/languages/:language_id/questions', to: "questions#create"
// patch '/languages/:language_id/questions/:id', to: "questions#update"

export default (props) => {
    const { language, question, errors} = props
    const defaultText = question.text ? question.text : ''
    const defaultAnswer = question.answer ? question.answer: ''
    const actionURL = question.id ? 
                     `/languages/${language.id}/questions/${question.id }` :
                     `/languages/${language.id}/questions`

    const renderErrors = () => {
        return errors.map(e =>{
            return <p style={{color:'red'}}>{e}</p>
        })
    }                 


    return (
        <div>
            <h1>{question.id ? "Edit": "New"}</h1>
            {errors && renderErrors()}
            <form action={actionURL} method='post'>
                {question.id && <input type="hidden" name="_method" value="patch" />}
                <p>Question</p>
                <input name='question[text]' defaultValue={defaultText} />
                
                <p>Answer</p>
                <input name='question[answer]' defaultValue={defaultAnswer}/>
              
                <button type='input'>{question.id ? "Update": "Create"}</button>
            </form>
        </div>
    )
}