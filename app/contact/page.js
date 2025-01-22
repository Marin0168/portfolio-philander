"use client";
import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Bericht verzenden...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("E-mail succesvol verzonden!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Er ging iets mis. Probeer het opnieuw.");
      }
    } catch (error) {
      setStatus("Er ging iets mis. Probeer het opnieuw.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Naam</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Je naam"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mailadres</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Je e-mailadres"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Bericht</label>
          <textarea
            id="message"
            name="message"
            placeholder="Je bericht"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="button">Verstuur</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
