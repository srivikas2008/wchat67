const API_URL = "https://wchat-backend-xcjq.onrender.com";

// LOGIN
async function handleLogin() {
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
  } catch (err) { alert("Error connecting to server"); }
}

// SIGNUP
async function handleSignup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      alert("Success! Now log in.");
      window.location.href = "index.html";
    } else {
      alert("Signup failed");
    }
  } catch (err) { alert("Error connecting to server"); }
}
