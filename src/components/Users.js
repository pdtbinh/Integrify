import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, buttonStyle } from "./Card"
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom"

const usersStyle = {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'center',
    'padding': '20px',
    'width': '65%'
}

const gridItemStyle = {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'center',
}

// Contains all the user cards as overview
export const Users = ({ users }) => (
    <Grid container spacing={3} columns={3} style={usersStyle}>
        {users.map(user => (
            <Grid style={gridItemStyle} item xs={3} md={1.5} lg={1}>
                <Card user={user}/>
            </Grid>
        ))}
    </Grid>
)

const userStyle = {
    'width': '60%',
}

const titleStyle = {
    'width': '100%',
    'borderBottom': '1px solid black',
    'marginBottom': '5px'
}

const valueStyle = {
    'fontWeight': 'bold',
    'fontSize': '1.2rem',
    'margin': '0',
    'marginBottom': '10px',
}

// Each section of user information
const Section = ({ title, value}) => (
    <div>
        <p style={titleStyle}>{title}</p>
        <p style={valueStyle}>{value}</p>
    </div>
)

// A separate page for a user information
export const User = ({ users }) => {
    // Requirement 4: Use React useParams
    const { id } = useParams()
    const [user, setUser] = useState()

    const findById = () => {
        for (let u of users) {
            if (u.id.toString() === id)
                setUser(u)
        }
    }

    useEffect(findById, [users])

    if (!user) {
        return (<h1>404: User not found</h1>)
    }
    return (
        <div style={userStyle}>
            <Section title='Name' value={user.name}/>
            <Section title='Username' value={user.username}/>
            <Section title='Email' value={user.email.toLowerCase()}/>
            <Section title='Phone' value={user.phone}/>
            <Section title='Company' value={user.company.name}/>
            <Section title='Address' value={`${user.address.street}, ${user.address.suite},  ${user.address.city}  ${user.address.zipcode}`}/>
            <Link style={gridItemStyle} to={`/users`}>
                <button style={buttonStyle}>Back</button>
            </Link>
        </div>
    )
}