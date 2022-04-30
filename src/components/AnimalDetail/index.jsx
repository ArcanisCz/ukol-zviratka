import React from "react";
import './style.css';
//nezapomínej změnit class na className

const AnimalDetail = ({animals}) => {
	console.log(animals)
    
    return (
        <div className="detail">
			<div className="detail__content">

				<div className="detail__header">
					<img className="detail__image" src={animals.foto} alt="xxx" />
					<div className="detail__title">
						<h2 className="detail__name"><span>{animals.nazev}</span></h2>
						<div className="detail__latin"><span>{animals.nazevLatinsky}</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__desc">
						{animals.popis}
					</p>

					<div className="detail__items">
						<div className="detail__item">
							<h3>Domovina</h3>
							<p>{animals.domovina}</p>
						</div>
						<div className="detail__item">
							<h3>Biotop</h3>
							<p>{animals.biotop}</p>
						</div>
						<div className="detail__item">
							<h3>Potrava</h3>
							<p>{animals.potrava}</p>
						</div>
						<div className="detail__item">
							<h3>Velikost</h3>
							<p>{animals.velikost}</p>
						</div>
					</div>

					<div className="detail__zoo">
						<h3>Najdete v těchto ZOO</h3>
						<p></p>
					</div>
				</div>

			</div>
		</div>
    )
}

export default AnimalDetail;