import React from 'react'

const Languages = (props) => {
    // props looks like this: {languages: @languages, test:'test val'}
    // props in this case an object
     
    // this works, but we will always use destructoring to do this
    // let test1 = props.test
    
    // destructoring an obj in js
    const { test, languages } = props

    const renderLanguages = () => {
        return languages.map( l => {
            return (
            <div>
                {l.name}
                <a href={`/languages/${l.id}`}>language show</a>
            </div>
            )
        })
    }
   
    return (
        <div>
            <h1>Languages go Here</h1>
            <h1>{test}</h1>
            {renderLanguages()}
        </div>
    )
}

export default Languages