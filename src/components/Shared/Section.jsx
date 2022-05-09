import PropTypes from 'prop-types';

const Section = ({ link, header, children }) => (
	<section id={link} className="lg:p-20 mt-10">
		<div className="flex flex-row">
			<h2 className="font-bold text-xl lg:text-2xl">
				{header}
			</h2>
		</div>
		<hr className="section-header-separator" />
		<div className="flex flex-row mt-3">
			{children}
		</div>
	</section>
);

Section.propTypes = {
	link: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
};

export default Section;