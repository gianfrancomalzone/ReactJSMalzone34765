import React from "react";
import "../../sass/components/footer.scss"

export default function Footer() {
  return (
    <footer class="main-footer">
    <div class="main-container">
      <div class="main-footer__upper">
        <div class="main-footer__row main-footer__row-1">
          <h2 class="heading heading-sm main-footer__heading-sm">
            <span>Social</span>
          </h2>
          <div class="main-footer__social-cont">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gianfranco-malzone-7b2317242/">
              <img
                class="main-footer__icon"
                src="https://i.postimg.cc/qB68XPhJ/linkedin-ico.png"
                alt="icon"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/gianfrancomalzone">
              <img
                class="main-footer__icon"
                src="https://i.postimg.cc/bNX16mkQ/github-ico.png"
                alt="icon"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="mailto:gianfrancomalzone.gm@gmail.com?subject=Contacto%20por%20v%C3%ADa%20del%20Portafolio%20Web.">
              <img
                class="main-footer__icon"
                src="https://i.postimg.cc/909Zm95R/email-ico.png"
                alt="icon"
              />
            </a>
            
          </div>
        </div>
        <div class="main-footer__row main-footer__row-2">
          <h4 class="heading heading-sm text-lt">Gianfranco Malzone</h4>
          <p class="main-footer__short-desc">
            Desarrollador FrontEnd Jr.
          </p>
        </div>
      </div>
    </div>
  </footer>
  );
}
