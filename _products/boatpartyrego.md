---
title: Boat Party Rego
subtitle: AH3 Boat Party June 5th
layout: product
image: /assets/images/boatparty.png
price: $49.99
---

(Selecting checkout takes you to the Stripe site to pay.)

<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->

<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em;cursor:pointer"
  id="checkout-button-price_1KgXeNIDia3Xld45lclpiq4g"
  role="link"
  type="button">
Checkout
</button>

<div id="error-message"></div>

<script>
(function() {
  var stripe = Stripe('pk_test_51IyOaHF5pJkDlNl6u2p3W7O28ax11j6ZBBZqBjWoCPgVVLWfVyEw7nun2dS503tVweXzKpf7nxJgVeBQvp5fNUoj00lIqQrwAE');

  var checkoutButton = document.getElementById('checkout-button-price_1KcDuHF5pJkDlNl6aM2P7nOD');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1KcDuHF5pJkDlNl6aM2P7nOD', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: 'https://v2.austinh3.org/boatpartysuccess',
      cancelUrl: 'https://v2.austinh3.org/canceled',
    })
    .then(function (result) {
      if (result.error) {
        /*
         * If `redirectToCheckout` fails due to a browser or network
         * error, display the localized error message to your customer.
         */
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
</script>
