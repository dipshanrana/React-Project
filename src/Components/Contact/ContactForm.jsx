import React, { useState } from "react";
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3d954718-ce6e-40d4-8e30-4be26cc8e770",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h2 style={{ textAlign: "center", color:"black", fontFamily:"arial",fontWeight:"500" }}>Connect With Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ padding: "10px" , backgroundColor:"#e8e4e4b1", borderRadius:"4px",color:"black"}}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ padding: "10px", backgroundColor:"#e8e4e4b1", borderRadius:"4px",color:"black" }}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
        style={{ padding: "10px" , backgroundColor:"#e8e4e4b1", borderRadius:"4px", color:"black"}}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: isSubmitting ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
