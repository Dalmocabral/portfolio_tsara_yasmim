import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Cursos', href: '#cursos', id: 'cursos' },
  { label: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
  { label: 'Contatos', href: '#contatos', id: 'contatos' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  // Scrollspy: detecta automaticamente qual seção está visível na tela
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveItem(item.label)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (label, href) => {
    setActiveItem(label)
    setMobileMenuOpen(false)

    const targetEl = document.querySelector(href)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('Home', '#home')
          }}
        >
          Tsara Manouche Yasmim
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.label, item.href)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`navbar-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="mobile-menu" aria-label="Menu de navegação mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`mobile-nav-link ${activeItem === item.label ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.label, item.href)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
