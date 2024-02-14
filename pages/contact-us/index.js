import React from 'react'

const initialValues = {
  name: '',
  phone_number: '+374',
  email: '',
  description: '',
}

export default function index() {

  

  function changeNum(e) {
    formik.values.phone_number = e
  }

  return (
    <>
        <div className="contactUs container">
          <div className="contactUs__main">
            <h2 id="myDIV" className="title">
              Leave us your
              <span className="text_gradient_blue">contact info</span>
            </h2>
            <p className="text">we will get back to you within 24 hours. Stay up to date with our latest deals and special offers!</p>
            <div className="mail_block">
              <p>E_MAIL US:</p>
              <p className="text_green_underline">laportiva@gmail.com</p>
            </div>
            <div className="call_block">
              <p>CALL US:</p>
              <div>
                <span className="text_green_underline">+374 94 340 001</span>
                <span className="working_time">
                  MON-SAT 10:00 - 18:30
                </span>
              </div>
            </div>
          </div>

          <div className="contactUs__form">
            <form 
            className='contact_form'
            >
              <div className="name_number_block">
                <div className="contact_us_name_block">
                  <input
                    type="text"
                    name="name"
                    // onChange={formik.handleChange}
                    placeholder='YOUR NAME'
                    // value={formik.values.name}
                    // onBlur={formik.handleBlur}
                    // ref={nameRef}
                  />
                  {/* {errors?.name && touched.name && (
                    <p className="input_err_message">{errors.name}</p>
                  )} */}
                </div>
              </div>
              <div className="email_input_block">
                <input
                  type="email"
                  name="email"
                  className="email_input"
                  placeholder='E-MAIL'
                //   onChange={formik.handleChange}
                //   value={formik.values.email}
                //   onBlur={formik.handleBlur}
                />
                {/* {errors?.email && touched.email && (
                  <p className="input_err_message">{errors.email}</p>
                )} */}
              </div>
              <div>
                <textarea
                  type="textArea"
                  name="description"
                  rows="5"
                  placeholder='DESCRIPTION'
                //   onChange={formik.handleChange}
                //   value={formik.values.description}
                //   onBlur={formik.handleBlur}
                />
                {/* {errors?.description && touched.description && (
                  <p className="input_err_message">{errors.description}</p>
                )} */}
              </div>
              <button
              className='btn'
                type="submit"
                // className={Object?.keys(errors).length ? 'disabled btn' : 'btn'}
              >
                SEND 
              </button>
            </form>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}
