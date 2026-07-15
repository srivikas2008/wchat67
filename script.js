const API_URL = "https://wchat-backend-xcjq.onrender.com";

const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", async () => {
    const u = document.getElementById("signupUsername").value;
    const p = document.getElementById("signupPassword").value;

    console.log("Attempting to send:", { username: u, password: p });

    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: u, password: p })
      });
      
      const text = await res.text();
      if (res.ok) {
        alert("Success! Account created.");
        window.location.href = "index.html";
      } else {
        alert("Server rejected signup: " + text);
      }
    } catch (err) {
      alert("Connection error: " + err.message);
    }
  });
}
