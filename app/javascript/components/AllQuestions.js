import React from 'react'

const AllQuestions = (props) => {
    const {questions} = props

    const renderQuestions = () => {
       return  questions.map(q=>{
            return (
                <div>
                    {q.text}
                </div>
            )
        })
    }
    return (
        <div>
            <h1>AllQuestions</h1>
            {renderQuestions()}
        </div>
    )
}

export default AllQuestions