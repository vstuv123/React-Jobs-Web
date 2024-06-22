import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

function App() {
 const addJobSubmit = async (newJob) => {
  //eslint-disable-next-line
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(newJob)
  });
  return;
 }
 const deleteJob = async (id) => {
  //eslint-disable-next-line
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
 }
 const editJobSubmit = async (editJob, id) => {
  //eslint-disable-next-line
  const res = await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(editJob)
  });
  return;
 }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/edit-job/:id" element={<EditJobPage editJobSubmit={editJobSubmit} />} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJobSubmit} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
