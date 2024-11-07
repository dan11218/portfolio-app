import Image from "next/image";

export default function FinalDesign() {
  return (
    <section className="mb-24 flex h-fit w-screen flex-col items-center px-10">
      <div className="flex w-full max-w-7xl flex-col items-center">
        <div>
          <h1>Final Designs</h1>
          <hr className="m-auto my-1 mb-16 h-1 w-full max-w-32 rounded bg-gradient-to-r from-sky-500 to-cyan-300 dark:bg-gray-300" />
        </div>
        <div className="flex w-full flex-col space-y-16">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-bold">Add to cart</h3>
            <div
              id="shop flow"
              className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
            >
              <Image
                src="/static/gift-shop-demo/screens/home_page.png"
                width={500}
                height={500}
                alt="Home page"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/product_research.png"
                width={500}
                height={500}
                alt="Shop page"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/product_page.png"
                width={500}
                height={500}
                alt="Product page"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/cart.png"
                width={500}
                height={500}
                alt="Cart page"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/cart_campaign.png"
                width={500}
                height={500}
                alt="cart with modal"
                className="shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-bold">Checkout with survey</h3>
            <div
              id="new-event-screens"
              className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
            >
              <Image
                src="/static/gift-shop-demo/screens/payment.png"
                width={500}
                height={500}
                alt="new event form"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/payment_delivery_options.png"
                width={500}
                height={500}
                alt="list of vendors (filtered)"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/payment_pay.png"
                width={500}
                height={500}
                alt="list of vendors (filtered)"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/payment_campaign.png"
                width={500}
                height={500}
                alt="list of vendors (filtered)"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/post_payment.png"
                width={500}
                height={500}
                alt="list of vendors (filtered)"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/post_payment_campaign.png"
                width={500}
                height={500}
                alt="list of vendors (filtered)"
                className="shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-bold">Registration</h3>
            <div
              id="new-event-screens"
              className="h-full w-full space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
            >
              <Image
                src="/static/gift-shop-demo/screens/checkout.png"
                width={500}
                height={500}
                alt="new event form"
                className="shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/checkout_campaign.png"
                width={500}
                height={500}
                alt="list of vendors (filtered)"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
