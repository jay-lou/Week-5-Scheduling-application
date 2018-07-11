import React, { Component } from 'react';

class ProgressTracker extends Component {
    render () {
        return (
            <div className="progress-tracker">
                <label className="progress-tracker_label">Progress Tracker</label>
            <div className="progress-tracker__percentage">
                0%
            </div>
            </div>
        )
    }
}