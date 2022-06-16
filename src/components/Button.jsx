
export const Button = props => {
  return(
    <>
  <button className="ui active button">
    <i className="user icon" />
    { props.title }
  </button>
    </>
  )
}