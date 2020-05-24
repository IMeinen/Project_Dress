import React from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from '../../assets/icons/facebook_icon.png';
import InstagramIcon from '../../assets/icons/instagram_icon.png';
import PintrestIcon from '../../assets/icons/pintrest_icon.png';
import WhatsIcon from '../../assets/icons/whats_icon.png';
import YoutubeIcon from '../../assets/icons/youtube_icon.png';
import { FooterContainer } from './styles';

function Footer() {
  return (
    <FooterContainer>
          <div className="descriptions">
            <h5>FALE CONOSCO</h5>
            <p>(51) 99262-4347</p>
            <p>contato@sandraferraz.com.br</p>
          </div>
          <div className="descriptions">
            <Link className="link" to="/faq"><h5>PERGUNTAS FREQUENTES</h5></Link>

          </div>
          <div className="icons_container">
            <a
              href="https://www.youtube.com/user/AtelierSandraFerraz"
              target="_blank"
              rel="noopener noreferrer"

            >
              <img  src={YoutubeIcon} alt="" width="40" height="40" />
            </a>
            <a
              href="https://www.instagram.com/sandraferrazoficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="" width="40" height="40" />
            </a>
            <a
              href="https://www.facebook.com/sandraferrazoficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="" width="40" height="40" />
            </a>
            <a
              href="https://www.pinterest.de/sandraferrazoficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PintrestIcon} alt="" width="40" height="40" />
            </a>
            <a href="https://api.whatsapp.com/send?text=Artigo%20https://rockcontent.com/blog/o-que-e-inbound-marketing" target="_blank" rel="noopener noreferrer">
            <img src={WhatsIcon} alt="" width="40" height="40" />
            </a>
          </div>
        </FooterContainer>
  );
}

export default Footer;
