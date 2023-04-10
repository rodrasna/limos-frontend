import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class MyCalendar extends React.Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, 'days')),
        title: 'Some Event',
      },
    ],
  };

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }
}

export default MyCalendar;
