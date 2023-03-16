import { useState, useEffect } from 'react';
import './Card.css';

const Card = () => {

	const [ cardData, setCardData ] = useState();
	const [ hello, setHello ] = useState();

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
		console.log("hello:", hello, "card data:", cardData);
	}, [hello, cardData]);

  return (
    <div>
			<div onClick={ () => setHello('hello') }>set Hello</div>
			<div onClick={ () => setHello('hello 2') }>set Hello 2</div>
			<div onClick={ () => setCardData('data 12') }>set data</div>
			<div onClick={ () => setCardData('data 122') }>set data 2</div>
    </div>
  );
}

export default Card;
