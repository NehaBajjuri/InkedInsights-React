import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faClock, faComments } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  return (
    <article id="post">
      <div className="headings text-center">
        <div className="category">
          <Link to="#" className="nav-link">
            Technology
          </Link>
        </div>

        <div className="title">
          <h2 className="text-title text-dark display-1">
            I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.
          </h2>
        </div>

        <div className="meta">
          <Link to="#" className="link display-2 text-secondary px-1">
            <FontAwesomeIcon icon={faUser } />
            Ankush
          </Link>
          <Link to="#" className="link display-2 text-secondary px-1">
            <FontAwesomeIcon icon={faClock} />
            21-Feb-2023
          </Link>
          <Link to="#" className="link display-2 text-secondary px-1">
            <FontAwesomeIcon icon={faComments} />
            2
          </Link>
        </div>
      </div>

      <div className="thumbnail mt-3">
        <img src="./assets/img14.jpeg" className="thumbnail" alt="ChatGPT" />
      </div>

      <div className="content text-dark display-2 secondary-title mt-3">
        <p>
          Y’all… fair warning. I have a weird sense of humor.
        </p>
        <p>
          Probably because I’m Canadian. When you live where there’s snow half the year, and it’s hot enough to fry eggs on the sidewalk the other half, maybe a person can’t help being a bit off the beaten track.
        </p>
        {/* ... */}
      </div>
    </article>
  );
};

export default Post;