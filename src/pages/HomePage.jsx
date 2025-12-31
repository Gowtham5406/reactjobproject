import Hero from "../component/Hero";
import HomeCards from "../component/HomeCards";
import JobListings from "../component/JobListings";
import ViewAllJobs from "../component/ViewAllJobs";
const HomePage = () => {
  return (
    <div>
        <Hero title='Become a React Dev' subTitle='Find the React job that fits your skills and needs' />
        <HomeCards  />
        <JobListings isHome = 'true'/>
        <ViewAllJobs />
    </div>
  )
}

export default HomePage
