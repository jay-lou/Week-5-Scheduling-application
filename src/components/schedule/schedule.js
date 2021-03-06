import React, { Component } from 'react';
import { connect } from 'react-redux'

import Gradient from './gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';


class Schedule extends Component {

    renderCourses() {
        const data = this.props.courses

        return data.map((course, index) => {
            if (course.enrolled) {
                return <ScheduleCourse course="course" key={index}/>
            }

        })
    }

    render () {
        return (
            <div className = "schedule">
                <h1 className = "schedule-title">My Schedule</h1>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <Gradient />
                <ProgressTracker />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses

    }
}

export default connect(mapStateToProps, action)(Schedule);