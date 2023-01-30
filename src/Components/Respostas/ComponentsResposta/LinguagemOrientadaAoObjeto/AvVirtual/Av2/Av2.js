import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ButtonResposta from '../../../../ButtonRespostaAv'
import AlternativasProps from '../AlternativasProps'


const Aap1 = () => {
    return (
        <div>
            <div className='ContentButton'>
                <ul className='Av'>
                    <li>
                        <Link to='questao1virtuallinguagem2'>
                            <ButtonResposta
                                questao='questão 1'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='questao2virtuallinguagem2'>
                            <ButtonResposta
                                questao='questão 2'

                            />
                        </Link>
                    </li>

                    <li>
                        <Link to='questao3virtuallinguagem2'>
                            <ButtonResposta
                                questao='questão 3'

                            />
                        </Link>
                    </li>

                    <li>
                        <Link to='questao4virtuallinguagem2'>
                            <ButtonResposta
                                questao='questão 4'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='questao5virtuallinguagem2'>
                            <ButtonResposta
                                questao='questão 5'
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />

        </div>
    )
}

export default Aap1