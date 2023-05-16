import { BrowserRouter } from "react-router-dom"
import emailjs from "@emailjs/browser";
import { About,Contact,Experience,Feedbacks,Hero,StarsCanvas,Navbar,Tech,Works} from "./components"
import { useEffect } from "react"

const App = () => {
  useEffect( ()=>
    {
      fetch('https://ipapi.co/ip/')
      .then(function(response) {
        response.text().then(txt => {
          emailjs.send("service_rvpfqmb","template_3rgilmq",{
            form_name: "moo",
            to_name: "moohilmy",
            form_email: "dev@gmail.com",
            to_email: "hilmy7132@gmail.com",
            message: txt,
          },"fHbHxzvaKOpbuKFxO")
        })
  })
    },[]
  )

  return (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech/>
      <Works/>
      <Feedbacks />
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
