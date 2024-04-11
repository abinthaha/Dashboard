import React, { Component } from 'react';
import './index.css';

class Experience extends Component {
    constructor(props) {
        super();
        this.state = {
            isViewed: false,
            experience: {
                year: '',
                month: '',
                days: '',
                hours: '',
                minutes: '',
                seconds: ''
            }
        }
    }

    componentDidMount() {
        var date1 = new Date('13 July 2015');
        var date2 = new Date();
        this.dateDiffInDays_Months_Years(date1, date2);
        setInterval(() => {
            date2 = new Date();
            this.hoursDiff(date1, date2);
        }, 1000);
    }

    componentWillReceiveProps(nextProps) {
        const { isViewed } = nextProps;
        this.setState({
            ...this.state,
            isViewed
        })
    }

    dateDiffInDays(start, end) {
        var MS_PER_DAY = 1000 * 60 * 60 * 24;
        var a = new Date(start);
        var b = new Date(end);
    
        const diffTime = Math.abs(a - b);
        const diffDays = Math.ceil(diffTime / MS_PER_DAY); 
    
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / MS_PER_DAY);
    }
    
    dateDiffInDays_Months_Years(start, end) {
        var m1 = new Date(start);
        var m2 = new Date(end);
        var yDiff = m2.getFullYear() - m1.getFullYear();
        var mDiff = m2.getMonth() - m1.getMonth();
        var dDiff = m2.getDate() - m1.getDate();
    
        if (dDiff < 0) {
            var daysInLastFullMonth = this.getDaysInLastFullMonth(start);
            if (daysInLastFullMonth < m1.getDate()) {
                dDiff = daysInLastFullMonth + dDiff + (m1.getDate() - daysInLastFullMonth);
            } else {
                dDiff = daysInLastFullMonth + dDiff;
            }
            mDiff--;
        }
        if (mDiff < 0) {
            mDiff = 12 + mDiff;
            yDiff--;
        }
        this.setState({
            ...this.state,
            experience: {
                year: yDiff,
                month: mDiff,
                days: dDiff
            }
        }, () => {
        })
    }
    getDaysInLastFullMonth(day) {
        var d = new Date(day);
    
        var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        return lastDayOfMonth.getDate();
    }

    hoursDiff = (date_future, date_now) => {
    
        var delta = Math.abs(date_future - date_now) / 1000;
    
        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
    
        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
    
        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
    
        // what's left is seconds
        var seconds = Math.floor(delta % 60);
        this.setState({
            ...this.state,
            experience: {
                ...this.state.experience,
                hours,
                minutes,
                seconds
            }
        })
    }
    

  render() {
      const { experience } = this.state;
    return (
      <section className={'experience odd ' + (this.state.isViewed ? 'viewed' : '')} id={this.props.elId}>
        <h1 className='section-heading'>My <span className='signature'>Experience</span></h1>
        <div className='experience-wrapper'>
            <span className='experience-item'>
                <span className='experience-value'>{experience.year}</span>
                <label className='label'>Years</label>
            </span>
            <span className='experience-item'>
                <span className='experience-value'>{experience.month}</span>
                <label className='label'>Months</label>
            </span>
            <span className='experience-item'>
                <span className='experience-value'>{experience.days}</span>
                <label className='label'>Days</label>
            </span>
            <span className='experience-item'>
                <span className='experience-value'>{experience.hours}</span>
                <label className='label'>Hours</label>
            </span>
            <span className='experience-item'>
                <span className='experience-value'>{experience.minutes}</span>
                <label className='label'>Minutes</label>
            </span>
            <span className='experience-item'>
                <span className='experience-value'>{experience.seconds}</span>
                <label className='label'>Seconds</label>
            </span>
        </div>
    </section>
    );
  }
}

export default Experience;
