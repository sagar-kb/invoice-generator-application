// export default function Header({ handlePrint }) {
//     return (
//       <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
//         <div>
//           <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
//             Invoicer
//           </h1>
//         </div>
        
//         <div>
//           <button
//             onClick={handlePrint}
//             className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow hover:bg-gray-600 transition-all duration-300"
//           >
//             Print/Download
//           </button>
//         </div>
//       </header>
//     );
//   }

// components/Header.js
export default function Header({ handlePrint }) {
    return (
      <header className="flex flex-col items-center justify-center mb-8 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3 text-gray-800">Invoice</h1>
        </div>
        <div>
          <button
            onClick={handlePrint}
            className="bg-gray-900 text-white font-bold py-2 px-8 rounded-lg shadow hover:bg-gray-800 transition-all duration-300 no-print"
          >
            Print/Download
          </button>
        </div>
      </header>
    );
  }