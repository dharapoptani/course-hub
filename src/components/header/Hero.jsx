import React from 'react';
import Button from '../../UI/Button';
import hero from '../../images/hero.png';

function Hero() {
	const bluePrint = {
		heading: 'Hold our hand on the path of your career.',
		subHeading:
			'Take on the professional world by learning and practicing in-demand skills with us.',
	};

	return (
		<section className="h-[100vh] flex flex-col gap-2 items-center px-4 py-4 relative sm:px-8 md:flex-row md:pt-0  lg:pt-12 xl:pt-16 xl:px-16">
			<div className="hero-inner absolute top-0 left-0 w-full h-full bg-red-400 z-[-1]"></div>
			<div className="flex flex-col w-[50%] gap-6">
				<h1 className="text-7xl font-bold">{bluePrint.heading}</h1>
				<p className="text-xl">{bluePrint.subHeading}</p>
				<div>
					<button
						className="border-none inline-block px-6 py-3 bg-violet-700 font-semibold text-lg text-white rounded
          "
					>
						Enroll Now
					</button>
					<button>Learn More</button>
				</div>
			</div>
			<div
				className="h-full w-[50%] bg-cover"
				style={{ backgroundImage: `url(${hero})` }}
			></div>
		</section>
	);
}

export default Hero;
