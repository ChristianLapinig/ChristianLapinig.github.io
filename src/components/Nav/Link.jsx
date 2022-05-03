import PropTypes from 'prop-types';

const Link = ({ link }) => (
	<li>
		<a
			href={`#${link}`}
			className="block py-2 pr-4 pl-3 transition ease-in-out delay-150 hover:text-white duration-200"
		>
			{link.replace(link.charAt(0), link.charAt(0).toUpperCase())}
		</a>
	</li>
);

Link.propTypes = {
	link: PropTypes.string.isRequired,
};

export default Link;