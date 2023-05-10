const HistoryRow = ({
  name,
  country,
  date,
  amount,
  onMouseEnter,
  onMouseLeave,
  setSelectedDonation,
  donation,
  key,
  setshowRowDetails,
  showRowDetails,
}) => {
  return (
    <tr onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={key}>
      <td className="flex gap-2 items-center text-blue-dark text-[0.69rem] font-semibold">
        <img src="/Icons/icon_user_circle_blue.svg"></img>
        {name}
      </td>
      <td className="text-[0.69rem] text-black-50">{country}</td>
      <td className="text-[0.69rem] text-black-50 font-medium flex items-center gap-2">
        <img src="/Icons/icon_calendar_clock.svg" className="w-6"></img>
        {date}
      </td>
      <td className="text-blue text-[0.69rem] font-semibold">{amount}</td>
      <td
        className="cursor-pointer"
        onClick={() => {
          setSelectedDonation(donation);
          setshowRowDetails(!showRowDetails);
        }}
      >
        <img src="/Icons/icon_eye_dblue.svg" className="w-6"></img>
      </td>
    </tr>
  );
};

export default HistoryRow;
