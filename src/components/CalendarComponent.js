"use client";

import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "@/styles/calendarStyles.css";

const localizer = momentLocalizer(moment);

export default function CalendarComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        popup={true} // Full screen
        eventPropGetter={(event) => {
          const backgroundColor =
            event.category === "Exam" ? "#ff4d4d" : "#007bff";
          return {
            style: {
              backgroundColor,
              color: "white",
              padding: "5px",
              borderRadius: "5px",
            },
          };
        }}
        components={{
          event: ({ event }) => (
            <div>
              <strong>{event.title}</strong> <br />
              {moment(event.start).format("hh:mm A")} -{" "}
              {moment(event.end).format("hh:mm A")}
            </div>
          ),
        }}
      />
    </div>
  );
}
