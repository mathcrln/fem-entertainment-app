const BookmarkIcon = ({ className, empty }: { className?: string; empty?: boolean }) => {
	if (empty) return <BookmarkEmpty className={className} />;
	return <BookmarkFull className={className} />;
};

const BookmarkEmpty = ({ className }: { className?: string }) => {
	return (
		<svg className={`fill-transparent ${className}`} width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
			<path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='#FFF' strokeWidth='1.5' />
		</svg>
	);
};

const BookmarkFull = ({ className }: { className?: string }) => {
	return (
		<svg className={`fill-transparent ${className}`} width='12' height='14' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z'
				fill='#FFF'
			/>
		</svg>
	);
};

export const BookmarkIconMenu = ({ className }: { className?: string }) => {
	return (
		<svg width='17' height='20' className={`fill-current ${className}`} xmlns='http://www.w3.org/2000/svg'>
			<path d='M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z' />
		</svg>
	);
};

export default BookmarkIcon;
