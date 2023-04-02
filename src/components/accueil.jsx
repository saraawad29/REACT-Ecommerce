import Button from "./button";
import NavBar from './navbar';
export default function accueil() {
    return(
      <div>
        <NavBar/>
        <div className=' flex justify-center space-x-5 h-80 ml-32 mr-20 '>
        <div className='flex flex-col '>
            <div className="bg-cover  bg-center bg-[url('/src/assets/images/boucle.png')] flex flex-1 h-[300px]">
              <h4 className="  text-white  m-auto font-serif uppercase">Boucle d'oreille</h4>
            </div>
            <Button path={"Boucle"} label={"Boucle d'oreille"}/>
            <button className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4" type="submit">
              Voir l'article
            </button>
          </div>
          <div className='flex flex-col'>
            <div className=" bg-cover bg-center bg-[url('/src/assets/images/collier.png')] flex flex-1 h-[300px]">
              <h4 className=" text-white m-auto font-serif uppercase">Collier</h4>
            </div>
            <Button path={"Collier"} label={"COLLIER SITA"}/>
            <button className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4" type="submit">
              Voir l'article
            </button>
          </div>
          <div className='flex flex-col'>
            <div className="bg-cover bg-center bg-[url('/src/assets/images/bague.png')] flex flex-1 h-[300px]">
              <h4 className="  text-white m-auto font-serif uppercase">Bague</h4>
            </div>
            <Button path={"Bague"} label={"BAGUE CHIARA"}/>
            <button className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4" type="submit">
              Voir l'article
            </button>
        </div> 
        </div>

      </div>
        )
}