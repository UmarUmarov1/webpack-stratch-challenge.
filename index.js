import "./styles.css";
import intocode from "../assets/logo.png";

const a = document.querySelector('.a')
const img = document.createElement('img');

img.src = intocode;

a.appendChild(img);