import React from 'react';
import PropTypes from 'prop-types';

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    let isHeaderStyle;

    if (isHeader) isHeaderStyle = headerRowStyles;
    else isHeaderStyle = rowStyles;

    return (
        <tr style={isHeaderStyle}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan={2}>{textFirstCell}</th>
                ) : (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
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

export default CourseListRow;