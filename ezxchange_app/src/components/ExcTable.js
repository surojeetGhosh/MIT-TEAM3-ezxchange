import React from "react";
import '../../src/ExcTable.css';

function ExcTable() {
    return (
      <div className="flex flex-row items-center justify-center font-[Poppins] font-medium mt-12 mb-12 w-3/4 container mx-auto shadow-md shadow-gray-500 rounded-xl">
        <table className="w-full">
          <thead>
            <tr>
                <th>Currency</th>
                <th>Symbol</th>
                <th>Exchange Rate (1 USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Algerian Dinar</td>
                <td>DZD</td>
                <td>142.36</td>
            </tr>
            <tr>
                <td>Australian Dollar</td>
                <td>AUD</td>
                <td>1.533</td>
            </tr>
            <tr>
                <td>Botswana Pula</td>
                <td>BWP</td>
                <td>13.407</td>
            </tr>
            <tr>
                <td>Brazilian Real</td>
                <td>BRL</td>
                <td>5.376</td>
            </tr>
            <tr>
                <td>Brunei Dollar</td>
                <td>BND</td>
                <td>1.435</td>
            </tr>
            <tr>
                <td>Canadian Dollar</td>
                <td>CND</td>
                <td>1.360</td>
            </tr>
            <tr>
                <td>Chilean Peso</td>
                <td>CLP</td>
                <td>956.421</td>
            </tr>
            <tr>
                <td>Chinese Yuan</td>
                <td>CNY</td>
                <td>7.201</td>
            </tr>
            <tr>
                <td>Czech Koruna</td>
                <td>CZK</td>
                <td>25.315</td>
            </tr>
            <tr>
                <td>Danish Krone</td>
                <td>DKK</td>
                <td>7.638</td>
            </tr>
            <tr>
                <td>Euro</td>
                <td>EUR</td>
                <td>1.027</td>
            </tr>
            <tr>
                <td>Indian Rupees</td>
                <td>INR</td>
                <td>81.407</td>
            </tr>
            <tr>
                <td>Israeli New Shekel</td>
                <td>ILS</td>
                <td>3.518</td>
            </tr>
            <tr>
                <td>Japanese Yen</td>
                <td>JPY</td>
                <td>144.114</td>
            </tr>
            <tr>
                <td>Korean Won</td>
                <td>KRW</td>
                <td>1422.90</td>
            </tr>
            <tr>
                <td>Kuwaiti Dinar</td>
                <td>KWD</td>
                <td>0.310</td>
            </tr>
            <tr>
                <td>Malaysian Ringgit</td>
                <td>MYR</td>
                <td>4.629</td>
            </tr>
            <tr>
                <td>Mauritian Rupee</td>
                <td>MUR</td>
                <td>45.308</td>
            </tr>
            <tr>
                <td>Mexican Peso</td>
                <td>MXN</td>
                <td>20.139</td>
            </tr>
            <tr>
                <td>New Zealand Dollar</td>
                <td>NZD</td>
                <td>1.745</td>
            </tr>
            <tr>
                <td>Norwegian Krone</td>
                <td>NOK</td>
                <td>10.674</td>
            </tr>
            <tr>
                <td>Omani Rial</td>
                <td>OMR</td>
                <td>0.384</td>
            </tr>
            <tr>
                <td>Peruvian Sol</td>
                <td>PEN</td>
                <td>3.96</td>
            </tr>
            <tr>
                <td>Philippine Peso</td>
                <td>PHP</td>
                <td>58.768</td>
            </tr>
            <tr>
                <td>Polish Zloty</td>
                <td>PLN</td>
                <td>4.937</td>
            </tr>
            <tr>
                <td>Qatari Riyal</td>
                <td>QAR</td>
                <td>3.64</td>
            </tr>
            <tr>
                <td>Russian Ruble</td>
                <td>RUB</td>
                <td>57.942</td>
            </tr>
            <tr>
                <td>Saudi Arabian Riyal</td>
                <td>SAR</td>
                <td>3.75</td>
            </tr>
            <tr>
                <td>Singapore Dollar</td>
                <td>SGD</td>
                <td>1.435</td>
            </tr>
            <tr>
                <td>South African Rand</td>
                <td>ZAR</td>
                <td>17.854</td>
            </tr>
            <tr>
                <td>Swedish Krona</td>
                <td>SEK</td>
                <td>11.21</td>
            </tr>
            <tr>
                <td>Swiss Franc</td>
                <td>CHF</td>
                <td>0.976</td>
            </tr>
            <tr>
                <td>Thai Baht</td>
                <td>THB</td>
                <td>37.744</td>
            </tr>
            <tr>
                <td>Trinidadian Dollar</td>
                <td>TTD</td>
                <td>6.801</td>
            </tr>
            <tr>
                <td>U.A.E. Dirham</td>
                <td>AED</td>
                <td>3.67</td>
            </tr>
            <tr>
                <td>U.K. Pound</td>
                <td>GBP</td>
                <td>0.92</td>
            </tr>
            <tr>
                <td>Uruguayan Peso</td>
                <td>UYU</td>
                <td>41.27</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
    
  export default ExcTable;