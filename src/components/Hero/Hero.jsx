import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import Navbar from '../Navbar/Navbar';
import { HeroSection, HeroText, ButtonWrapper } from './HeroStyles';
import { useInView } from 'react-intersection-observer';

function Hero() {
	const { ref, inView } = useInView({
		rootMargin: '-80px',
	});

	return (
		<>
			<HeroSection ref={ref} id='hero'>
				<Container>
					<MainHeading>Find the best events and meetups with us</MainHeading>
					<HeroText>
						We help you find all of your favourite events in one place
					</HeroText>

					<ButtonWrapper>
						<Link to='/sign-up'>
							<Button big>Find your event</Button>
						</Link>
					</ButtonWrapper>
				</Container>
			</HeroSection>
			<Navbar hide={inView} />
		</>
	);
}

export default Hero;
