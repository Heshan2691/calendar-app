"use client";

import { useState, useEffect } from "react";
import CalendarComponent from "@/components/CalendarComponent";
import AddEventForm from "@/components/AddEventForm";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from API
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="container">
      <Sidebar events={events} />
      <div className="main-content">
        <h1>Student Calendar</h1>
        <AddEventForm setEvents={setEvents} />
        <CalendarComponent events={events} />
      </div>
    </div>
  );
}
