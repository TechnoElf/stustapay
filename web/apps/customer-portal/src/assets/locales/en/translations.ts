export const translations = {
  StuStaPay: "StuStaPay",
  logout: "Logout",
  login: "Login",
  userTagUid: "Card ID",
  userTagPin: "Card Pin",
  nav: {
    payout: "Pay Out",
    topup: "Top Up",
    agb: "AGB",
    faq: "FAQ",
  },
  loginFailed: "Login failed: {{reason}}.",
  errorLoadingCustomer: "Error loading customer",
  payoutInfo: "",
  about: "About",
  contact: "Contact",
  wristbandTagExample: "Card Example",
  wristbandTagExampleTitle: "Card Example with PIN and ID",
  wristbandTagExampleDescription:
    "You can find your card ID and PIN on the back of your card. It should look like the example given below:",
  termsAndConditionsHeader:
    "Our Terms and Conditions are only available in German. You can access our privacy policy on <1>here</1>.",
  privacyPolicyHeader:
    "Our Privacy Policy is only available in German. You can access our terms and conditions on <1>here</1>.",
  languages: {
    en: "English",
    de: "Deutsch",
  },
  balance: "Balance",
  tagUid: "Card ID",
  vouchers: "Vouchers",
  order: {
    loadingError: "Error loading orders",
    productName: "Product Name",
    productPrice: "Product Price",
    quantity: "Quantity",
    total: "Total",
    viewReceipt: "View Receipt",
    bookedAt: "Booked at: {{date}}",
    orderType: {
      sale: "Purchase",
      cancel_sale: "Canceled Purchase",
      top_up: "Top Up",
      pay_out: "Pay Out",
      ticket: "Ticket Purchase",
    },
  },
  payout: {
    iban: "",
    bankAccountHolder: "",
    email: "",
    info: "",
    ibanNotValid: "",
    countryCodeNotSupported: "",
    mustAcceptPrivacyPolicy: "",
    privacyPolicyCheck: "",
    errorFetchingData: "",
    updatedBankData: "",
    errorWhileUpdatingBankData: "",
    donationMustBePositive: "",
    donationExceedsBalance: "",
    donationTitle: "",
    payoutTitle: "",
    donationAmount: "",
    donationDescription: "",
    donateRemainingBalanceOf: "",
    submitPayoutData: "",
  },
  topup: {
    amount: "Amount",
    errorWhileCreatingCheckout: "Error while trying to create sumup checkout",
    errorAmountGreaterZero: "Amount must be greater than 0",
    errorAmountMustBeIntegral: "Cent amounts are not allowed",
    sumupTopupDisabled: "Online Topup is disabled",
    tryAgain: "Try again",
    onlineTopUp: "Online Top-Up",
    description: "You can top up your account with a credit card here.",
    next: "Next",
    success: {
      title: "Top Up succeeded",
      message: "Please continue to the <1>overview page</1>.",
    },
    error: {
      title: "Top Up failed",
      message: "An unknown error occured.",
    },
  },
  faq: {
    0: {
      question: "What is StuStaPay? (Or: Help! The cashier doesn't want my cash!)",
      answer:
        "This year, we are using a self-developed cashless payment system called StuStaPay. Your card/ticket contains a chip that identifies your account, which you can top up with credit. This means that you no longer need to handle cash at our stalls, but can conveniently pay with your card. Find out how it all works here.",
    },
    1: {
      question: "Where can I get a card?",
      answer:
        "You can purchase a card at our presale, in which case it will also function as a ticket, or at the entrance to the party. Note that your card must be activated at the entrance before it can be used during the party.",
    },
    2: {
      question: "Where can I use StuStaPay?",
      answer:
        "You can use StuStaPay at all of our stalls.",
    },
    3: {
      question: "Where can I see how much money I have?",
      answer:
        "You can see your balance with each purchase and top-up. Additionally, you can view your current balance at any time on pay.fsei.de. You can also have your balance displayed at any cash register.",
    },
    4: {
      question: "Where can I top up my credit?",
      answer:
        "You can top up your card with cash, card, or contactless payment at one of our top-up stations in the Audimax, at the cloakroom or at the entrance. You may also top up your card online at pay.fsei.de. The credit will be available for your next beer (and any other product of your choice) immediately after topping up.",
    },
    5: {
      question: "How does the payment process work?",
      answer:
        "After your order is taken, your card is read. Then, you can see your order summary and your credit. After your confirmation, the order is processed, and you will receive your desired product.",
    },
    6: {
      question: "How can I get/use drink vouchers?",
      answer:
        "You can receive vouchers as a reward for completed volunteer shifts. These vouchers are also managed digitally on your card. After your shift, the stall management will transfer the volunteer tokens to your card. For some volunteer shifts (e.g., during dismantling), you can receive your vouchers in advance in exchange for a deposit. The vouchers will be automatically deducted from your next order. If you don't want to use the vouchers or only use them partially, you can simply change the suggestion.",
    },
    7: {
      question: "How can I check what I have spent?",
      answer: "You can see your receipts and your balance on pay.fsei.de.",
    },
    8: {
      question: "How much money can I load onto my card?",
      answer: "You can load a maximum of 50€ onto your card.",
    },
    9: {
      question: "Can I also pay with cash or card?",
      answer:
        "No, the effort for this would be too high. Only StuStaPay is accepted as a payment method at all stalls. However, you can load your card with cash or card.",
    },
    10: {
      question: "What happens if I have remaining credit at the end?",
      answer:
        "You can receive the remaining credit at the cloakroom in exchange for your card. After the party no further withdrawals will be possible.",
    },
    11: {
      question: "Why can't you guarantee the refund?",
      answer:
        "This is for legal reasons. If we were to guarantee the refund, we would essentially be a bank and would need expensive licenses. Don't worry, you will still receive your remaining credit back.",
    },
    12: {
      question: "Can I cash out my credit at the festival?",
      answer:
        "You may only withdraw credit in exchange for your card when leaving the party.",
    },
    13: {
      question: "Help! My chip is damaged!",
      answer:
        "Please contact one of our top-up stations. They will replace your card and transfer the credit.",
    },
    14: {
      question: "Help! I lost my chip!",
      answer:
        "If you know your card ID and PIN we can block the old card and transfer the credit to a new card. Otherwise, we cannot transfer your credit.",
    },
    15: {
      question: "I found a chip",
      answer: "Please bring it to one of our top-up stations. They collect all lost and found items there.",
    },
    16: {
      question: "What data is stored about me?",
      answer:
        "We store the following information about your wristband on our central server:" +
        " Your account balance," +
        " all transactions (top-ups, card payments, sales, deposit refunds)," +
        " your receipts, and" +
        "Have a look at our privacy policy for more information.",
    },
    17: {
      question: "What happens in case of a StuStaPay outage?",
      answer:
        "If StuStaPay fails due to unforeseen reasons, we will switch to payment with cash registers as soon as possible. Of course, we will refund the remaining credit on the wristbands as quickly as possible.",
    },
  },
} as const;

export type Translations = typeof translations;

export default translations;
