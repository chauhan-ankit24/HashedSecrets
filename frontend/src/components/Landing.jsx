import { useNavigate } from 'react-router-dom'

// Landing page component
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Hashed Secrets</h1>
      <button onClick={() => navigate("/register")}>Enter <i className="fa fa-door-open"></i></button>
    </div>
  );
};
