import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"
import MainLayout from "../layouts/MainLayout"


const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </MainLayout>
  )
}

export default HomePage
