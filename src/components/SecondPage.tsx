import { Navigate } from 'react-router-dom'; // use Navigate in v6
import PostsTable from './PostsTable'; // Import PostsTable
import DepartmentList from './DepartmentList';


const SecondPage = () => {
  const userDetails = localStorage.getItem('userDetails');

  if (!userDetails) {
    alert('Please enter your details before accessing this page.');
    return <Navigate to="/" />; // use Navigate for redirection in v6
  }

  return <div>Welcome to the second page!
     <PostsTable />
     <DepartmentList /> 
  </div>;
};

export default SecondPage;
