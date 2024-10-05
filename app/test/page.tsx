"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation'
import {items} from "../product-details/data"

export default function ProductDetails() {

    const router = useRouter()
    // const { name } = router.query
  
  // const [open, setOpen] = useState(false);
//   const postData = getPostDetails(params.name);

  return (
    <>
          {/* <h1>Post: {name}</h1> */}

          {items.map((prdct) => (
                  <Link
                    href={`/product-details/${prdct.name}`}
                    key={prdct.name}
                    className="product-page-selected-cakes-card"
                  >
                    <img src={prdct.image} alt="" />
                    <div className="product-price">
                      <h5>{prdct.price}</h5>
                      <hr />
                    </div>
                  </Link>

                ))}
                

                
    </>
  );
}
