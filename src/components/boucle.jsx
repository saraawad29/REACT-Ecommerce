import Button from './button';
import NavBar from './navbar';
import image from "../assets/images/boucle2.png"

export default function Bague() {
    return(
        <div>
          <NavBar/>
          <div> 
            <img className=' float-left h-96 w-80 ml-32 mr-32 mb-20' src={image} />
          </div>
        <div className='flex flex-col h-80 w-96  '>
          <h1 className="text-3xl leading-6 font-semibold uppercase">
          BOUCLES D'OREILLES SANDY
          </h1>
          <h2 className="text-sm mt-5 mb-10">
          Lagon<br/>
          50€
          </h2>
          <h3 className="mb-3 font-semibold uppercase">
          DESCRIPTION
          </h3>
          <h5 className="font-serif text-xs">
          -Anneaux en résine<br/>
          -Les marbrures de ce bijou le rendent unique : il peut exister des variations de couleur d'une pièce à l'autre<br/>
          -Poids d'une boucle d'oreille : 7 grammes<br/>
          -Hauteur : 5,5 cm<br/>
          -Ces boucles d'oreilles conviennent aux oreilles percées<br/>
          </h5>
          {/* <p className=" font-bold text-center text-sm italic my-2">70€</p> */}
          <button className="hover:bg-slate-700 hover:scale-110 mt-16 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4" type="submit">
            Ajouter au panier
          |</button>
        </div>
        </div>
        )
}