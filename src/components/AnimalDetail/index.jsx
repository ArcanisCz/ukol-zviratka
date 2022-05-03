import React from 'react';
import './style.css';

const AnimalDetail = ({ selectedAnimal, data }) => {
    
    const selectedAnimalData =
    data &&
    data["zvirata"].filter((animal) => {
      return animal.nazev === selectedAnimal;
    });

    return (
        <div className='detail'>
            <div className='detail__content'>
                <div className='detail__header'>
                    <img
                        className="detail__image"
                        src={data && selectedAnimalData[0].foto}
                        alt={data && selectedAnimalData[0].nazev}
                    />
                    <div className="detail__title">
                        <h2 className="detail__name">
                            <span>{data && selectedAnimalData[0].nazev}</span>
                        </h2>
                        <div className="detail__latin">
                            <span>{data && selectedAnimalData[0].nazevLatinsky}</span>
                        </div>
                    </div>
                </div>

                <div className="detail__info">
                    <p className="detail__desc">{data && selectedAnimalData[0].popis}</p>

                    <div className="detail__items">
                        <div className="detail__item">
                            <h3>Domovina</h3>
                            <p>{data && selectedAnimalData[0].domovina}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Biotop</h3>
                            <p>{data && selectedAnimalData[0].biotop}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Potrava</h3>
                            <p>{data && selectedAnimalData[0].potrava}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Velikost</h3>
                            <p>{data && selectedAnimalData[0].velikost}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AnimalDetail;
