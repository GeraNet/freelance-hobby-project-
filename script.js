body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #0b0f1a, #111827);
  color: white;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.topbar {
  text-align: center;
}

.tagline {
  color: #aaa;
}

.card {
  background: #1f2937;
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.hover:hover {
  transform: translateY(-5px);
  transition: 0.3s;
}

.badge {
  background: #facc15;
  color: black;
  padding: 10px;
  border-radius: 8px;
}

.badge2 {
  background: #2563eb;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
}

.footer {
  text-align: center;
  color: #888;
  margin-top: 20px;
}

/* ANIMATION */
.fade-in {
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.6s;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
