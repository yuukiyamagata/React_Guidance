
export const Button = props => {
  const { onClick, text, color } = props
  return(
    <>
    <button onClick={ onClick } className={`ui ${color} button`}>
    { text }
    </button>
    </>
  )
}