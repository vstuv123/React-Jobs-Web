
import Navbar from "../components/Navbar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
{/* eslint-disable-next-line */}
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        { children }
      </main>
      <ToastContainer />
    </>
  )
}

export default MainLayout
