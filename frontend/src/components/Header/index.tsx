import { IoLogoGithub } from 'react-icons/io'
import './styles.css'

export function Header() {
return (
        <header>
            <nav className='container'>
                <div className='catalog-nav-content'>
                    <h1>Movie Catalog</h1>
                    <a href="https://github.com/AlexandreNoguez">
                        <div className='catalog-source'>
                            <IoLogoGithub className='gitLogo'/>
                            <p>/Alexandre Noguez</p>
                        </div>
                    </a>
              </div>
            </nav>
          </header>
  )
}

export default Header;