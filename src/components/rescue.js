function Rescue() {
  return (
    <div className="w-1/5 h-auto bg-sblue">
      <div className="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
        <h2 className="text-mont text-nblue text-lg font-bold">
          Add your donation
        </h2>
        <button className="text-nblue text-lg">
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full h-auto p-4">
        <h2 className="text-mont text-xl text-white font-bold">
          Rescue a Child
        </h2>
        <p className="text-mont text-sm text-white mt-4">
          1.5 million children in Bangladesh are living on the street tonight.
          With you help, we can provide them with a safe shelter away from their
          current danger.
        </p>
        <div className="w-full h-auto p-4 bg-white rounded-2xl mt-6">
          <div className="w-full h-auto flex justify-between gap-4">
            <div className="w-1/2 h-auto">
              <button className="w-full h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">
                Recurring <br /> Payment
              </button>
              <button className="p-2">
                <div className="w-full h-auto flex gap-2 justify-center items-center">
                  <img
                    src="./Icons/icon_check-circle.svg"
                    alt="icon_check-circle"
                  />
                  <h2 className="text-mont text-lg text-l3black font-semibold">
                    £25
                  </h2>
                </div>
                <p className="text-mont text-xs text-gray mt-1">
                  Rescue a Child
                </p>
              </button>
              <button className="p-2">
                <div className="w-full h-auto flex gap-2 justify-center items-center">
                  <img
                    src="./Icons/icon_check-circle.svg"
                    alt="icon_check-circle"
                  />
                  <h2 className="text-mont text-lg text-l3black font-semibold">
                    £100
                  </h2>
                </div>
                <p className="text-mont text-xs text-gray mt-1">
                  Rescue 4 Street Children
                </p>
              </button>
              <button className="p-2">
                <div className="w-full h-auto flex gap-2 justify-center items-center">
                  <img
                    src="./Icons/icon_check-circle.svg"
                    alt="icon_check-circle"
                  />
                  <h2 className="text-mont text-lg text-l3black font-semibold">
                    £1,000
                  </h2>
                </div>
                <p className="text-mont text-xs text-gray mt-1">
                  Help Running our Shelter
                </p>
              </button>
            </div>
            <div className="w-1/2 h-auto">
              <button className="w-full h-auto text-center p-2 rounded-lg border-2 border-lgray text-mont text-gray text-xs">
                Regular <br /> Payment
              </button>
              <button className="p-2">
                <div className="w-full h-auto flex gap-2 justify-center items-center">
                  <img
                    src="./Icons/icon_check-circle.svg"
                    alt="icon_check-circle"
                  />
                  <h2 className="text-mont text-lg text-l3black font-semibold">
                    £360
                  </h2>
                </div>
                <p className="text-mont text-xs text-gray mt-1">
                  Sponsor a Child for One Year
                </p>
              </button>
              <button className="p-2">
                <div className="w-full h-auto flex gap-2 justify-center items-center">
                  <img
                    src="./Icons/icon_check-circle.svg"
                    alt="icon_check-circle"
                  />
                  <h2 className="text-mont text-lg text-l3black font-semibold">
                    £300
                  </h2>
                </div>
                <p className="text-mont text-xs text-gray mt-1">
                  Rescue 12 Street Children
                </p>
              </button>
            </div>
          </div>
          <div className="w-full h-auto p-2 flex mt-4 justify-between border-2 border-owhite rounded-lg">
            <div className="w-full h-auto">
              <p className="text-mont text-dgray text-xs font-medium">Qty</p>
              <p className="text-mont text-sm text-lblack font-medium">1</p>
            </div>
            <button className="text-sm text-lblack font-medium">
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <input
            className="w-full h-auto p-2 flex mt-4 justify-between border-2 border-owhite rounded-lg text-sm text-mont text-lblack font-medium focus:outline-none"
            value="£ 360"
            type="text"
          />
          <div className="w-full h-auto p-2 flex mt-4 justify-between border-2 border-owhite rounded-lg">
            <p className="text-mont text-dgray text-xs font-medium">Donation</p>
            <button className="text-sm text-lblack font-semibold">
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <div className="w-full h-auto p-2 flex mt-4 justify-between border-2 border-owhite rounded-lg">
            <p className="text-mont text-dgray text-xs font-medium">
              Where Most Needed
            </p>
            <button className="text-sm text-lblack font-semibold">
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <button className="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4">
            ADD DONATION
          </button>
        </div>
      </div>
      <img
        src="./Images/logo_aid-humanity-icon.png"
        alt="logo_aid-humanity-icon"
      />
    </div>
  );
}

export default Rescue;
