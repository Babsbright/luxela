import Logo from "/public/assests/Luxela white logo 1.svg";
import Image from "next/image";
import Link from "next/link";
import AuthNavbar from "../../AuthNavbar";

export default function Terms() {
  return (
    <section className="bg-black w-full min-h-[100vh] pb-20 ">
      <div className="hidden lg:block">
        <AuthNavbar />
      </div>
      <div className="max-w[1440px] px-4 md:px-8 flex flex-col mx-auto justify-center items-center">
        <div className="lg:hidden flex justify-center cursor-pointer my-4">
          <Image className="max-sm:w-32" src={Logo} alt="logo" />
        </div>

        <div className="text-white mt-16 max-w-2xl bg-zinc-900 rounded-md p-6">
          <h1 className="text-lg font-aeonik mb-4">Terms of agreement</h1>
          <p className="text-sm font-spaceGrotesk">
            The marketplace provides an online location for sellers to sell and
            buyers to purchase products, we shall accept binding sales on behalf
            of sellers but (unless Luxela is indicated as the seller) Luxela is
            not a party to the transaction between the seller and the buyer. A
            contract for the sale and purchase of a product or products will
            come into force between the buyer and seller and accordingly you
            commit to buying or selling the relevant product or products upon
            the buyer&apos;s confirmation of purchase via the marketplace.{" "}
            <br /> Subject to these general terms and conditions the
            seller&apos;s terms of business shall govern the contract for sale
            and purchase between the buyer and the seller. Notwithstanding this
            the following provisions will be incorporated into the contract of
            sale and purchase between the buyer and the seller:
            <li>
              The price for a product will be as stated in the relevant product
              listing;
            </li>
            <li>
              {" "}
              The price for the product must include all taxes and comply with
              applicable laws in force from time to time;{" "}
            </li>
            <li>
              Delivery charges packaging charges handling charges administrative
              charges insurance costs other ancillary costs and charges where
              applicable will only be payable by the buyer if this is expressly
              and clearly stated in the product listing; and delivery of digital
              products may be made electronically.
            </li>
            <li>
              Products must be of satisfactory quality fit and safe for any
              purpose specified in and conform in all material respects to the
              product listing and any other description of the products supplied
              or made available by the seller to the buyer; and
            </li>
            <li>
              In respect of physical products sold the seller warrants that the
              seller has good title to and is the sole legal and beneficial
              owner of the products and/or has the right to supply the products
              pursuant to this agreement and that the products are not subject
              to any third party rights or restrictions including in respect of
              third party intellectual property rights and/or any criminal
              insolvency or tax investigation or proceedings; and in respect of
              digital products the seller warrants that the seller has the right
              to supply the digital products to the buyer.
            </li>
          </p>
          <div className="flex items-center my-4 gap-x-2">
            <input
              className="bg-transparent"
              type="checkbox"
              name="terms"
              id=""
            />
            <p className="text-sm font-spaceGrotesk">
              By clicking &quot;Accept&quot;, you agree to our Terms of
              Agreement and Privacy Policies
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center max-md:space-y-4 md:gap-x-4">
            <div className="w-full md:w-2/3">
              <Link href={"/auth/signin"}>
                <button
                  className="font-spaceGrotesk font-medium w-full h-10 bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple
                   rounded-lg text-base text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                >
                  Proceed
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/3">
              <Link href={"/auth/signup/create"}>
                <button
                  className="font-spaceGrotesk font-medium w-full h-10 bg-zinc-700
                   rounded-lg text-base text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                >
                  Decline
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
