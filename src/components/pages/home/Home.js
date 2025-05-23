import React from 'react';


import EmailSubmission from './EmailSubmission/EmailSubmission';
import style from './Home.module.css'
import News from './News/NewsBanner/News';

import Carousel from '../../Carousel/Carousel'; //removing breaks flickity but is never used
import Flickity from 'react-flickity-component'
import BestSeller from './Recomendations/BestSeller';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Mockup from './mockup/Mouckup';
import Promo from './Promo/PromoPages/ContemporarySubjectsPromo';
import PromoBanner from './Promo/PromoBanners/PromoBanner';
import NewsArticle from './News/NewsArticles/NewsArticles';


const flickityOptions = {
  initialIndex: 0
}

function Home() {

  const[newsData, setNewsData] = useState([]);


  
  useEffect(() => {
    async function fetchData(){
        
        //author data
        var resp = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/news/get-all`);
 
        setNewsData(resp.data)
    }
    window.scrollTo(0, 0);
    fetchData();
    
  },[]);
  const placeholder = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <div className={style.home}>
      <PromoBanner />

      {/* <Promo /> */}
      {/* <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {[
            <News title = "Test Title" description = {placeholder} html_code = {<> </>}/> ,
            <News title = "Test Title2" description = {placeholder} html_code = {<> </>}/> ]}
        </Flickity> */}
            
          
              
            
      <div className = {style.card_list_title}>
            News
      </div>

      <NewsArticle />
          
       

      {/* <div className = {style.card_list_title}>
            RECOMENDATIONS
      </div>

  
      <div className = {style.card_list_title}>
            BEST SELLERS
      </div>

      <BestSeller />
      <EmailSubmission />
       */}
    </div>
    );
}

export default Home;