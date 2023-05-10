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
      <td className="flex gap-2 items-center text-blue-dark text-sm font-semibold">
        <img src="/Icons/icon_user_circle_blue.svg"></img>
        {name}
      </td>
      <td className="text-sm text-black-50">{country}</td>
      <td className="text-sm text-black-50 font-medium flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="15.115"
          viewBox="0 0 17 15.115"
        >
          <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
            <g id="Group_2511" data-name="Group 2511">
              <g id="Group_15380" data-name="Group 15380">
                <line
                  id="Line_297"
                  data-name="Line 297"
                  y2="2.441"
                  transform="translate(3.494)"
                  fill="none"
                  stroke="#bdbdbd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <line
                  id="Line_298"
                  data-name="Line 298"
                  y2="2.441"
                  transform="translate(9.541)"
                  fill="none"
                  stroke="#bdbdbd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <line
                  id="Line_299"
                  data-name="Line 299"
                  x2="12.688"
                  transform="translate(0 4.882)"
                  fill="none"
                  stroke="#bdbdbd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </g>
            </g>
            <rect
              id="Rectangle_3594"
              data-name="Rectangle 3594"
              width="1.835"
              height="1.835"
              transform="translate(2.172 6.932)"
              fill="none"
              stroke="#1D1D1D"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            />
            <rect
              id="Rectangle_3595"
              data-name="Rectangle 3595"
              width="1.835"
              height="1.835"
              transform="translate(5.676 6.932)"
              fill="none"
              stroke="#1D1D1D"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            />
            <g
              id="Group_2513"
              data-name="Group 2513"
              transform="translate(0 1.33)"
            >
              <g id="Group_2527" data-name="Group 2527">
                <path
                  id="Path_7197"
                  data-name="Path 7197"
                  d="M10.069,12.506A3.466,3.466,0,0,1,13.534,9.04a3.53,3.53,0,0,1,.45.032V4.864a1.677,1.677,0,0,0-1.677-1.677H2.677A1.677,1.677,0,0,0,1,4.864v8.3a1.676,1.676,0,0,0,1.677,1.677h8.3A3.449,3.449,0,0,1,10.069,12.506Z"
                  transform="translate(-1 -3.187)"
                  fill="none"
                  stroke="#1D1D1D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <path
                  id="Path_7199"
                  data-name="Path 7199"
                  d="M19.374,12.809a3.466,3.466,0,1,1-3.466,3.466A3.465,3.465,0,0,1,19.374,12.809Z"
                  transform="translate(-6.839 -6.956)"
                  fill="none"
                  stroke="#1D1D1D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <path
                  id="Path_7200"
                  data-name="Path 7200"
                  d="M22.7,18.156H21.052V16.272"
                  transform="translate(-8.854 -8.312)"
                  fill="none"
                  stroke="#1D1D1D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
        </svg>
        {date}
      </td>
      <td className="text-blue text-sm font-semibold">{amount}</td>
      <td
        className="cursor-pointer"
        onClick={() => {
          setSelectedDonation(donation);
          setshowRowDetails(!showRowDetails);
        }}
      >
        <img src="/Icons/icon_eye_dblue.svg" className="w-16"></img>
      </td>
    </tr>
  );
};

export default HistoryRow;
