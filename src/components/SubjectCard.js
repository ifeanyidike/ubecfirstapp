import React, { useState } from 'react'
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { SubjectPane } from '../styles/TestSubjectStyles';
import { useHistory } from 'react-router-dom'
import Loader from "../components/Progress"

const SubjectCard = ({ text, id }) => {
    const history = useHistory()
    const [checked, setChecked] = useState(false)


    const handleSubjectClick = () => {
        setChecked(true)

        setTimeout(() => {
            history.push(`/testpane/?subjectId=${id}`)
        }, [2000])
    }

    return (
        <SubjectPane onClick={handleSubjectClick}>
            {checked && <Loader />}
            <span>{text}</span>
            <BeenhereIcon fontSize='large' style={{ display: checked ? 'block' : 'none' }} />
        </SubjectPane>
    )
}

export default SubjectCard
