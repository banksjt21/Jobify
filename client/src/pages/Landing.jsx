import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Quinoa crucifix swag coloring book. Cardigan leggings
						hammock, trust fund direct trade sus put a bird on it
						before they sold out kombucha meditation tattooed
						farm-to-table glossier. Narwhal kale chips tilde,
						chillwave grailed waistcoat palo santo hashtag ascot
						post-ironic locavore.
					</p>
					<Link to="/register" className="btn register-link">
						Register
					</Link>
					<Link to="/login" className="btn">
						Login / Demo User
					</Link>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
