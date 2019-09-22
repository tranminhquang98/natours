/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe("pk_test_BZWhSYysbx7bJFJF7vV7mSiW00Pvv5faW4");

export const bookTour = async tourId => {
  //tourId comes from the (data-tour-id) on the pug template, and then is read in index.js whenever someone hits the booking button
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
