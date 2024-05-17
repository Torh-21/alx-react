import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const BodySectionWithMarginBottom = ({ title, children }) => {
	return (
		<div className={css(styles.bodySectionWithMargin)}>
			<BodySection title={title}>{children}</BodySection>
		</div>
	);
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

const styles = StyleSheet.create({
	bodySectionWithMargin: {
	  marginBottom: "40px",
	  width: "100%",
	},
  }); 

export default BodySectionWithMarginBottom;