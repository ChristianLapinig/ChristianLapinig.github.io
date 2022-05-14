import Section from 'components/Shared/Section';
import AdobeLink from 'components/Shared/AdobeLink';
import headshot from 'images/IMG_2829.jpg';

const About = () => (
	<Section link={'about'} header={'About'}>
		<div className="flex flex-col-reverse lg:flex-row">
			<div className="lg:w-2/4">
				<p> 
					Salutations! My name is Christian and I'm passionate about creating applications
					that make every day life easier. My programming journey started in 2006 when I started
					using HTML to give life to my boring MySpace profile. My interest was taken to new heights
					when my dad introduced me to JavaScript when I was 16. Since then, I have fallen in love
					with every aspect of programming. From writing "Hello, world" for the first time in a
					new language, to pulling my hair out when I can't figure out a problem only to find that
					the solution is a lot easier than I am making it out to be, to deploying a website and
					seeing the all work I put into it live.
				</p>	
				<p className="mt-3">
					Nowadays, I've had the opportunity to build full-stack web applications from the ground
					up at an auto transportation broker and now work at <AdobeLink /> as a Technical Support
					Engineer focusing on resolving issues customers face with&nbsp;
					<a
						className="transition ease-in-out delay-150 text-red-400 hover:text-red-500"
						href="https://business.adobe.com/sg/products/experience-manager/adobe-experience-manager.html"
						target="_blank"
						rel="noreferrer"
					>
						Adobe Experience Manager
					</a>.
				</p>
			</div>
			<div className="mb-5 lg:pl-[10rem] lg:w-2/4">
				<img
					id="headshot"
					className="h-auto lg:max-w-[375px]"
					src={headshot}
					alt="Christian Lapinig"
				/>
			</div>
		</div>
	</Section>
);

export default About;
