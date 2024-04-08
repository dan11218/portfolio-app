import CustomLink from "@/app/app-components/customLink";
import Image from "next/image";

export default function FinalDesign() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-10">
      <div className="flex w-full max-w-7xl flex-col items-center">
        <div>
          <h1>Final Designs</h1>
          <hr className="m-auto my-1 mb-16 h-1 w-[150px] rounded bg-gradient-to-r from-sky-500 to-cyan-300 dark:bg-gray-300" />
        </div>
        <div className="flex w-full flex-col space-y-16">
          <div>
            <h3 className="mb-4">Add to cart</h3>
            <div id="shop flow" className="flex flex-wrap items-start">
              <Image
                src="/gift-shop-demo/screens/Home-page.png"
                width={300}
                height={300}
                alt="Home page"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Product-research.png"
                width={300}
                height={300}
                alt="Shop page"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Product-page.png"
                width={300}
                height={300}
                alt="Product page"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Cart.png"
                width={300}
                height={300}
                alt="Cart page"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Cart-campaign.png"
                width={300}
                height={300}
                alt="cart with modal"
                className="mb-2 mr-4 shadow-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-4">Checkout</h3>
            <div id="new-event-screens" className="flex flex-wrap items-start">
              <Image
                src="/gift-shop-demo/screens/Payment.png"
                width={300}
                height={300}
                alt="new event form"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Payment-Delivery-Options.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Payment-Pay.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Payment-Campaign.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Post-payment.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-2 mr-4 shadow-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-4">Registration</h3>
            <div id="new-event-screens" className="flex flex-wrap items-start">
              <Image
                src="/gift-shop-demo/screens/Checkout.png"
                width={300}
                height={300}
                alt="new event form"
                className="mb-2 mr-4 shadow-lg"
              />
              <Image
                src="/gift-shop-demo/screens/Checkout-campaign.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-2 mr-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
