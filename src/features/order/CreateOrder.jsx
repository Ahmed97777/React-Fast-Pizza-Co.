import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const username = useSelector((state) => state.user.username);

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" action="/order/new">
        <div
          className="mb-5 flex flex-col gap-2
        sm:flex-row sm:items-center"
        >
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input
              className="input-field w-full"
              placeholder="write your name here..."
              defaultValue={username}
              type="text"
              name="customer"
              required
            />
          </div>
        </div>

        <div
          className="mb-5 flex flex-col gap-2
          sm:flex-row sm:items-center"
        >
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input-field w-full"
              placeholder="write your phone number here..."
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <p
                className="
              mt-2 rounded-md bg-red-100 p-2
              text-xs text-red-700
              "
              >
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div
          className="mb-5 flex flex-col gap-2
          sm:flex-row sm:items-center"
        >
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input-field w-full"
              type="text"
              name="address"
              placeholder="write your address here..."
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-teal-400 focus:outline-none
            focus:ring focus:ring-teal-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing Order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData(); // just a reqular web API.
  const data = Object.fromEntries(formData);
  // console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "unvalid number, please provide a correct one as we might contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // if everything is okay, create new order and redirect.
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
