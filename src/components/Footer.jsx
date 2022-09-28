import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='redes'>
          <a
            href='https://github.com/martinez-fko/memoryGame#readme'
            className='iconBox'
            target={'_blank'}
          >
            <i className='fa-brands fa-github'></i>
          </a>
          <a href='https://francisco-mtz.netlify.app/'
        target={'_blank'}
        className='iconBox'>
          <i className='fa-solid fa-briefcase'></i>
          </a>
          <a href='https://www.linkedin.com/in/francisco-martinez123/'
        target={'_blank'}
        className='iconBox'>
          <i className='fa-brands fa-linkedin'></i>
          </a>
      </div>
      <p>Make with ❤ by Francisco Martinez</p>
    </footer>
  );
};

export default Footer;