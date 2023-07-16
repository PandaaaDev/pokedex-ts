import axios from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
interface IFormInput {
	username: string;
	password: string;
}
type IresponseData = boolean | undefined | null;
const Login = () => {
	const [invalidData, setInvalidData] = useState<IresponseData>(null);
	const [message, setMessage] = useState('');
	const submitHandler: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
		const url = 'http://localhost:3000/auth/login';
		axios
			.post(url, { username: data.username, password: data.password })
			.then((res) => {
				setInvalidData(false);
				console.log(res);
			})
			.catch((error) => {
				setInvalidData(true);
				setMessage(error.response.data.message);
			});
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();
	return (
		<>
			<form onSubmit={handleSubmit(submitHandler)}>
				<label htmlFor='username'>Username:</label>
				<input
					id='username'
					{...register('username', { required: true })}
				></input>
				{errors.username?.type === 'required' && (
					<span>This field is required</span>
				)}
				<label htmlFor='password'>Password:</label>
				<input
					id='password'
					{...register('password', { required: true })}
					type='password'
				></input>
				{errors.password?.type === 'required' && (
					<span>This field is required</span>
				)}

				{invalidData && <div>{message}</div>}
				<button type='submit'>Login</button>
			</form>
		</>
	);
};

export default Login;
