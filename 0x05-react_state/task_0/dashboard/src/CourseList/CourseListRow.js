import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    let isHeaderStyle;

    if (isHeader) isHeaderStyle = headerRowStyles;
    else isHeaderStyle = rowStyles;

    const tableItemStyle = css(
        isHeader ? styles.CourseListTh : styles.CourseListTd
    );

    return (
        <tr style={isHeaderStyle}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan={2} className={css(styles.CourseListThSpan2)}>{textFirstCell}</th>
                ) : (
                    <>
                        <th className={tableItemStyle}>{textFirstCell}</th>
                        <th className={tableItemStyle}>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td className={tableItemStyle}>{textFirstCell}</td>
                    <td className={tableItemStyle}>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

const cssVars = {
    borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
    CourseListTh: {
        borderTop: `1px solid ${cssVars.borderTableColor}`,
        borderBottom: `1px solid ${cssVars.borderTableColor}`,
        textAlign: "left",
        fontSize: "18px",
    },

    CourseListThSpan2: {
        textAlign: "center",
    },

    CourseListTd: {
        textAlign: "left",
    },
});

export default CourseListRow;