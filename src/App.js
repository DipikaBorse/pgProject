import React from "react";
import Header from "./components/Header/Header";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { Startups } from "./components/Services/Startups/Startups";
import { Investors } from "./components/Services/Investors/Investors";
import { Mentorships } from "./components/Services/Mentorships/Mentorships";
import { Resources } from "./components/Enable/Resources/Resources";
import { E4GCommunity } from "./components/Enable/E4GCommunity/E4GCommunity";
import { Contact } from "./components/Contact/Contact";
import { BusinessTools } from "./components/BusinessTools/BusinessTools";
import { Signup } from "./components/SignUp/Signup";
import { Login } from "./components/Login/Login";
import { InvestorLogin } from "./components/Login/Investor-Login";
import InvestorSignup from "./components/SignUp/Investor-Signup";
import { InvestorForgotPassword } from "./components/SignUp/Investor-Forgot-Password";
import { Accounting } from "./components/Grow/Accounting";
import { FinancialPlanning } from "./components/Grow/FinancialPlanning";
import { DigitalMarketing } from "./components/Grow/DigitalMarketing";
import { Timemangament } from "./components/Grow/Timemangament";
import Second from "./components/Enable/Resources/Articles/Second";
import Third from "./components/Enable/Resources/Articles/Third";
import First from "./components/Enable/Resources/Articles/First";
import Visteblogs from "./components/Enable/Resources/Visteblogs";
import Vistpod from "./components/Enable/Resources/Visitpod";
import Blogfirst from "./components/Enable/Resources/Blogs/Blogfirst";
import Blogsecond from "./components/Enable/Resources/Blogs/Blogsecond";
import Blogthird from "./components/Enable/Resources/Blogs/Blogthird";
import Fourth from "./components/Enable/Resources/Articles/Fourth";
import Book from "./components/Enable/Resources/Book";
function App() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };
  // useEffect(()=>{
  //   document.body.className = theme;
  // },[theme]);
  return (
    <div className="App">
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/mentorships" element={<Mentorships />} />
          <Route path="/accounting" element={<Accounting />} />
          
          <Route path="/financialplanning" element={<FinancialPlanning />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/Timemangament" element={<Timemangament />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second/>} />
          <Route path="/third" element={<Third />} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/visteblogs" element={<Visteblogs />} />
          <Route path="/blogfirst" element={<Blogfirst />} />
          <Route path="/blogsecond" element={<Blogsecond />} />
          <Route path="/blogthird" element={<Blogthird />} />
          <Route path="/vistpod" element={<Vistpod />} />
          <Route path="/book" element={<Book />} />
           <Route path="/e4gcommunity" element={<E4GCommunity />} />
          <Route path="/businesstools" element={<BusinessTools />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/investor-login" element={<InvestorLogin />}/>
          <Route path="/investor-signup" element={<InvestorSignup />}/>
          <Route path="/forgot-password" element={<InvestorForgotPassword />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
