import './SidebarMenu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../Respostas.css'

const SidebarMenu = (props) => {
    return (
        <div>
            <div>
                <section className='ContentMenu2' >
                    <h3 style={{ textAlign: 'center' }}>MENU</h3>
                    <div className='ScrollBar' >
                        <div >
                            <ul >
                                <div style={{ textAlign: 'center' }} >

                                    <h3>Análise Orientada a Objetvo</h3>
                                </div>

                                <div style={{
                                    padding: '10px 20px ', backgroundColor: '#E7E7FF'
                                }}>
                                    <li>

                                        <Link to='atvaprendizagemanalise/analiseaap1/questao1analise'>
                                            <Link className='teste' to='atvaprendizagemanalise/analiseaap1/questao1analise'>
                                                Aprendizagem
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='atvdiagnosticaanalise/adg1analisediagnostic/questao1diagnostic'>
                                            <Link className='teste' to='atvdiagnosticaanalise/adg1analisediagnostic/questao1diagnostic'>
                                                Diagnóstica
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1analisevirtual1/av1analisevirtual/questao1virtual'>
                                            Av Virtual
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>



                        <div>
                            <ul>
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3>Linguagem Orientada a Objetvo</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>
                                        <Link to='atvaprendizlinguagem/linguagemapp1/questao1aprendizagemlinguagem'>
                                            <Link className='teste' to='atvaprendizlinguagem/linguagemapp1/questao1aprendizagemlinguagem'>
                                                Aprendizagem
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='atvdiagnosticalinguagem/adg1diagnosticlinguagem/questao1diagnosticlinguagem'>
                                            <Link className='teste' to='atvdiagnosticalinguagem/adg1diagnosticlinguagem/questao1diagnosticlinguagem'>
                                                Diagnóstica
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1linguagemvirtual1/av1linguagemvirtual2/questao1virtuallinguagem'>
                                            Av Virtual
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>


                        <div >
                            <ul >
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3>Programação e Desenvolvimento de Banco de Dados</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>
                                        <Link to='atvaprendizbancodados/bancodadosapp1/questao1aprendizagembancodados'>
                                            <Link className='teste' to='atvaprendizbancodados/bancodadosapp1/questao1aprendizagembancodados'>
                                                Aprendizagem
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='atvdiagnosticabancodados/adg1diagnosticbancodados/questao1diagnosticbancodados'>
                                            <Link className='teste' to='atvdiagnosticabancodados/adg1diagnosticbancodados/questao1diagnosticbancodados'>
                                                Diagnóstica
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1bancodadosvirtual1/av1bancodadosvirtual2/questao1virtualbancodados'>
                                            Av Virtual
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>


                        <div>
                            <ul>
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3>Linguagem de Programação</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>
                                        <Link to='atvaprendizprogramacao/programacaoapp1/questao1aprendizagemprogramacao'>
                                            <Link className='teste' to='atvaprendizprogramacao/programacaoapp1/questao1aprendizagemprogramacao'>

                                                Aprendizagem
                                            </Link>
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to='atvdiagnosticaprogramacao/adg1diagnosticprogramacao/questao1diagnosticprogramacao'>
                                            <Link className='teste' to='atvdiagnosticaprogramacao/adg1diagnosticprogramacao/questao1diagnosticprogramacao'>
                                                Diagnóstica
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1programacaovirtual1/av1programacaovirtual2/questao1virtualprogramacao'>

                                            Av Virtual
                                        </Link>

                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3>Interface e Usabilidade</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>
                                        <Link to='atvaprendizui/uiapp1/questao1Aprendizagemui'>
                                            <Link className='teste' to='atvaprendizui/uiapp1/questao1Aprendizagemui'>

                                                Aprendizagem
                                            </Link>
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to='atvdiagnosticaui/adg1diagnosticui/questao1diagnosticui'>
                                            <Link className='teste' to='atvdiagnosticaui/adg1diagnosticui/questao1diagnosticui'>
                                                Diagnóstica
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1uivirtual1/av1uivirtual2/questao1virtualui'>

                                            Av Virtual
                                        </Link>

                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <div className='div1' style={{ textAlign: 'center' }}>
                                    <h3 >Ed - Design Think</h3></div>
                                <div style={{ padding: '10px 20px ', backgroundColor: '#E7E7FF' }}>
                                    <li>
                                        <Link to='atvaprendizdesign/designapp1/questao1aprendizagemdesign'>
                                            <Link className='teste' to='atvaprendizdesign/designapp1/questao1aprendizagemdesign'>

                                                Aprendizagem
                                            </Link>
                                        </Link>

                                    </li>
                                    <li>
                                        <Link to='atvdiagnosticadesign/adg1diagnosticdesign/questao1diagnosticdesign'>
                                            <Link className='teste' to='atvdiagnosticadesign/adg1diagnosticdesign/questao1diagnosticdesign'>
                                                Diagnóstica
                                            </Link>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='teste' to='av1designvirtual1/av1designvirtual2/questao1virtualdesign'>

                                            Av Virtual
                                        </Link>

                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>



                </section>
            </div >
        </div >
    )
}

export default SidebarMenu