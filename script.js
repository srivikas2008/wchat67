// Replace the entire content of script.js with this:
const API_URL = "https://wchat-backend-xcjq.onrender.com";

async function handleAuth(isLogin) {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const endpoint = isLogin ? "/login" : "/signup";

  const res = await fetch(API_URL + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: u, password: p })
  });

  const data = await res.json();
  if (res.ok) {
    if (isLogin) {
      localStorage.setItem("wchat_token", data.token);
      localStorage.setItem("wchat_user", u);
      window.location.href = "chat.html";
    } else {
      alert("Registration successful. Please log in.");
      window.location.reload();
    }
  } else {
    alert("Error: " + (data.error || "Request failed"));
  }
}
