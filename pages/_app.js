import '../styles/globals.css'
import Card from "../pages/card";
// import Test from "./api/court";



function MyApp({ Component, pageProps }) {
  console.log("component:",Component);
  console.log("pageProps", pageProps);
  // console.table(pageProps[0]);
  return (

    <div>
      {/* <Test /> */}
      <div>
        <Component {...pageProps} />
      </div>
      <div className="container">
        <div className="row">
          <Card
            title={<a href = "http://localhost:3002/">Courthouse Offices</a>}
            images="images/courthouse.png"
            alt="courthouse"
            
            />
          <Card
            //"Job Opportunities"
            title={<a href="https://county.milwaukee.gov/EN/Human-Resources">Job Opportunities</a>}
            images="../images/Job-Free-PNG.png"
            alt="Jobs"
            // link = "https://county.milwaukee.gov/EN/Human-Resources"
            />
          <Card
            title={<a href="https://county.milwaukee.gov/EN/News--Events/Events">Events</a>}
            images="../images/EVENTS.png"
            alt="events"

          />
          <Card
            title="County Services"
            images="../images/MilwaukeeCountyLogo.png"
            alt="county"
            
          />

        </div>
		</div>

    </div>
    
  )
}

export default MyApp
