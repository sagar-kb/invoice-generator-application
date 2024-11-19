// export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
//     return (
//       <article className="mt-10 mb-14 flex items-end justify-end">
//         <ul>
//           <li className="p-1">
//             <span className="font-bold">Invoicer number:</span> {invoiceNumber}
//           </li>
//           <li className="p-1">
//             <span className="font-bold">Invoice date:</span> {invoiceDate}
//           </li>
//           <li className="p-1">
//             <span className="font-bold">Due date:</span> {dueDate}
//           </li>
//         </ul>
//       </article>
//     );
//   }

  // components/Dates.js
  export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
      <article className="mt-10 mb-14 flex flex-col items-end">
        <div className="bg-gray-50 p-6 rounded-lg min-w-[300px]">
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-bold text-gray-700">Invoice Number:</span>
              <span className="text-gray-600">{invoiceNumber}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold text-gray-700">Invoice Date:</span>
              <span className="text-gray-600">{invoiceDate}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold text-gray-700">Due Date:</span>
              <span className="text-gray-600">{dueDate}</span>
            </li>
          </ul>
        </div>
      </article>
    );
  }
  