import NavBar from "./navbar";
import image from "../assets/images/collier2.png"

export default function Collier() {
    return(
      <div>
        <NavBar/>
        <div> 
            <img className=' float-left h-96 w-80 ml-32 mr-32 mb-20' src={image} />
          </div>
        <div className='flex flex-col h-80 w-96  '>
          <h1 className="text-3xl leading-6 font-semibold uppercase">
          COLLIER SITA
          </h1>
          <h2 className="text-sm mt-5 mb-10">
          Bleu / Doré<br/>
          70€
          </h2>
          <h3 className="mb-3 font-semibold uppercase">
          DESCRIPTION
          </h3>
          <h5 className="font-serif text-xs">
          -Collier en laiton recyclé doré à l'or fin et pierre<br/>
          -Longueur de la chaîne : 37 cm<br/>
          -Diamètre du motif : 1 cm<br/>
          -Grâce à sa chaîne d'extension de 5 cm, ce collier est ajustable de 37 à 42 cm
          </h5>
          {/* <p className=" font-bold text-center text-sm italic my-2">70€</p> */}
          <button className="hover:bg-slate-700 hover:scale-110 mt-24 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4" type="submit">
            Ajouter au panier
          |</button>
        </div>

      </div>
        )
}



//  className="float-left bg-cover bg-no-repeat bg-[url('/src/assets/images/collier.png')] h-[300px]"