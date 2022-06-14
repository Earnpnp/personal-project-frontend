import React from "react";
import WelcomeContainer from "../layouts/welcomePage/WelcomeContainer";

function ForgotPasswordPage() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <WelcomeContainer />
      <button
        className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
        type="button"
        onClick={() => setShowModal(true)}
      >
        LOGIN
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pr-8 pl-8">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="max-w-md w-full mx-auto">
                    <div className="text-center text-3xl font-bold">
                      FORGOT YOUR PASSWORD
                    </div>
                    <div className="text-center text-m font-bold">
                      Please enter your email address below to receive a
                      password reset link
                    </div>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <form action="" className="space-y-6">
                  <div className="max-w-md w-full mx-auto"></div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-sm font-bold text-gray-600 block"
                      required
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                  </div>

                  <div>
                    <a href="*" className="ml-2 text-sm text-gray-500">
                      GO BACK
                    </a>
                  </div>
                </form>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ForgotPasswordPage;
