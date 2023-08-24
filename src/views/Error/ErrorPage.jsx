import { NavLink } from "react-router-dom"
import img from '../../assets/404error1.jpg'

function Error() {
	return (
		<div>
			<img class='img' src={img} />
			<NavLink to='/'><button type="button">GET ME HOME</button></NavLink>
		</div>
	)
}

export default Error