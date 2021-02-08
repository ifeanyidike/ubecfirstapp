import React from 'react'
import SubjectCard from '../components/SubjectCard'
import { SubjectsContainer } from '../styles/TestSubjectStyles'
import { useSelector } from 'react-redux'
import { subjects } from "../utils/authjson"


const SubjectsPage = () => {
    const { userInfo } = useSelector(state => state.userLogin)

    const subjectList = userInfo.subjectsId.map(subjectId =>
        subjects.filter(subject => subject._id === subjectId)[0]
    )

    return (
        <SubjectsContainer>

            { subjectList.map(subject =>

                <SubjectCard
                    key={subject._id}
                    id={subject._id}
                    text={subject.name}
                />
            )}

        </SubjectsContainer>
    )
}

export default SubjectsPage
