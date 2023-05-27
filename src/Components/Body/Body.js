import React from 'react'
import Card from './Card/Card'
import './Card/Card.css'


const Body = () => {
  return (
    <div className='ContainerBody '>


      <div className='wrapper'>

        <a className='CardStyle' href='https://linktr.ee/SiteResposta' target="_blank" rel="noreferrer">
          <Card
            download='DOWNLOAD DE LIVROS'
            textDownload='Aqui você encontrará os download dos livros atuais e semestres passados, aulas, videoaulas e documentos gerais sobre programação.'
            ButtonDownload='Downloads'
          />
        </a>

        <a className='CardStyle' href='https://linktr.ee/grupossiteresposta' target='_blank' rel="noreferrer" style={{ textDecoration: 'none !important' }}>
          <Card
            download='GRUPOS E REDES SOCIAIS'
            textDownload='Aqui você encontrará download dos livros atuais e semestres passados, aulas, videoaulas e documentos gerais sobre programação!'
            ButtonGrupos='grupos'
          />
        </a>


        <a className='CardStyle' href='https://linktr.ee/sitesantigos' target='_blank' rel="noreferrer" style={{ textDecoration: 'none !important' }}>
          <Card
            download='SITES 1° e 2° SEMESTRE'
            textDownload='Aqui você encontrará links para os sites dos semestres passados. Até o momento o primeiro semestre, segundo semestre e outros.'
            ButtonDatas='sites'
          />
        </a>
      </div>
    </div >
  )
}

export default Body







