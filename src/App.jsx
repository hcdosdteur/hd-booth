import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@stitches/react';

const App = () => {
	return (
		<Wrapper>
			<Link to="/pwn">
				<button>GO TO PWN</button>
			</Link>
			<Link to="/web">
				<button>GO TO WEB</button>
			</Link>
		</Wrapper>
	);
};

export default App;

const Wrapper = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	gap: '1rem',
	width: '100vw',
});
