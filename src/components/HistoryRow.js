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
  view,
  border,
}) => {
  if (view === 'desktop') {
    return (
      <tr onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={key}>
        <td className="flex gap-2 items-center text-blue-dark text-[11px] font-semibold">
          <img src="/Icons/icon_user_circle_blue.svg"></img>
          {name}
        </td>
        <td className="text-[11px] text-black-50">{country}</td>
        <td className="text-[11px] text-black-50 font-medium flex items-center gap-2">
          <img src="/Icons/icon_calendar_clock.svg" className="w-6"></img>
          {date}
        </td>
        <td className="text-blue text-[11px] font-semibold">{amount}</td>
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
  } else if (view === 'mobile') {
    return (
      <div className={`p-4 ${border}`}>
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 items-center text-blue-dark text-[11px] font-semibold">
              <img src="/Icons/icon_user_circle_blue.svg"></img>
              {name}
            </div>
            <div className="flex gap-2 items-center ml-8">
              <div className="text-[11px] text-black-50">{country}</div>
              <div className="text-[11px] text-black-50 font-medium flex items-center gap-2">
                <img src="/Icons/icon_calendar_clock.svg" className="w-6"></img>
                {date}
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <p className="text-blue text-[11px] font-semibold">{amount}</p>
            <img
              src="/Icons/icon_arrow_right.svg"
              onClick={() => {
                setSelectedDonation(donation);
                setshowRowDetails(!showRowDetails);
              }}
              alt="eye-icon"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default HistoryRow;
