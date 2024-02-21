// import React from 'react'

import MenuList from "./Menu"
import './main.css'
import { FiPlay } from "react-icons/fi";
import MoviesList from "./Popular";
// import SliderMovies from "./Slide";
const Main = () => {
  return (
    <div className="tonggle_Main">
        <div className="list_1">
          <MenuList/>
        </div>
        <div className="main">
            <div className="bgr">
                <img src="https://movie-site-delta.vercel.app/img/home-background.png" alt="" />
            </div>
            <div className="bgr_text">
                    <h1 className="bgr_title">Hitman's Wife's <br/>Bodyguard</h1>
                    <p>Releasing 23 july</p>
                    <a href="#" className="watch-btn">
                        <i className="play"><FiPlay /></i>
                        <span>Watch the trailler</span>
                    </a>
            </div>
            <div className="popular">
              <section className="popular container" id="popular">
                  <div className="heading">
                      <h2 className="heading-title">Popular Movies</h2>
                  </div>
                  <div className="swiper">
                      {/* <SliderMovies/> */}
                      <MoviesList url="/popular"/>
                  </div>
              </section>
            </div>
            <div className="movies">
                  <section className="movies-container container" id="movies">
                    <div className="heading">
                        <h2 className="heading-title">Movies and Shows</h2>
                    </div>
                    <div className="movies-content">
                        <div className="swiper_movies">
                            <MoviesList url={`/now_playing`} />
                        </div>
                        <div className="swiper_movies2">
                          <MoviesList url={`/top_rated`} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div className="next-page">
          <a href="#" className="next-btn">Next Page</a>
        </div>
    </div>
  )
}

export default Main