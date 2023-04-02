import Button from "./button";
import image from "../assets/images/logo.png";
function NavBar() {
  return (
    <nav className='flex justify-center mt-5 mb-20 '>
      <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">
      <img className='absolute left-20 top-5 w-20' src={image} /> 
      </a>
      {/* <Button path={"Accueil"} label={"Accueil"}/> */}
      <Button path={"Connexion"} label={"Connexion"}/>
      <Button path={"Inscrpition"} label={"Inscrpition"}/>
      <Button path={"Panier"} label={"Panier"}/>
    </nav>
  );
}
export default NavBar;
