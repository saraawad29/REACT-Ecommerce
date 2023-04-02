import { useContext } from "react";
import { ProdContext } from "../prodContext";

export default function Panier() {
  const { myProd } = useContext(ProdContext);

  return myProd.map((product) => (
    <div className="flex justify-between items-center">
      <div className="flex gap-10 items-center">
        <img src={product.image} className="w-20 h-20" />
        {/* <div className="flex flex-col">
        </div> */}
      </div>
      <p className="text-3xl">{product.prix}€</p>
    </div>
  ));
}



