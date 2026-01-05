"use client";

import React, { useState } from "react";
import styles from "./coming-soon.module.css";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client email captured:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className={styles.main}>
      {/* Background Glows */}
      <div className={`${styles.glow} ${styles.glowTop}`} />
      <div className={`${styles.glow} ${styles.glowBottom}`} />

      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoGradientBorder}>
            <div className={styles.logoInner}>
              {/* Ensure your logo is in /public/logo.png */}
              <img
                src="/MeshLogo.png"
                alt="Mesh-Finity Logo"
                className={styles.logoImage}
              />
            </div>
          </div>
        </div>

        <h1 className={styles.title}>MESH-FINITY</h1>
        <p className={styles.subtitle}>Mesh Network Communication</p>

        {!submitted ? (
          <div className={styles.content}>
            <div className={styles.launchBox}>
              <span className={styles.launchLabel}>Launching</span>
              <span className={styles.launchDate}>APRIL 2026</span>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                required
                placeholder="Enter your email for updates"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className={styles.button}>
                Join List
              </button>
            </form>
            <p className={styles.disclaimer}>
              Be the first to know when we go live.
            </p>
          </div>
        ) : (
          <div className={styles.successMessage}>
            <h2>You're on the list!</h2>
            <p>We'll reach out as we approach the April 2026 rollout.</p>
          </div>
        )}
      </div>

      <footer className={styles.footer}>© 2026 MESH-FINITY.COM</footer>
    </main>
  );
}
