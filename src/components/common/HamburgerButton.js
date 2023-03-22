const HamburgerButton = ({ onClick, menuOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        menuOpen ? 'rotate-90' : 'rotate-0'
      } md:hidden right-2 transition-all duration-200`}
    >
      <svg viewBox="0 0 100 80" width="20" height="20">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </button>
  )
}
export default HamburgerButton
