import React from 'react';

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-5 fw-bold mb-3 text-primary">Welcome to Instrumeta 🎶</h1>
          <p className="lead text-secondary">
            Dive into a musical world where AI meets art! Instrumeta identifies musical instruments from your audio,
            connects it with movie trivia, offers quizzes, and helps you learn virtually with fun and ease.
          </p>
          <a href='/login' className="btn btn-primary btn-lg mt-4 shadow">
            Login & Get Started
          </a>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center">
          <img
            src="https://www.craftedny.com/wp-content/uploads/2018/09/how-to-design-your-music-website.jpg"
            alt="Musical Instruments"
            className="img-fluid rounded-4 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
