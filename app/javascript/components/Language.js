import React from 'react'

export default  (props) => {
    const {name, id, about} = props.language
    const {questions} = props

    const renderQuestions = ()=>{
        return questions.map(q =>{
            return (
                <div>
                    <p>question: {q.text}</p>
                    <p>answer: {q.answer}</p>
                    <p>id: {q.id}</p>
                    <a href={`/languages/${id}/questions/${q.id}/edit`}>get edit form</a>
                </div>
            )
        })
    }
  return (
      <div>
        <h1>{name}</h1>
        <h1>{about}</h1>
        <h1>{id}</h1>
        <hr />
        <h2>Questions</h2>
        <a href={`/languages/${id}/questions/new`}>get new form</a>
        {renderQuestions()}
      </div>
  )
}