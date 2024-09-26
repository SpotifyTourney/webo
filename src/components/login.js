import '../css/login.css';

const scope = 'user-library-read';
const clientId = '3dfe1c1bfaa648648a66712b3287ea10';
const redirectUri = 'http://localhost:3000/home';

function Login() {

    const handleLogin = () => {
        window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    }

    return (
        <div className="login-card">
            <button id="login-button" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;

