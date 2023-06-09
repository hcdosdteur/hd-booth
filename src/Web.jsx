import { useRef, useState } from 'react';
import { styled } from '@stitches/react';

const guest = {
	id: 'guest',
	pw: 'guest',
};
const admin = {
	id: 'admin',
	pw: 'super_secret_passWd',
};

function Web() {
	const [login, setLogin] = useState(false);
	const [loginId, setLoginId] = useState('');
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const refid = useRef();
	const refpw = useRef();

	const ChangeId = (e) => {
		const val = e.target.value;
		setId(val);
	};
	const ChangePw = (e) => {
		const val = e.target.value;
		setPw(val);
	};
	const LoginFun = () => {
		console.log(id, pw);
		if (id === guest.id && pw === guest.pw) {
			setLoginId('guest');
			setLogin(true);
		} else if (id === admin.id && pw === admin.pw) {
			setLoginId('admin');
			setLogin(true);
		} else if (id === "admin'--" || id === "admin'#") {
			setLoginId('admin');
			setLogin(true);
		} else if (id === "guest'--" || id === "guest'#") {
			setLoginId('guest');
			setLogin(true);
		} else alert('id와 password를 다시 확인해주세요');
	};
	const Logout = () => {
		setLogin(false);
		setId('');
		setPw('');
	};

	return (
		<Wrapper>
			<Title>Sql Injection</Title>
			<Container>
				{login ? (
					<div>
						<h1 style={{ textAlign: 'center' }}>Hello, {loginId}</h1>
						{loginId === 'admin' && <h2>Password : super_secret_passWd</h2>}
						{loginId === 'guest' && <h2>당신은 admin이 아닙니다! 비밀번호를 보여줄 수 없어요.</h2>}
						<button onClick={Logout} style={{ width: '100%' }}>
							Logout
						</button>
					</div>
				) : (
					<Login>
						<div>
							<Text>ID</Text>
							<Inp onChange={(e) => ChangeId(e)} type="text" />
						</div>
						<div>
							<Text>PASSWORD</Text>
							<Inp onChange={(e) => ChangePw(e)} type="text" />
						</div>
						<button onClick={LoginFun}>LOGIN</button>
					</Login>
				)}
			</Container>
			<Exploit>
				SELECT user FROM user_table WHERE id='<Span ref={refid}>{id}</Span>' AND pw='<Span ref={refpw}>{pw}</Span>'
			</Exploit>
			<Data>
				<div>
					id : guest
					<br />
					pw : guest
				</div>
				<div>
					id : admin
					<br />
					pw : *****
				</div>
			</Data>
		</Wrapper>
	);
}

export default Web;

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

const Text = styled('div', {
	fontSize: '1.4rem',
});

const Inp = styled('input', {
	width: '30rem',
	height: '2.5rem',
	fontSize: '2rem',
	padding: '0 .5rem',
});

const Login = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
});

const Exploit = styled('h2', {
	marginTop: '50px',
	textAlign: 'center',
});

const Span = styled('span', {
	color: 'lightgreen',
});

const Data = styled('div', {
	display: 'flex',
	width: '100%',
	bottom: '0',
	fontWeight: 'bold',
	justifyContent: 'center',
	gap: '4rem',
});
