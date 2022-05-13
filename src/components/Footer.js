import React from "react";
import insta from "../images/Instagram.png";
import twitter from "../images/twitter.png"
import github from "../images/GitHub.png"
import facebook from "../images/Facebook.png"

export default function Footer() {
  return  <div className="footer-btns">
      <button>
        <img src={twitter} alt=" gram icon"></img>
      </button>
      <button>
        <img src={facebook} alt=" gram icon"></img>
      </button>
      <button>
        <img src={insta} alt=" gram icon"></img>
      </button>
      <button>
        <img src={github} alt=" gram icon"></img>
      </button>
    </div>

}
