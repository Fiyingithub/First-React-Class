// -----This is how to link css------
import './Navbar.css'

// -------This is how to export as Nemed Export----
export const Navbar = () => {
  return (
    <nav className='nav_content'>
        <div className='container nav__container'>
            <div className='logo'>
                <h1>Ade</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </div>
    </nav>
  )
}
