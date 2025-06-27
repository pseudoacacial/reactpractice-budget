import shared from "../styles/shared.module.css";

export interface MonthSwitcherProps {
  currentYearAndMonth: [number, number];
  setCurrentYearAndMonth: React.Dispatch<
    React.SetStateAction<[number, number]>
  >;
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MonthSwitcher = ({
  currentYearAndMonth,
  setCurrentYearAndMonth,
}: MonthSwitcherProps) => {
  const incrementMonth = () => {
    if (currentYearAndMonth[1] == 11) {
      setCurrentYearAndMonth([currentYearAndMonth[0] + 1, 0]);
    } else {
      setCurrentYearAndMonth([
        currentYearAndMonth[0],
        currentYearAndMonth[1] + 1,
      ]);
    }
  };

  const decrementMonth = () => {
    if (currentYearAndMonth[1] == 0) {
      setCurrentYearAndMonth([currentYearAndMonth[0] - 1, 11]);
    } else {
      setCurrentYearAndMonth([
        currentYearAndMonth[0],
        currentYearAndMonth[1] - 1,
      ]);
    }
  };
  return (
    <>
      <button className={shared.button} onClick={decrementMonth}>
        {"<<"}
      </button>
      {monthNames[currentYearAndMonth[1]]} {currentYearAndMonth[0]}
      <button className={shared.button} onClick={incrementMonth}>
        {">>"}
      </button>
    </>
  );
};
