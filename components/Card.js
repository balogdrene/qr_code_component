import classes from "../styles/Card.module.css"

export default function Card(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className={classes.card}>
      {props.children}
    </div>
  )
}
