//const BASE_URL = 'http://192.168.31.137:8080';
const BASE_URL = 'http://127.0.0.1:8080';

export const getData = async () => {
	//return await (await fetch(`http://${BASE_URL}/card`)).json();
	return await (await fetch(`${BASE_URL}/data`)).json();
	//
	//return {
	//	name: 'John',
	//	surName: 'Wick',
	//	age: 30
	//};
};
