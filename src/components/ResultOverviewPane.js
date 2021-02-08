import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import React from 'react'
import { ResultOverviewItem } from '../styles/ResultStyles'

const ResultOverviewPane = () => {
    const number = 1
    const question = "This is justa  funky lorem"
    const options = [
        "First option", "Second option", 'Third option', "Fourth option"
    ]
    return (
        <ResultOverviewItem>
            <FormControl component="fieldset">
                <FormLabel component="legend">{`Question ${number}`} </FormLabel>
                <p className='question'>{question}</p>
                {
                    options && options.map((option, index) =>
                        <div
                            key={index}
                        >
                            {option}
                        </div>
                    )
                }
            </FormControl>
        </ResultOverviewItem>
    )
}

export default ResultOverviewPane
