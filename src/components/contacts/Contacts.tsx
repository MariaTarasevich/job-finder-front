import Footer from '../footer/Footer.tsx';
import Nav from './../nav/Nav.tsx'
import './Contacts.css'

function Contacts() {
    return (
        <div className="contacts">
            <div className='contacts__wrap'>
                <Nav />
                <div className='contacts__content'>
                    <div className="contacts__address">
                        <ul>
                            <li className="contacts__headline">ODO "WORK FOR YOU"</li>
                            <li>Minsk, per. Kozlova, 7G, 7th floor</li>
                            <li>Republic of Belarus,</li>
                            <li>220037, Minsk lane . Kozlova, 7G, 7th floor, room 14</li>
                            <li>+375 (17) 388-24-01</li>
                            <li>+375 (44) 555-13-11</li>
                            <li className="contacts__headline contacts__headline-bot">Requisites</li>
                            <li> Priorbank OJSC</li>
                            <li>CBU 101, code PJCBBY2X (MFO 153001749)</li>
                            <li>
                                Minsk, 65a Timiryazev str.
                            </li>
                            <li>
                                p/s BY86PJCB30120022721000000933 (3012002272010)
                            </li>
                            <li>
                                UNP 101541485
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contacts;