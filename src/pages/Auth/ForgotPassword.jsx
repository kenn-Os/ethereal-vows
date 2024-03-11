// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const ForgotPassword = () => {
//   const history = useHistory();

//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await resetPassword(email);

//       if (response.success) {
//         setIsSuccess(true);
//         setMessage('Password reset link sent successfully.');

//         // Redirect to the login page after a successful reset
//         history.push("/login");
//       } else {
//         setIsSuccess(false);
//         setMessage('Password reset failed. Please check your email and try again.');
//       }
//     } catch (error) {
//       setIsSuccess(false);
//       setMessage('Password reset failed. Please check your email and try again.');
//     }
//   };

//   const resetPassword = async (email) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     if (email === 'user123@gmail.com') {
//       return { success: true };
//     } else {
//       throw new Error('Email not found');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Forgot Password</h2>
//       {isSuccess ? (
//         <div className="alert alert-success">{message}</div>
//       ) : (
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email address:</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Reset Password
//           </button>
//           {message && <div className="alert alert-danger mt-3">{message}</div>}
//         </form>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;
