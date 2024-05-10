import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
	render() {
		const { type, value, html, markAsRead, id } = this.props;
		let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);

		return (
			<React.Fragment>
				{type && value ? (
					<li className={typeStyle} onClick={() => markAsRead(id)} data-notification-type={type}>
						{value}
					</li>
				) : null}
				{html ? (
					<li className={typeStyle} onClick={() => markAsRead(id)}
						data-urgent
						dangerouslySetInnerHTML={{ __html: html }}
					></li>
				) : null}
			</React.Fragment>
		);
	}
}

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	__html: PropTypes.shape({
		html: PropTypes.string,
	}),
};

NotificationItem.defaultProps = {
	type: "default",
	value: "",
	html: {},
	markAsRead: () => { },
	id: NaN,
};

const screenSize = {
	small: "@media screen and (max-width: 900px)",
};

const listItemSmall = {
	listStyle: "none",
	borderBottom: "1px solid black",
	padding: "10px 8px",
	fontSize: "20px",
};

const styles = StyleSheet.create({
	default: {
		color: "blue",
		[screenSize.small]: listItemSmall,
	},

	urgent: {
		color: "red",
		[screenSize.small]: listItemSmall,
	},
});

export default NotificationItem;