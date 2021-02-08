const buildAnswers = (questions, selectedAnswers) => {
    // let answeredQuestions =
    //     Object.keys(selectedAnswers).map(answered => {
    //         return questions.filter(({ question }) => question === answered)[0]
    //     })
    // const answeredQuestions = questions.map(q =>
    //     Object.keys(q).reduce((obj, key) => {
    //         if (key !== 'options') { obj[key] = q[key] }
    //         return obj
    //     }, {})
    // )

    const results = questions.map(q => {
        q.givenAnswer = selectedAnswers.[q.question] ? selectedAnswers[q.question] : null
        return q
    })

    const incorrect = results.filter(({ answer, givenAnswer }) => answer !== givenAnswer)

    const correct = results.filter(({ answer, givenAnswer }) => answer === givenAnswer)
    return [correct, incorrect, results]
}

export default buildAnswers