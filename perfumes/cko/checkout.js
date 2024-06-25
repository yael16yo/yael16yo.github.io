const appearance = { theme: 'night', labels: 'floating' };
const elements = stripe.elements({ clientSecret, appearance });

const paymentElement = elements.create('payment');
paymentElement.mount('#payment-element');