"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css"; // Import default styles
import "../styles/sidebarStyles.css"; // Import our custom styles

export default function Sidebar({ events }) {
  const [date, setDate] = useState(new Date());
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    // Filter only upcoming events
    const now = new Date();
    const upcoming = events.filter((event) => new Date(event.start) >= now);
    setUpcomingEvents(upcoming);
  }, [events]);

  return (
    <div className="sidebar">
      <h2>📅 Calendar</h2>
      <div className="mini-calendar">
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={({ date, view }) => {
            // Highlight today's date
            if (moment(date).isSame(moment(), "day")) {
              return "highlight-today";
            }
          }}
        />
      </div>

      <h2>📌 Upcoming Events</h2>
      <ul className="upcoming-events">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <li key={index} className="event-item">
              <strong>{event.title}</strong>
              <p>{moment(event.start).format("MMM DD, YYYY HH:mm")}</p>
            </li>
          ))
        ) : (
          <p>No upcoming events</p>
        )}
      </ul>
    </div>
  );
}
