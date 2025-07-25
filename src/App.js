
import './App.css';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Send from './components/pages/send/Send';
import Services from './components/pages/services/Services';
import About from './components/pages/about/About';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Publication from './components/pages/publication/Publication.tsx';
import Author from './components/pages/author/Author.tsx';
import Books from './components/pages/books/Books.tsx';
import Team from './components/pages/team/Team.tsx';
import Collaborations from './components/pages/contests/Collaborations';
import Mission from './components/pages/mission/Mission';
import Contact from './components/pages/contact/Contact';
import Authors from './components/pages/authors/Authors.tsx';
import AdminPage from './components/pages/adminPage/AdminPage';
import ContestsShowcase from './components/pages/contests/contestsShowcase/ContestsShowcase';
import TermsAndConditions from './components/pages/TermsAndConditions/TermsAndConditions';
import Donations from './components/pages/donations/Donations';
import ReactGA from 'react-ga4';


process.env['BACKEND_URL'] = 'https://spread-the-word.herokuapp.com/';
const TRACKING_ID = "G-SBF08R4CCR"
ReactGA.initialize( TRACKING_ID );

function App() {

  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
      console.log("collapsed: ",menuCollapse);
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  return (
    <div className = "App">
      <Router>
          <Sidebar menuCollapse = {menuCollapse} toggle = {menuIconClick}/>
          <Header toggle = {menuIconClick} />
          <Routes>
            <Route path = '*' element = {<Home />}/>
            <Route path = '/' element = {<Home />}/>
            <Route path = '/publications' element = {<></>}/>
            <Route path = '/send' element = {<Send />}/>
            <Route path = '/services' element = {<Services />}/>
            <Route path = '/About' element = {<About />}/>
            <Route path = '/donate' element = {<Donations />}  />
            <Route  path = "/publication/:id"  exact element = {<Publication />}/>
            <Route  path = "/author/:id"  exact element = {<Author />}/>
            <Route path = '/books' element = {<Books />} />
            <Route path = '/team' element = {<Team />} />
            <Route path = '/collaborations' element = {<Collaborations />} />
            <Route path = '/contests/showcase' element = {<ContestsShowcase /> } />
            <Route path = '/mission' element = {<Mission />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/authors' element = {<Authors />} />
            <Route path = '/admin-page' element = {<AdminPage />} />
            <Route path = '/terms-and-conditions' element = {<TermsAndConditions />}  />
          </Routes>
        
        <Footer />

      </Router>
    </div>
    
  );
}

export default App;
