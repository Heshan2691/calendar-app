"use client";

import { useState } from "react";
import "../styles/AddEventForm.css"; // Import CSS file

export default function AddEventForm() {
  const [form, setForm] = useState({
    title: "",
    start: "",
    end: "",
    category: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      alert("Event Added!");
      window.location.reload();
    });
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Add New Event</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Start Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setForm({ ...form, start: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>End Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setForm({ ...form, end: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="Lab Exercise">Lab Exercise</option>
            <option value="Exam">Exam</option>
            <option value="Coding Exercise">Coding Exercise</option>
            <option value="Assessment">Assessment</option>
          </select>
        </div>

        <button type="submit" className="add-btn">
          Add Event
        </button>
      </div>
    </form>
  );
}
