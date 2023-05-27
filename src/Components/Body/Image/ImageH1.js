import React from 'react'
import './ImageH1.css'
import ImageHome from '../../imagensSITE/ImageHome.png'

const ImageH1 = () => {
    return (
        <section>
            <div className='ImageH1Container '>

                <section>
                    <h1>
                        Site colaborativo para o curso de desenvolvimento de sistemas
                        <p style={{ color: '#32cd32', fontSize: '23px', fontWeight: '800', fontFamily: 'sans-serif' }}>PRIMEIRO SEMESTRE</p>

                    </h1>

                </section>

                <div>
                    <img
                        src={ImageHome}
                    />
                </div>
            </div>
        </section>

    )
}

export default ImageH1