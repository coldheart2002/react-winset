import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="container p-0">
        <div className="row my-3">
          <div className="col-3  d-flex justify-content-center align-items-center">
            <img src={logo} width="50px " />
          </div>
          <div className="col">
            <div className="row">Neo Tampipi</div>
            <div className="row">test@gmail.com</div>
          </div>
        </div>
        <div className="row">
          <div className="col">search</div>
        </div>
      </div>
    </>
  );
};

export default Header;
