export const AllPrinters = () => {
  return (
    <div className="allPrinters-container">
      <div className="printer-desc-cont">
        <div className="printer-desc-cont-left">
          <div className="printer-desc-imgDiv">
            <img
              src="https://printertales.com/public/upload/printer/62c57cad667ce_hp-deskjet-plus-4155.jpg"
              className="printer-desc-img"
              alt="printer-image"
            />
          </div>
          <div className="printer-desc-div">
            <span className="printer-name-bold">Name: </span>
            <span className="printer-name-normal">HP DeskJet Plus 4155</span>
            <br />
            <span className="printer-name-bold">Company Category: </span>
            <span className="printer-name-normal">HP DeskJet Plus 4155</span>
            <br />
            <span className="printer-name-bold">Website: </span>
            <span className="printer-name-normal">https://www.hp.com/</span>
            <br />

            <table className="printer-desc-table">
              <thead>
                <tr>
                  <th className="printer-table-cells">Technology</th>
                  <th className="printer-table-cells">Desk Jet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="printer-table-cells">Description</td>
                  <td className="printer-table-cells">
                    Packed with tons of features, the HP DeskJet Plus 4155 is
                    the coolest printer for home and small office environments.
                    Powered by HP&rsquo;s 35-page auto-feeder and dynamic
                    security, this printer brings in high productivity by
                    cutting down the per-page cost by a considerable margin.
                    Plus, it offers you the lowest total cost of ownership in
                    comparable printers and is compatible with most operating
                    systems and media devices.{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="printer-desc-cont-right">
          <div className="printer-support-btnsDiv">
            <button>HP </button>
            <br />
            <button>Immidiate Support </button>
            <br />
            <button>Request a Call </button>
            <br />
          </div>
        </div>
      </div>
      <div className="popular-printer-section">
        <h2 className="popular-printer-section-heading">Popular Printers</h2>
        <div className="popular-printers-div">
          <div className="popular-printer-card">
            <img
              src="https://printertales.com/public/upload/printer/62c57cad667ce_hp-deskjet-plus-4155.jpg"
              alt="printers"
            />
            <div className="popular-printer-about">
              <a className="printer-view-title" href="#">
                HP DeskJet Plus 4155
              </a>
              <br />
              <a className="printer-view-details" href="#">
                View Details{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="popular-printer-card">
            <img
              src="https://printertales.com/public/upload/printer/62c57c4e96186_hp-deskjet-3755.jpg"
              alt="printers"
            />
            <div className="popular-printer-about">
              <a className="printer-view-title" href="#">
                HP DeskJet 3755
              </a>
              <br />
              <a className="printer-view-details" href="#">
                View Details{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="popular-printer-card">
            <img
              src="https://printertales.com/public/upload/printer/62c57c0440249_hp-officejet-pro-9015e.jpg"
              alt="printers"
            />
            <div className="popular-printer-about">
              <a className="printer-view-title" href="#">
                HP OfficeJet Pro 9015e
              </a>
              <br />
              <a className="printer-view-details" href="#">
                View Details{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="popular-printer-card">
            <img
              src="https://printertales.com/public/upload/printer/62c58dd42c991_hp-deskjet-2755.jpg"
              alt="printers"
            />
            <div className="popular-printer-about">
              <a className="printer-view-title" href="#">
                HP DeskJet 2755
              </a>
              <br />
              <a className="printer-view-details" href="#">
                View Details{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
