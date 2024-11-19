// export default function Footer({ name, email, phone, bankName, bankAccount }) {
//     return (
//       <footer className="footer border-t-2 border-gray-300 pt-5">
//         <ul className="flex flex-wrap items-center justify-center">
//           <li><span className="font-bold">Name:</span> {name}</li>
//           <li><span className="font-bold">Email:</span> {email}</li>
//           <li><span className="font-bold">Phone number:</span> {phone}</li>
//           <li><span className="font-bold">Bank:</span> {bankName}</li>
//           <li><span className="font-bold">Account holder:</span> {name}</li>
//           <li><span className="font-bold">Account number:</span> {bankAccount}</li>
//         </ul>
//       </footer>
//     );
//   }

  
  // components/Footer.js
  export default function Footer({ name, email, phone, bankAccount, bankName }) {
    return (
      <footer className="mt-8 pt-8 border-t-2 border-gray-200">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-gray-700 mb-4">Payment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-600">Name:</span>
                  <span className="text-gray-600">{name}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-600">Email:</span>
                  <span className="text-gray-600">{email}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-600">Phone:</span>
                  <span className="text-gray-600">{phone}</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-600">Bank:</span>
                  <span className="text-gray-600">{bankName}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-600">Account Number:</span>
                  <span className="text-gray-600">{bankAccount}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }