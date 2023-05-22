import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ButtonResposta from '../../../ButtonResposta'
import AlternativasProps from './AlternativasProps'
import SideBarMenu from '../../SidebarMenu/SidebarMenu'

const AtvAprendizagem = (props) => {
  return (
    <div className='ContainerRespostas' >
      <div>
        <section className='GridResposta'>

          <div className='teste'>
            <h2>
              <AlternativasProps
                nomemateria='Ed - Cultura Digital (ADG)'
              />
            </h2>
          </div>
          <div>
            <div>

              <div className='ContentButton'>
                <ul>

                  <NavLink to='adg1diagnosticdesign/questao1diagnosticdesign'>
                    <li>
                      <ButtonResposta
                        adg='adg 1'
                      />
                    </li>
                  </NavLink>

                  <Link to='adg2diagnosticdesign2/questao1diagnosticdesign2'>
                    <li><ButtonResposta
                      adg='adg 2'
                    />
                    </li>
                  </Link>


                  <Link to='adg3diagnosticdesign3/questao1diagnosticdesign3'>
                    <li><ButtonResposta
                      adg='adg 3'
                    />
                    </li>
                  </Link>

                  <Link to='adg4diagnosticdesign4/questao1diagnosticdesign4'>
                    <li>
                      <ButtonResposta
                        adg='adg 4'
                      />
                    </li>
                  </Link>

                </ul>
                <Outlet />
              </div>
            </div>
          </div >
        </section >
      </div >
    </div >

  )
}


export default AtvAprendizagem