import React, { useState } from "react";

const Contact = () => {
  const [fild, setFild] = useState({
    fullname: " ",
    phone: " ",
    email: " ",
    msg: " ",
  });

  const InputFild = (event) => {
    const { name, value } = event.target;

    setFild((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const formSubmit = (err) => {
    err.preventDefault();
    alert(
      `My Name is :- ${fild.fullname} And my phone number is :- ${fild.phone}  And my email is  :-${fild.email} And my message is:-${fild.msg}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={fild.fullname}
                  onChange={InputFild}
                  placeholder="Enter Your First Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={fild.phone}
                  onChange={InputFild}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email id
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={fild.email}
                  onChange={InputFild}
                  placeholder="Enter your email Id "
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Messages
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={fild.msg}
                  onChange={InputFild}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-success" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
