import { supabase } from '../lib/SupabaseClient';

const LoginButton = () => {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          scopes: 'https://www.googleapis.com/auth/calendar.events',
        },
      });
  };

  return (
    <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 rounded text-white">
      Sign in with Google to Schedule
    </button>
  );
};

export default LoginButton;
