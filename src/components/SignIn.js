import React, { useState, useEffect } from 'react'
import { AuthContainer } from '../styles/AuthStyles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import { IconButton, InputAdornment } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import { schools, studentsAuth } from '../utils/authjson'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockIcon from '@material-ui/icons/Lock';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useDispatch, useSelector } from 'react-redux'
import Message from "../components/Message"
import { useHistory } from 'react-router-dom'
import { loginUser } from '../redux/actions/userActions';

const SignIn = () => {
    const [accountType, setAccountType] = useState('student')
    const [studentSchool, setStudentSchool] = useState('');
    const [teacherSchool, setTeacherSchool] = useState('');

    const [studentUserName, setStudentUserName] = useState('')
    const [showStudentCode, setShowStudentCode] = useState('')
    const [studentCode, setStudentCode] = useState('')

    const [teacherUserName, setTeacherUserName] = useState('')
    const [showTeacherCode, setShowTeacherCode] = useState('')
    const [teacherCode, setTeacherCode] = useState('')

    const [showTeacherPassword, setShowTeacherPassword] = useState('')
    const [teacherPassword, setTeacherPassword] = useState('')

    const [success, setSuccess] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleStudentLogin = (e) => {
        e.preventDefault()
        dispatch(loginUser({
            studentSchool,
            studentUserName,
            studentCode
        }))
    }

    const { loading, error, userInfo } = useSelector(state => state.userLogin)

    useEffect(() => {
        if (userInfo) {
            history.push('/mainarea')
        }
    }, [history, userInfo])

    return (
        <AuthContainer>
            <h3>Choose account type</h3>
            <div className="cards">
                <div className="cards__item" onClick={() => setAccountType('student')}>
                    <i className="fas fa-user-graduate fa-2x"></i>
                    <p>Student</p>
                    <CheckCircleIcon style={{ display: accountType === 'student' ? 'block' : 'none' }} />
                </div>
                <div className="cards__item" onClick={() => setAccountType('teacher')}>
                    <i className="fas fa-chalkboard-teacher fa-2x"></i>
                    <p>Teacher</p>
                    <CheckCircleIcon style={{ display: accountType === 'teacher' ? 'block' : 'none' }} />
                </div>
            </div>

            {
                loading ?
                    'loading...'
                    : error ?
                        <Message variant='error'>{error}</Message>
                        :
                        null
            }

            <form className="authitems students__form"
                style={{ display: accountType === 'student' ? 'flex' : 'none' }}
                onSubmit={handleStudentLogin}
            >
                <TextField
                    className='formcontrol'
                    select
                    label="School"
                    required
                    value={studentSchool}
                    onChange={(e) => setStudentSchool(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <HomeIcon />
                            </InputAdornment>
                        ),
                    }}
                    helperText="Please select your school"
                >
                    {schools.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    className='formcontrol'
                    label="Student's Username"
                    value={studentUserName}
                    required
                    onChange={e => setStudentUserName(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                    helperText="Please select your username"
                />

                <TextField
                    className='formcontrol'
                    label="Student's code"
                    type={showStudentCode ? 'text' : 'password'}
                    value={studentCode}
                    required
                    onChange={e => setStudentCode(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowStudentCode(!showStudentCode)}
                                    onMouseDown={e => e.preventDefault()}
                                >
                                    {showStudentCode ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>

                        ),
                    }}
                    helperText="Please select your student code"
                />

                <AwesomeButton
                    type="primary"
                    className='submitbutton'
                >
                    Submit
                </AwesomeButton>

            </form>



            <form className="authitems teachers__form"
                style={{ display: accountType === 'teacher' ? 'flex' : 'none' }}>
                <TextField
                    className='formcontrol'
                    select
                    label="School"
                    value={teacherSchool}
                    onChange={(e) => setTeacherSchool(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <HomeIcon />
                            </InputAdornment>
                        ),
                    }}
                    helperText="Please select your school"
                >
                    {schools.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    className='formcontrol'
                    label="Teacher's Username"
                    value={teacherUserName}
                    onChange={e => setTeacherUserName(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                    helperText="Please enter your username"
                />

                <TextField
                    className='formcontrol'
                    label="Teacher's code"
                    type={showTeacherCode ? 'text' : 'password'}
                    value={teacherCode}
                    onChange={e => setTeacherCode(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowTeacherCode(!showTeacherCode)}
                                    onMouseDown={e => e.preventDefault()}
                                >
                                    {showTeacherCode ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>

                        ),
                    }}
                    helperText="Please select your teacher code"
                />

                <TextField
                    className='formcontrol'
                    label="Teacher's password"
                    type={showTeacherPassword ? 'text' : 'password'}
                    value={teacherPassword}
                    onChange={e => setTeacherPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowTeacherPassword(!showTeacherPassword)}
                                    onMouseDown={e => e.preventDefault()}
                                >
                                    {showTeacherPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>

                        ),
                    }}
                    helperText="Please select your teacher password"
                />
                <AwesomeButton
                    type="primary"
                    className='submitbutton'
                >
                    Submit
                </AwesomeButton>
            </form>

        </AuthContainer>
    )
}

export default SignIn
