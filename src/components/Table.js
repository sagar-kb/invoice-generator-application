// export default function Table({ items }) {
//     return (
//       <table className="w-full mb-10">
//         <thead>
//           <tr className="bg-gray-100">
//             <td className="font-bold">Description</td>
//             <td className="font-bold">Quantity</td>
//             <td className="font-bold">Price</td>
//             <td className="font-bold">Amount</td>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, i) => (
//             <tr key={i}>
//               <td>{item.description}</td>
//               <td>{item.quantity}</td>
//               <td>{item.price}</td>
//               <td>{item.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }

  
  // components/Table.js
  export default function Table({ items, total }) {
    return (
      <div className="mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left font-bold text-gray-700">Description</th>
              <th className="py-3 px-4 text-right font-bold text-gray-700">Quantity</th>
              <th className="py-3 px-4 text-right font-bold text-gray-700">Price</th>
              <th className="py-3 px-4 text-right font-bold text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-700">{item.description}</td>
                <td className="py-3 px-4 text-right text-gray-700">{item.quantity}</td>
                <td className="py-3 px-4 text-right text-gray-700">${item.price.toFixed(2)}</td>
                <td className="py-3 px-4 text-right text-gray-700">${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mt-8 flex justify-end">
          <div className="bg-gray-50 p-6 rounded-lg min-w-[300px]">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-gray-700">Total:</span>
              <span className="font-bold text-2xl text-gray-800">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  