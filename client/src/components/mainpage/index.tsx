import { TextField } from "@mui/material"
import { JobCard, MainPageContainer, NewJobCard } from "./MainPageStyles"

const MainPage = () => {
  return (
    <MainPageContainer>
      <NewJobCard>
        <TextField>Company name</TextField>
        <TextField>Job title</TextField>
        <TextField>Job location</TextField>
        <TextField>link</TextField>
        <TextField>status</TextField>
        <TextField>email/follow up</TextField>
        <TextField>remove</TextField>
      </NewJobCard>
      <JobCard>
        <h3>Company name</h3>
        <h3>Job title</h3>
        <h3>Job location</h3>
        <button>link</button>
        <button>status</button>
        <button>email/follow up</button>
        <button>remove</button>
      </JobCard>
    </MainPageContainer>
  )
}

export default MainPage