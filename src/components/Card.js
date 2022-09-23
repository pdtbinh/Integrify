import { Link } from "react-router-dom"

const randomColor = () => {
    const min = 200
    const randomRange = 255 - min
    const [red, green, blue] = [Math.random() * randomRange + min, Math.random() * randomRange + min, Math.random() * randomRange + min]
    return `rgb(${red}, ${green}, ${blue})`
}

const cardStyle = {
    'borderRadius': '10px',
    'height': '250px',
    'width': '200px',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'padding': '10px',
    'backgroundColor': 'white',
    'boxShadow': 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
}

const avatarStyle = {
    'height': '70px',
    'width': '70px',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '100%',
}

const initialStyle = {
    'width': 'fit-content'
}

const nameStyle = {
    'textAlign': 'center',
    'height': '1.2rem',
    'fontWeight': 'bold',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'width': '100%',
    'overflow': 'hidden',
    'margin': '5px'
}

const usernameStyle = {
    'color': 'grey',
    'margin': '5px',
    'fontSize': '0.9rem',
}

const websiteStyle = {
    'margin': '5px 0 20px 0',
    'fontSize': '0.9rem',
    'color': 'rgb(100, 100, 200)'
}

export const buttonStyle = {
    'color': 'white',
    'backgroundColor': 'rgba(20, 20, 250, 0.6)',
    'border': 'none',
    'borderRadius': '20px',
    'height': '35px',
    'width': '100px',
    'cursor': 'pointer',
    'marginTop': '10px',
}

// Each avatar displays the first letter of the name
const Avatar = ({ initial }) => (
    <div style={{...avatarStyle, 'backgroundColor': `${randomColor()}`}}>
        <h1 style={initialStyle}>{initial}</h1>
    </div>
)

// Each card displays the avatar, name, etc. and a button to view more details
export const Card = ({ user }) => (
    <div style={cardStyle}>
        <Avatar initial={user.name[0]}/>
        <p style={nameStyle}>{user.name}</p>
        <p style={usernameStyle}>@{user.username}</p>
        <a style={websiteStyle} href={`http://${user.website}`}>http://{user.website}</a>
        <Link to={`/${user.id}`}>
            <button style={buttonStyle}>View more</button>
        </Link>
    </div>
)