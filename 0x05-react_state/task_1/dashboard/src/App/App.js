import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from "aphrodite";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { displayDrawer: false };

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	listCourses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 },
	];

	listNotifications = [
		{ id: 1, type: 'default', value: 'New course available' },
		{ id: 2, type: 'urgent', value: 'New resume available' },
		{ id: 3, type: 'urgent', html: getLatestNotification() },
	];

	handleKeyPress(e) {
		if (e.ctrlKey && e.key === 'h') {
			alert('Logging you out');
			this.props.logOut();
		}
	}

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className={css(styles.app)}>
						<Notifications
							listNotifications={this.listNotifications}
							displayDrawer={this.state.displayDrawer}
							handleDisplayDrawer={this.handleDisplayDrawer}
							handleHideDrawer={this.handleHideDrawer}
						/>
						<Header />
					</div>
					<div className={css(styles.body)}>
						{this.props.isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={this.listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title='Log in to continue'>
								<Login />
							</BodySectionWithMarginBottom>
						)}
					</div>
					<BodySection title='News from the school'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perspiciatis at tempora odio, necessitatibus repudiandae
							reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
							ipsa iste vero dolor voluptates.
						</p>
					</BodySection>
					<div className={css(styles.footer)}>
						<Footer />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {
		return;
	},
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

const cssVars = {
	mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
	app: {
		borderBottom: `3px solid ${cssVars.mainColor}`,
	},

	body: {
		display: "flex",
		justifyContent: "center",
	},

	footer: {
		borderTop: `3px solid ${cssVars.mainColor}`,
		width: "100%",
		display: "flex",
		justifyContent: "center",
		position: "fixed",
		bottom: 0,
		fontStyle: "italic",
	},
});

export default App;