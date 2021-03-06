import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {withRouter} from 'react-router'
import OnboardingModal from '../Onboarding/OnboardingModal'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import {deepOrangeA400} from 'material-ui/styles/colors';


class LandingPage extends Component {

    state = {
        open: false,
        user: {}
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleGoogleResponse = (response) => {
        const user = {
            "firstName": response.profileObj.givenName,
            "lastName": response.profileObj.familyName,
            "emailAddress": response.profileObj.email,
            "token": response.accessToken,
            "avatarUri": response.profileObj.imageUrl
        };
        this.setState(
            {
                ...this.state,
                user: user
            }
        );

        this.handleOpen();
    };

    render() {
        return (
            <div id="page-wrapper">
                <OnboardingModal open={this.state.open} handleClose={this.handleClose} user={this.state.user}/>
                <link rel="stylesheet" href="assets/css/main.css"/>
                <div id="header-wrapper">
                    <div id="header">
                        <section id="banner">
                            <header>
                                <h2>Howdy. This is ChoreDo.</h2>
                                <p>Help your kids with their chores and teach them about money at the same time</p>
                            </header>
                            <ul className="actions">
                                <GoogleLogin
                                    clientId="529228870641-cd4pl87aele5ctibr8p9fvj8mmmdtta2.apps.googleusercontent.com"
                                    onSuccess={this.handleGoogleResponse}
                                    onFailure={this.handleGoogleResponse}
                                    buttonText={"Login with Google"}
                                    className="button big login-btn"
                                />
                            </ul>
                        </section>

                        <section id="intro" className="container">
                            <div className="row">
                                <div className="4u 12u(mobile)">
                                    <section className="first">
                                        <i className="icon featured fa-cog"></i>
                                        <header>
                                            <h2>Planning</h2>
                                        </header>
                                        <p>
                                            Easily plan and assign chores for your kids to do.
                                        </p>
                                    </section>
                                </div>
                                <div className="4u 12u(mobile)">
                                    <section className="middle">
                                        <i className="icon featured alt fa-flash"></i>
                                        <header>
                                            <h2>Tracking</h2>
                                        </header>
                                        <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna
                                            tempus.</p>
                                    </section>
                                </div>
                                <div className="4u 12u(mobile)">
                                    <section className="last">
                                        <i className="icon featured alt2 fa-star"></i>
                                        <header>
                                            <h2>Financial Responsibility</h2>
                                        </header>
                                        <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna
                                            tempus.</p>
                                    </section>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                <div id="footer-wrapper">
                    <section id="footer" className="container">
                        <div className="row">
                            <div className="12u">
                                <div id="copyright">
                                    <ul className="links">
                                        <li>&copy; 2017 ChoreDo. All rights reserved.</li>
                                        <li>Landing Page Designed By: <a href="http://html5up.net">HTML5 UP</a></li>
                                        <li>Made with <ActionFavorite
                                            style={{color: deepOrangeA400}}/> in Brooklyn
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default withRouter(LandingPage);
