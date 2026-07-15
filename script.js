const API_URL = "https://wchat-backend-xcjq.onrender.com";

// Handle Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("wchat_token", data.token);
        localStorage.setItem("wchat_user", username);
        window.location.href = "chat.html";
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      alert("❌ Login failed: " + err.message);
    }
  });
}

// Handle Signup
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
      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! Redirecting to login.");
        window.location.href = "index.html";
      } else {
        alert("❌ Signup failed: " + (data.error || "Rejection"));
      }
    } catch (err) {
      alert("❌ Signup failed: " + err.message);
    }
  });
}
