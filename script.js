import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://irjloknpcaqaeerpndtd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6D1l_VPeKetSorRgpD9sCg_8nQO1nlN';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// LOGIN
window.handleLogin = async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else window.location.href = "chat.html";
};

// SIGNUP
window.handleSignup = async () => {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) alert(error.message);
  else alert("Check your email for confirmation!");
};

// This ensures your original 140 lines of chat code still work
// Just make sure your function names in chat.html match these
export { supabase };
