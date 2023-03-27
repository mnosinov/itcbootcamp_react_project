import { useState, useEffect } from 'react';
import './Card.css';
import { getData } from './config';

const Card = () => {

	const [ cardData, setCardData ] = useState();

	// 1. useEffect - когда не передается второй аргумент
	//useEffect( () => {
	//	console.log("это текст без второго аргумента");
	//});
	// 2. useEffect - когда в качестве второго аргумента передается пустой массив - нет никакой зависимости, rendering происходит 1 раз
	//useEffect( () => {
	//	console.log("hello:", hello);
	//	console.log("card data:", cardData);
	//}, []);
	// 3. useEffect - когда передается второй аргумент - значит есть зависимости
	useEffect( () => {
		getData().then(res => {
			console.log(res);
			setCardData(res);
		});
	}, []);

  return (
		<div className="card-container">
			<table border="1">
				<thead><tr><th>Name</th><th>Coach</th><th>Captain</th></tr></thead>
				<tbody>
					{
						cardData ?
							<tr>
								<td>{cardData.name}</td>
								<td>{cardData.coach}</td>
								<td>{cardData.captain}</td>
							</tr> : null
					}
				</tbody>
			</table>
		</div>
  );
}

export default Card;
