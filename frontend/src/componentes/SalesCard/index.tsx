import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import NotificaçãoBotão from '../NotificaçãoBotão';
import { useState } from "react";

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const max = new Date();

    const [minDate, setMinDate] =useState(min);
    const [maxDate, setMaxDate] =useState(max);

    return (
        <div className="l2meta-card">
            <h2 className="l2meta-sales-title">Vendas</h2>
            <div>
                <div className="l2meta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="l2meta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="l2meta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="l2meta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="l2meta-sales-table">
                    <thead>
                        <tr>
                            <th className="show-992">ID</th>
                            <th className="show-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-992">Visitas</th>
                            <th className="show-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show-992">#341</td>
                            <td className="show-576">08/07/2022</td>
                            <td>Lucas</td>
                            <td className="show-992">15</td>
                            <td className="show-992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="l2meta-red-btn-container">
                                    <NotificaçãoBotão />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="show-992">#342</td>
                            <td className="show-576">08/07/2022</td>
                            <td>Larissa</td>
                            <td className="show-992">15</td>
                            <td className="show-992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="l2meta-red-btn-container">
                                    <NotificaçãoBotão />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="show-992">#343</td>
                            <td className="show-576">08/07/2022</td>
                            <td>Edna</td>
                            <td className="show-992">15</td>
                            <td className="show-992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="l2meta-red-btn-container">
                                    <NotificaçãoBotão />
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td className="show-992">#344</td>
                            <td className="show-576">08/07/2022</td>
                            <td>Maria</td>
                            <td className="show-992">15</td>
                            <td className="show-992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="l2meta-red-btn-container">
                                    <NotificaçãoBotão />
                                </div>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </div >

    )
}

export default SalesCard
