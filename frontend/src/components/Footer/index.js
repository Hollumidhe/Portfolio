
import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterIcon  } from 'react-share';
import './footer.css';
 
const Footer = () => (
    <footer className="footer">
        <p>This is react sticky footer!!</p>
        <div>
      <FacebookShareButton
        url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>

    <div>
      <FacebookShareButton
        url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <TwitterIcon size={32} round />
      </FacebookShareButton>
    </div>
 
    </footer>
);
 
export default Footer;