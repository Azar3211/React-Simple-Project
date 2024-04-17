

import PropTypes from 'prop-types';
function Student(props) {
    return (
        <div className="student">
            <p>Student Name: {props.name}</p>
            <p>Student Age: {props.age}</p>
            <p>Student: {props.isStudent ? "True" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
}
export default Student;