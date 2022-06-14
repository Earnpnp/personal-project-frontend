import React from "react";

export default function SignUpPage() {
  return <div></div>;
}

// import React from "react";
// import WelcomeContainer from "../layouts/welcomePage/WelcomeContainer";

// function SignUpPage() {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <WelcomeContainer />
//       <button
//         className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         SIGN UP
//       </button>
//       {showModal ? (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-sm">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pr-8 pl-8">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                   <h3 className="text-center text-2xl font-bold">SIGN UP</h3>

//                   <div className="text-center text-m font-bold">
//                     ALREADY HAVE AN ACCOUNT
//                     <a href="/login" className="ml-2 text-sm text-gray-500">
//                       LOGIN
//                     </a>
//                   </div>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   ></button>
//                 </div>
//                 {/*body*/}
//                 <div>
//                   <label
//                     htmlFor=""
//                     className="text-sm font-bold text-gray-600 block"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor=""
//                     className="text-sm font-bold text-gray-600 block"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="email"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                     placeholder="Please enter your Email"
//                     required
//                   />
//                 </div>
//                 <div className="mt-3">
//                   <label
//                     for="password"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor=""
//                     className="text-sm font-bold text-gray-600 block"
//                   >
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password"
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>

//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     LOGIN
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }

// export default SignUpPage;
