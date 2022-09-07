import NotificationButton from '../notification-button'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
                    <h2 className="dsmeta-sales-title">Vendas</h2>

                    <div>
                        <div className="dsmeta-form-control-container">
                            <input className="dsmeta-form-control" type="text"/>
                        </div>
                        <div className="dsmeta-form-control-container">
                            <input className="dsmeta-form-control" type="text"/>
                        </div>
                    </div>
                    <div>

                        <table className="dsmeta-format-table">
                            <thead className="dsmeta-format-table-head">
                                <tr>
                                    <th className="show992">ID</th>
                                    <th className="show576">Data</th>
                                    <th>Vendedor</th>
                                    <th className="show992">Visitas</th>
                                    <th className="show992">Vendas</th>
                                    <th>Total</th>
                                    <th>Notificar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="show992">072</td>
                                    <td className="show576">02/09/2022</td>
                                    <td>Danilo</td>
                                    <td className="show992">150</td>
                                    <td className="show992">15</td>
                                    <td>R$55300.00</td>
                                    <td>
                                        <div className="dsmeta-btn-container">
                                            <NotificationButton/>
                                        </div>
                                      
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">221</td>
                                    <td className="show576">02/09/2022</td>
                                    <td>Oliveira</td>
                                    <td className="show992">200</td>
                                    <td className="show992">100</td>
                                    <td>R$55300.00</td>
                                    <td>
                                        <div className="dsmeta-btn-container">
                                            <NotificationButton/>
                                        </div>
                                      
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">056</td>
                                    <td className="show576">02/09/2022</td>
                                    <td>Rodrigues</td>
                                    <td className="show992">15</td>
                                    <td className="show992">10</td>
                                    <td>R$55300.00</td>
                                    <td>
                                        <div className="dsmeta-btn-container">
                                            <NotificationButton/>
                                        </div>
                                      
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}

export default SalesCard
