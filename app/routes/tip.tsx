import { Outlet } from "@remix-run/react";

const Tip = () => {
  let tipValue = 2;
  function handleSelectValue(value: number) {
    console.log(value);
    tipValue = value;
  }

  function handleTipValueChange(value: number) {
    console.log(value);
  }
  return (
    <div>
      <Outlet />
      <div>
        <div className="flex space-x-4 items-center">
          <button onClick={() => handleSelectValue(2)}>Tip £2</button>
          <button onClick={() => handleSelectValue(5)}>Tip £5</button>
          <button onClick={() => handleSelectValue(10)}>Tip £10</button>
          <button onClick={() => handleSelectValue(15)}>Tip £15</button>
        </div>

        <div>
          <div className="flex items-center">
            <h3 className="font-bold">£</h3>
            <input
              value={tipValue}
              name="tip-0"
              onChange={() => handleTipValueChange}
            ></input>
          </div>
          <p className="text-gray-600">+34p card fee</p>
        </div>
      </div>

      <section>
        <p className="font-bold">Tip £{tipValue}</p>
        <button className="primary">Pay</button>
      </section>
    </div>
  );
};

export default Tip;
