import Page from '@/Templates/Page';
import axios from 'axios';
const Login = () => {
	const submitHandler = async () => {
		event?.preventDefault();
		const url = 'http://localhost:3000/auth/login';
		const body = {
			username: 'Panda',
			password: 'passwordd',
		};
		axios
			.post(url, body)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => console.error(error));
	};
	return (
		<Page>
			<form onSubmit={submitHandler}>
				<label htmlFor='username'>Username:</label>
				<input id='username'></input>
				<label htmlFor='password'>Password:</label>
				<input id='password'></input>
				<button>Login</button>
			</form>
		</Page>
	);
};

export default Login;
