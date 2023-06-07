import { useRef } from 'react';
import { styled } from '@stitches/react';

function Pwn() {
	const arr = [];
	const status = useRef();
	const inp1 = useRef();
	const inp2 = useRef();
	const inp3 = useRef();
	const inp4 = useRef();
	const inp5 = useRef();
	const inp6 = useRef();
	const inp7 = useRef();
	const inp8 = useRef();
	const element = {
		inp1: inp1,
		inp2: inp2,
		inp3: inp3,
		inp4: inp4,
		inp5: inp5,
		inp6: inp6,
		inp7: inp7,
		inp8: inp8,
	};
	let count = 1;

	const Focus = () => {
		if (count === 1) {
			element[`inp${count}`].current.focus();
		}
	};

	const Count = (e) => {
		const target = e.target.value;
		const len = target.length;

		if (len === 1 && count <= 8) {
			arr[count - 1] = target;
			// console.log(count);
			count += 1;
			if (count >= 9) count = 8;
			element[`inp${count}`].current.focus();
		} else if (len === 0 && count === 8) {
			status.current.style.color = 'red';
			status.current.innerHTML = 'incorrect';
		}
		if (element[`inp8`].current.value) {
			// console.log(arr);
			let check = 1;
			for (let i = 0; i < 4; i++) {
				if (arr[i] !== arr[i + 4]) {
					// console.log(`arr[${i}] !== arr[${i + 4}]`);
					check = 0;
					break;
				}
			}
			if (check === 1) {
				// console.dir(status.current);
				status.current.style.color = 'green';
				status.current.innerHTML = 'correct';
				// console.log('yes!', count);
			}
		}
	};

	const Key = (e) => {
		const len = e.target.value.length;
		if (e.key === 'Backspace' && len === 0 && count > 1) {
			count -= 1;
			element[`inp${count}`].current.focus();
			status.current.style.color = 'red';
			status.current.innerHTML = 'incorrect';
		}
	};

	return (
		<Wrapper>
			<Title>BOF</Title>
			<Container onKeyDown={(e) => Key(e)}>
				<div>
					<Inp onFocus={Focus} color={'green'} ref={inp1} onChange={(e) => Count(e)} type="text" maxLength={1} />
					<Inp onFocus={Focus} color={'green'} ref={inp2} onChange={(e) => Count(e)} type="text" maxLength={1} />
					<Inp onFocus={Focus} color={'green'} ref={inp3} onChange={(e) => Count(e)} type="text" maxLength={1} />
					<Inp onFocus={Focus} color={'green'} ref={inp4} onChange={(e) => Count(e)} type="text" maxLength={1} />
				</div>
				<Arrow src="/arrow.png" alt="error" />
				<div>
					<Inp onFocus={Focus} color={'red'} ref={inp5} onChange={(e) => Count(e)} type="text" maxLength={1} />
					<Inp onFocus={Focus} color={'red'} ref={inp6} onChange={(e) => Count(e)} type="text" maxLength={1} />
					<Inp onFocus={Focus} color={'red'} ref={inp7} onChange={(e) => Count(e)} type="text" maxLength={1} />
					<Inp onFocus={Focus} color={'red'} ref={inp8} onChange={(e) => Count(e)} type="text" maxLength={1} />
				</div>
			</Container>
			<Bool ref={status}>incorrect</Bool>
		</Wrapper>
	);
}

export default Pwn;

const Wrapper = styled('div', {
	position: 'relative',
	width: '100vw',
});

const Title = styled('h1', {
	width: '100%',
	fontSize: '80px',
	textAlign: 'center',
	marginTop: '0',
});

const Container = styled('div', {
	display: 'flex',
	height: '50%',
	justifyContent: 'center',
});

const Inp = styled('input', {
	width: '200px',
	height: '200px',
	fontSize: '200px',
	textAlign: 'center',
	userSelect: 'none',
	variants: {
		color: {
			green: {
				color: 'green',
			},
			red: {
				color: 'red',
			},
		},
	},
});

const Arrow = styled('img', {
	transform: 'scaleX(-1)',
});

const Bool = styled('h1', {
	width: '100%',
	textAlign: 'center',
	color: 'red',
});
