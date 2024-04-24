import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ listCourses }) => {
    return (
        <table id='CourseList' className={css(styles.list)}>
            <thead>
                <CourseListRow textFirstCell='Available courses' isHeader={true} />
                <CourseListRow
                    textFirstCell='Course name'
                    textSecondCell='Credit'
                    isHeader={true}
                />
            </thead>
            <tbody>
                {listCourses.length > 0 ? (
                    listCourses.map(({ id, name, credit }) => (
                        <CourseListRow
                            key={id}
                            textFirstCell={name}
                            textSecondCell={credit}
                        />
                    ))
                ) : (
                    <CourseListRow textFirstCell='No course available yet' />
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};

const cssVars = {
    borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
    list: {
        border: `1px solid ${cssVars.borderTableColor}`,
        borderCollapse: "collapse",
        width: "95%",
        margin: "40px auto 0 auto",
    },
});

export default CourseList;