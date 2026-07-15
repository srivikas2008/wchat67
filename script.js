import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Replace these with your project details
const SUPABASE_URL = 'https://irjloknpcaqaeerpndtd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6D1l_VPeKetSorRgpD9sCg_8nQO1nlN';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Handle Sign Up
async function handleSignup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Check your email for the confirmation link!");
  }
}

// Handle Login
async function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    window.location.href = "chat.html";
  }
}

// Expose functions to the window so HTML buttons can find them
window.handleSignup = handleSignup;
window.handleLogin = handleLogin;
