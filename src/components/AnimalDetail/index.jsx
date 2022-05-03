import React from 'react';
import "./style.css"

export const AnimalDetail = ({animal}) => {

    return (
        <div className='detail'>
            <div className='detail__header'>
                <div className='detail__image' src={animal.foto} ></div>
                <div className='detail__title'>
                    <h2 className='detail__name'>{animal.nazev}</h2>
                    <div className='detail__latin'>{animal.nazevLatinsky}</div>
                </div>
            </div>

            <div className='detail__info'>
                <p className='detail__desc'>{animal.popis}</p>

                <div className='detail__items'>

                    <div className='detail__item'>
                        <h3>Domovina</h3>
                        <p>{animal.domovina}</p>
                    </div>

                    <div className='detail__item'>
                        <h3>Biotop</h3>
                        <p>{animal.biotop}</p>
                    </div>

                    <div className='detail__item'>
                        <h3>Potrava</h3>
                        <p>{animal.potrava}</p>
                    </div>

                    <div className='detail__item'>
                        <h3>Velikost</h3>
                        <p>{animal.velikost}</p>
                    </div>


                </div>
            </div>
        </div>
    )
}