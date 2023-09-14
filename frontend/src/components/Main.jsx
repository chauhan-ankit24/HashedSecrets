// Importing the required libraries
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// Exporting the Main component to App component 
export const Main = () => {

  const navigate = useNavigate();

  // LOGOUT FUNCTION
  // Removing the username from local storage and navigate to login page
  const logout = async () => {
    localStorage.removeItem('ls-username');
    navigate('/login');
  }

  // Run after the page is entered 
  useEffect(() => {
    const username = localStorage.getItem('ls-username');
    if (!username) { alert('session expired'); navigate('/login') }

  }, [])

  // Returing the home page of login security
  return (
    <div>
      <h1>Welcome to Hashed Secrets <br />This is Homepage</h1>
      <button onClick={logout}>Logout <i className="fa-sharp fa fa-door-closed"></i></button>
    </div>
  )
}
