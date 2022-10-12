export const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
  };

  return (
    <div className="contactUs-container">
      <div className="callUs-side">
        <div className="callUs-details">
          <h1 className="calls">CALL US.</h1>
          <h1 className="calls">US / CA : +1-877-469-0297</h1>
          <h1 className="calls">UK : +44-800-054-8150</h1>
        </div>
      </div>
      <div className="form-verticalLine"></div>
      <div className="getCallBack-side">
        <form onSubmit={handleSubmit}>
          <h1 className="form-heading">GET A CALL BACK</h1>
          <div className="form-row">
            <label className="formLabel" htmlFor="name">
              Name :{" "}
            </label>
            <input
              id="name"
              onChange={handleChange}
              type="text"
              placeholder="name"
              className="inputBox"
            />
          </div>
          <div className="form-row">
            <label className="formLabel" htmlFor="email">
              Email :{" "}
            </label>
            <input
              type="email"
              id="email"
              placeholder="email"
              className="inputBox"
            />
          </div>
          <div className="form-row">
            <label className="formLabel" htmlFor="mobile">
              Mobile :{" "}
            </label>
            <input
              type="number"
              id="mobile"
              placeholder="mobile "
              className="inputBox"
            />
          </div>

          <div className="form-row">
            <label className="formLabel" htmlFor="date">
              Mobile :{" "}
            </label>
            <input
              type="date"
              id="date"
              placeholder="mm/dd/yyyy"
              className="inputBox"
            />
          </div>
          <br />
          <input type="submit" value="Submit" className="formSubmit-btn" />
        </form>
      </div>
    </div>
  );
};
