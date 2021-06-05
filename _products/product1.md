---
title: 1 trail Hash Cash (worst deal)
subtitle: For beer, snacks and such on 1 AH3 Sunday trail
description: One trail, $5 plus .45 service charge. 
product_code: ABC124
layout: product
image: /assets/images/hashCash5.jpg
price: $5
features:
    - label: Great addition to any home
      icon: fa-location-arrow
    - label: Comes in a range of styles
      icon: fa-grin-stars
    - label: Available in multiple sizes
      icon: fa-fighter-jet
rating: 69
---
You pay the 45 cent service charge.
(Selecting checkout takes you to the Stripe site to pay.) 
<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em;cursor:pointer"
  id="checkout-button-price_1IyOjgF5pJkDlNl6y9nDtfXS"
  role="link"
  type="button">
  Checkout
</button>

<div id="error-message"></div>

<script>
(function() {
  var stripe = Stripe('pk_test_51IyOaHF5pJkDlNl6u2p3W7O28ax11j6ZBBZqBjWoCPgVVLWfVyEw7nun2dS503tVweXzKpf7nxJgVeBQvp5fNUoj00lIqQrwAE');

  var checkoutButton = document.getElementById('checkout-button-price_1IyOjgF5pJkDlNl6y9nDtfXS');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1IyOjgF5pJkDlNl6y9nDtfXS', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
     successUrl: 'https://next-gen-web-site.web.app/success',
     cancelUrl: 'https://next-gen-web-site.web.app/canceled',
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