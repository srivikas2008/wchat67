const API_URL = "https://wchat-backend-xcjq.onrender.com";

// Signup Logic
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", async () => {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      
      if (res.ok) {
        alert("Success! Account created.");
        window.location.href = "index.html";
      } else {
        const err = await res.text();
        alert("Signup failed: " + err);
      }
    } catch (err) {
      alert("❌ Connection error: " + err.message);
    }
  });
}
