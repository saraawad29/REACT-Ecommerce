import Button from './button';
import image from "../assets/images/bague2.png";
import NavBar from './navbar';

export default function Boucle() {
    return(
        <div>
          <NavBar/>
          <div> 
            <img className=' float-left h-96 w-80 ml-32 mr-32 mb-20' src={image} />
          </div>
        <div className='flex flex-col h-80 w-96  '>
          <h1 className="text-3xl leading-6 font-semibold uppercase">
          BAGUE TAE
          </h1>
          <h2 className="text-sm mt-5 mb-10">
          Bleu doré<br/>
          70€
          </h2>
          <h3 className="mb-3 font-semibold uppercase">
          DESCRIPTION
          </h3>
          <h5 className="font-serif text-xs">
          -Bague large en laiton recyclé doré à l'or fin et verre<br/>
          -Hauteur : 2 cm<br/>
          -Entre 2 tailles, prendre la taille au-dessus
          </h5>
          {/* <p className=" font-bold text-center text-sm italic my-2">70€</p> */}
          <button className="hover:bg-slate-700 hover:scale-110 mt-32 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4" type="submit">
            Ajouter au panier
          |</button>
        </div>
        </div>
        )
}



// export default function Bague() {
//     return(
//         <div className='flex flex-col'>
//           <div className="bg-cover bg-center bg-[url('/src/assets/images/bague.png')] flex flex-1 h-[300px]">
//             <h4 className="  text-white m-auto font-serif uppercase">Bague</h4>
//           </div>
//           <Button path={"Bague"} label={"BAGUE CHIARA"}/>
//           {/* <strong className='text-sm'>BAGUE CHIARA</strong> */}
//           <p className=" font-bold text-sm italic my-2">65€</p>
//           <button className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4" type="submit">
//             Ajouter au panier
//           </button>
//         </div>
//         )
// }