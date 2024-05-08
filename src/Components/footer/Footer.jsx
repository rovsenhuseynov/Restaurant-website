// import React from "react";
// import "./footer.scss";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer__container">
//         <div className="footer__left">
//           <div className="footer__left-title">Food Website</div>
//           <p className="footer__left-description">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil cum
//             tempora excepturi adipisci, numquam dolorum quisquam necessitatibus
//             facere. Expedita animi corporis dolorem temporibus inventore
//             voluptas.
//           </p>
//           <ul className="footer__left-list">
//             <li className="footer__left-list-item">
//               <button className="footer__left-list-item-link">
//                 <FacebookIcon fontSize="large" className="btn" />
//               </button>
//             </li>

//             <li className="footer__left-list-item">
//               <button className="footer__left-list-item-link">
//                 <TwitterIcon fontSize="large" className="btn" />
//               </button>
//             </li>

//             <li className="footer__left-list-item">
//               <button className="footer__left-list-item-link">
//                 <InstagramIcon fontSize="large" className="btn" />
//               </button>
//             </li>

//             <li className="footer__left-list-item">
//               <button className="footer__left-list-item-link">
//                 <GitHubIcon fontSize="large" className="btn" />
//               </button>
//             </li>
//           </ul>
//         </div>

//         <div className="footer__right">
//           <div className="footer__right-block">
//             <h6 className="footer__right-title">Store</h6>

//             <ul className="footer__right-list">
//               <li className="footer__right-list-item">
//                 <NavLink to="about" className="footer__right-list-item-link">
//                   About Us
//                 </NavLink>
//               </li>

//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   Menu
//                 </NavLink>
//               </li>

//               <li className="footer__right-list-item">
//                 <NavLink to="Contacts" className="footer__right-list-item-link">
//                   Reservations
//                 </NavLink>
//               </li>

//               <li className="footer__right-list-item">
//                 <NavLink to="Contacts" className="footer__right-list-item-link">
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <div className="footer__right-block">
//             <h6 className="footer__right-title">Education</h6>
//             <ul className="footer__right-list">
//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   Specials and Offers
//                 </NavLink>
//               </li>
//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   Delivery and Pickup
//                 </NavLink>
//               </li>
//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   Gallery
//                 </NavLink>
//               </li>
//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   Reviews
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <div className="footer__right-block">
//             <h6 className="footer__right-title">Business</h6>
//             <ul className="footer__right-list">
//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   News and Events
//                 </NavLink>
//               </li>
//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   Career
//                 </NavLink>
//               </li>
//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   Privacy Policy
//                 </NavLink>
//               </li>
//               <li className="footer__right-list-item">
//                 <NavLink to="menu" className="footer__right-list-item-link">
//                   Silemap
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <span className="copy">
//         &copy; 2024 Food Website. All rights reserved.
//       </span>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";

const SocialIcon = ({ Icon }) => (
  <li className="footer__left-list-item">
    <NavLink to="#" className="footer__left-list-item-link">
      <Icon fontSize="large" className="btn" />
    </NavLink>
  </li>
);

const MenuLink = ({ to, text }) => (
  <li className="footer__right-list-item">
    <NavLink to={to} className="footer__right-list-item-link">
      {text}
    </NavLink>
  </li>
);

const MenuBlock = ({ title, links }) => (
  <div className="footer__right-block">
    <h6 className="footer__right-title">{title}</h6>
    <ul className="footer__right-list">
      {links.map((link, index) => (
        <MenuLink key={index} to={link.to} text={link.text} />
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__left-title">Food Website</div>
          <p className="footer__left-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil cum
            tempora excepturi adipisci, numquam dolorum quisquam necessitatibus
            facere. Expedita animi corporis dolorem temporibus inventore
            voluptas.
          </p>
          <ul className="footer__left-list">
            <SocialIcon Icon={FacebookIcon} />
            <SocialIcon Icon={TwitterIcon} />
            <SocialIcon Icon={InstagramIcon} />
            <SocialIcon Icon={GitHubIcon} />
          </ul>
        </div>

        <div className="footer__right">
          <MenuBlock
            title="Store"
            links={[
              { to: "about", text: "About Us" },
              { to: "menu", text: "Menu" },
              { to: "contacts", text: "Reservations" },
              { to: "contacts", text: "Contact Us" },
            ]}
          />
          <MenuBlock
            title="Education"
            links={[
              { to: "menu", text: "Specials and Offers" },
              { to: "menu", text: "Delivery and Pickup" },
              { to: "menu", text: "Gallery" },
              { to: "menu", text: "Reviews" },
            ]}
          />
          <MenuBlock
            title="Business"
            links={[
              { to: "menu", text: "News and Events" },
              { to: "menu", text: "Career" },
              { to: "menu", text: "Privacy Policy" },
              { to: "menu", text: "Sitemap" },
            ]}
          />
        </div>
      </div>
      <span className="copy">
        &copy; 2024 Food Website. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
