import React from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            userId: '',
            name: '',
            email: '',
            picture: ''
        };
    }

    componentClicked = () => {
        console.log('clicked')
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userId: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    render() {
        let fbData;
        let { isLoggedIn, picture, name, email } = this.state;
        if (isLoggedIn) {
            fbData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    padding: '20px'
                }}>
                    <img src={picture} alt={name} />
                    <h2>Welcome {name}</h2>
                    Email: {email}
                </div>
            )
        } else {
            fbData = <FacebookLogin
                appId="1205424876487194"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
        }
        return (
            <div>
                {fbData}
            </div>
        );
    }
}

export default Facebook;