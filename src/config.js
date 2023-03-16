const BASE_URL = '192.168.31.137';

export const getData = async () => {
	return await (await fetch(`http://${BASE_URL}/card`)).json();
};
