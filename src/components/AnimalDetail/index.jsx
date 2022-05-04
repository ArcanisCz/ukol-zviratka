import React, {useState, useEffect} from "react";
import './style.css';
//nezapomínej změnit class na className

//const xy = zooList.map((item) => {return zoo.includes(item.id) ? item.jmeno.replace("ZOO ", ""): null})

const AnimalDetail = ({animal, zooList}) => {
	
	const {foto, nazev, nazevLatinsky, popis, domovina, biotop, potrava, velikost, zoo} = animal;
	const [zooWithAnimal, setZooWithAnimal] = useState([])

	useEffect (
		() => {
		  const names = zooList.filter((item) => {return zoo.includes(item.id)}).map((item) => {return item.jmeno.replace("ZOO ", "")})
		  setZooWithAnimal(names)
		  console.log(zoo)
		},
		[animal]
	  );

    return (
        <div className="detail">
			<div className="detail__content">

				<div className="detail__header">
					<img className="detail__image" src={foto} alt="xxx" />
					<div className="detail__title">
						<h2 className="detail__name"><span>{nazev}</span></h2>
						<div className="detail__latin"><span>{nazevLatinsky}</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__desc">
						{popis}
					</p>

					<div className="detail__items">
						<div className="detail__item">
							<h3>Domovina</h3>
							<p>{domovina}</p>
						</div>
						<div className="detail__item">
							<h3>Biotop</h3>
							<p>{biotop}</p>
						</div>
						<div className="detail__item">
							<h3>Potrava</h3>
							<p>{potrava}</p>
						</div>
						<div className="detail__item">
							<h3>Velikost</h3>
							<p>{velikost}</p>
						</div>
					</div>

					<div className="detail__zoo">
						<h3>Najdete v těchto ZOO</h3>
						<p>{zooWithAnimal.map((item) => ` ${item},`)}</p>
						
					</div>
				</div>

			</div>
		</div>
    )
}

export default AnimalDetail;