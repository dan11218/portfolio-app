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
            <h3 className="mb-4 font-bold text-cyan-500">Add to cart</h3>
            <div
              id="shop flow"
              className="flex flex-wrap items-start justify-center md:justify-normal"
            >
              <Image
                src="/static/gift-shop-demo/screens/home_page.png"
                width={300}
                height={300}
                alt="Home page"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/product_research.png"
                width={300}
                height={300}
                alt="Shop page"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/product_page.png"
                width={300}
                height={300}
                alt="Product page"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/cart.png"
                width={300}
                height={300}
                alt="Cart page"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/cart_campaign.png"
                width={300}
                height={300}
                alt="cart with modal"
                className="mb-4 mr-4 shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-bold text-cyan-500">
              Checkout with survey
            </h3>
            <div
              id="new-event-screens"
              className="flex flex-wrap items-start justify-center md:justify-normal"
            >
              <Image
                src="/static/gift-shop-demo/screens/payment.png"
                width={300}
                height={300}
                alt="new event form"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/payment_delivery_options.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/payment_pay.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/payment_campaign.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/post_payment.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/post_payment_campaign.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-4 mr-4 shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-bold text-cyan-500">Registration</h3>
            <div
              id="new-event-screens"
              className="flex flex-wrap items-start justify-center md:justify-normal"
            >
              <Image
                src="/static/gift-shop-demo/screens/checkout.png"
                width={300}
                height={300}
                alt="new event form"
                className="mb-4 mr-4 shadow-lg"
              />
              <Image
                src="/static/gift-shop-demo/screens/checkout_campaign.png"
                width={300}
                height={300}
                alt="list of vendors (filtered)"
                className="mb-4 mr-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
