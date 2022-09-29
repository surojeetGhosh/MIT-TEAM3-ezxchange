import PropTypes from "prop-types";

function CurrencyInput(props) {
  return (
    <div className="p-2 flex flex-row gap-12 justify-center items-center">
      <input type="text" className="text-xl font-[Poppins] font-medium bg-blue-900 text-white p-2 rounded-xl text-center" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
      <select className="text-xl font-[Poppins] font-medium bg-gray-700 text-white p-2 rounded-xl text-center" value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
        {props.currencies.map((currency => (
          <option value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;