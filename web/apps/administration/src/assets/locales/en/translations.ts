export const translations = {
  StuStaPay: "StuStaPay",
  cashiers: "Cashiers",
  advanced: "Advanced",
  accounts: "Accounts",
  systemAccounts: "System Accounts",
  findAccounts: "Find Accounts",
  orders: "Orders",
  submit: "Submit",
  products: "Products",
  tickets: "Tickets",
  actions: "Actions",
  add: "Add",
  edit: "Edit",
  delete: "Delete",
  copy: "Copy",
  update: "Update",
  logout: "Logout",
  login: "Login",
  moneyOverview: "Overview",
  taxRates: "Tax Rates",
  users: "Users",
  userRoles: "User Roles",
  confirm: "Confirm",
  cancel: "Cancel",
  tills: "Tills",
  tillLayouts: "Till Layouts",
  tillButtons: "Till Buttons",
  tillProfiles: "Till Profiles",
  registerStockings: "Cash Register Stockings",
  registers: "Cash Registers",
  account: {
    name: "Name",
    comment: "Comment",
    balance: "Balance",
    type: "Type",
    id: "ID",
    user_tag_uid: "User Tag UID",
    vouchers: "Vouchers",
    changeBalance: "Change Balance",
    oldBalance: "Old Balance",
    newBalance: "New Balance",
    changeVoucherAmount: "Change Voucher Amount",
    oldVoucherAmount: "Old Voucher Amount",
    newVoucherAmount: "New Voucher Amount",
    changeTag: "Change associated tag",
    oldTagUid: "UID of old tag",
    newTagUid: "UID of new tag",
    disable: "Disable",
    disableSuccess: "Successfully disabled account",
    findAccounts: "Find Accounts",
    searchTerm: "Search Term",
    history: {
      title: "Account tag association history",
      validUntil: "Valid until",
      account: "Account",
      comment: "Comment",
    },
  },
  userTag: {
    uid: "User Tag Uid",
    comment: "Comment",
    noAccount: "No account associated",
    account: "Account",
    accountHistory: "Account association history",
  },
  auth: {
    username: "Username",
    password: "Password",
    login: "Login",
    loginFailed: "Login failed: {{reason}}.",
  },
  cashier: {
    login: "Login",
    name: "Name",
    description: "Description",
    cashDrawerBalance: "Cash Drawer",
    tagId: "Tag ID",
    till: "Till",
    shifts: "Shifts",
    closeOut: "Close Out",
    showWithoutTill: "Show without till",
    showZeroBalance: "Show with zero balance",
    notLoggedInAtTill: "Cashier is not logged at a terminal",
    closeOuts: "Close outs",
  },
  shift: {
    id: "ID",
    comment: "Comment",
    startedAt: "Started At",
    endedAt: "Ended At",
    actualCashDrawerBalance: "Final Cash Drawer Balance as counted",
    expectedCashDrawerBalance: "Final Expected Cash Drawer Balance",
    cashDrawerImbalance: "Final Cash Drawer Imbalance",
    soldProductQuantity: "Quantity",
  },
  closeOut: {
    start: "Start",
    warningStillLoggedInTitle: "Warning",
    warningStillLoggedIn:
      "The cashier is still logged in at a terminal, either manually log him out if possible, otherwise force logout at the till itself.",
    targetInDrawer: "Target in cash drawer",
    countedInDrawer: "Counted in cash drawer",
    difference: "Difference",
    comment: "Comment",
    closingOutUser: "Closing out Finanzorga",
    sum: "Sum",
    coins: "Coins",
    bill5Euro: "5€ *",
    bill10Euro: "10€ *",
    bill20Euro: "20€ *",
    bill50Euro: "50€ *",
    bill100Euro: "100€ *",
    bill200Euro: "200€ *",
  },
  order: {
    id: "ID",
    itemCount: "number of items",
    lineItems: "Line items",
    status: "Status",
    paymentMethod: "Payment Method",
    customerAccountId: "Customer Account ID",
    customerTagUid: "Customer Tag Uid",
    bookedAt: "Booked At",
    type: "Type",
    name: "Order with ID: {{id}}",
    totalPrice: "Total Price",
    totalTax: "Total Tax",
    totalNoTax: "Total Without Tax",
  },
  item: {
    product: "Product",
    productPrice: "Product Price",
    quantity: "Quantity",
    totalPrice: "Total Price",
    taxName: "Tax",
    taxRate: "Tax Rate",
    totalTax: "Total Tax",
  },
  overview: {
    title: "Overview",
    fromTimestamp: "From",
    toTimestamp: "To",
    mostSoldProducts: "Most sold products",
    showDetails: "Show Details",
    quantitySold: "# Sold",
    selectedTill: "Till",
    statsByTill: "Products sold by till",
    depositBalance: "Deposit balance (# collected deposits)",
    hideDeposits: "Hide deposits",
    voucherStats: "Vouchers",
    vouchersIssued: "Issued",
    vouchersSpent: "Spent",
  },
  ticket: {
    name: "Name",
    description: "Description",
    product: "Product",
    price: "Price",
    totalPrice: "Total Price",
    initialTopUpAmount: "Initial top up amount",
    restriction: "Restriction",
    create: "Add a new ticket",
    update: "Update ticket",
    delete: "Delete ticket",
    deleteDescription: "Confirm ticket deletion",
  },
  product: {
    name: "Name",
    price: "Price",
    priceInVouchers: "Price in Vouchers",
    restrictions: "Restrictions",
    isLocked: "Locked",
    isReturnable: "Can be returned",
    isFixedPrice: "Fixed Price",
    taxRate: "Tax Rate",
    fixedPrice: "Price is fixed",
    lock: "Lock Product",
    create: "Add a new product",
    update: "Update product",
    delete: "Delete Product",
    deleteDescription: "Confirm product deletion",
  },
  settings: {
    title: "Settings",
    language: "Language",
    "currency.symbol": "Currency Symbol",
    "currency.identifier": "Currency Identifier",
    juristiction: "Juristiction",
    serverSideConfig: "Server side settings",
    localConfig: "Local settings",
    "bon.issuer": "Bon issuer",
    "bon.addr": "Bon address",
    "bon.title": "Bon title",
    "bon.closing_texts": "Bon closing texts",
    ust_id: "UST ID",
    settingsUpdateError: "Error updating setting: {{what}}",
  },
  taxRateName: "Name",
  taxRateRate: "Rate",
  taxRateDescription: "Description",
  createTaxRate: "Add a new Tax Rate",
  updateTaxRate: "Update Tax Rate",
  deleteTaxRate: "Delete Tax Rate",
  deleteTaxRateDescription: "Confirm tax rate deletion",
  till: {
    till: "Till",
    id: "ID",
    name: "Name",
    profile: "Profile",
    description: "Description",
    registrationUUID: "Registration ID",
    loggedIn: "Terminal registered",
    logout: "Unregister till",
    cashRegisterBalance: "Current cash register balance",
    cashRegisterName: "Current cash register name",
    create: "Add a new till",
    update: "Update till",
    delete: "Delete till",
    deleteDescription: "Confirm till deletion",
    activeUser: "Logged in user",
    tseId: "TSE ID",
    tseSerial: "TSE Serial",
    forceLogoutUser: "Force logout user",
    forceLogoutUserDescription:
      "Force logout user at terminal. This should NEVER be done while a cashier is still using the terminal",
    unregisterTill: "Force logout a terminal",
    unregisterTillDescription:
      "Force logout a terminal. This should NEVER be done while a cashier is still using the terminal",
  },
  layout: {
    layout: "Layout",
    layouts: "Layouts",
    buttons: "Buttons",
    tickets: "Tickets",
    name: "Name",
    description: "Description",
    create: "Add a new layout",
    update: "Update layout",
    delete: "Delete layout",
    deleteDescription: "Confirm layout deletion",
  },
  profile: {
    profile: "Profile",
    profiles: "Profiles",
    name: "Name",
    description: "Description",
    create: "Add a new profile",
    allowTopUp: "Allow top up",
    allowCashOut: "Allow cash out",
    allowTicketSale: "Allow ticket sales",
    allowedUserRoles: "Allowed user roles",
    layout: "Layout",
    update: "Update profile",
    delete: "Delete profile",
    deleteDescription: "Confirm profile deletion",
  },
  button: {
    button: "Button",
    buttons: "Buttons",
    create: "Add a new button",
    update: "Update button",
    delete: "Delete button",
    deleteDescription: "Confirm button deletion",
    availableButtons: "Available buttons",
    assignedButtons: "Assigned buttons",
    name: "Name",
    price: "Price",
    addProductToButton: "Add a product",
  },
  register: {
    stockings: "Cash register stockings",
    createStocking: "Add a new cash register stocking template",
    updateStocking: "Update a cash register stocking template",
    deleteStocking: "Update a cash register stocking template",
    deleteStockingDescription: "Confirm register stocking deletion",
    createRegister: "Add a new cash register",
    updateRegister: "Update a cash register",
    deleteRegister: "Update a cash register",
    deleteRegisterDescription: "Confirm register deletion",
    registers: "Registers",
    currentBalance: "Balance",
    currentCashier: "Cashier",
    currentTill: "Till",
    update: "Update cash register",
    name: "Name",
    euro200: "Amount of 200€ bills",
    euro100: "Amount of 100€ bills",
    euro50: "Amount of 50€ bills",
    euro20: "Amount of 20€ bills",
    euro10: "Amount of 10€ bills",
    euro5: "Amount of 5€ bills",
    euro2: "Amount of 2€ rolls  one roll = 25 pcs = 50€",
    euro1: "Amount of 1€ rolls, one roll = 25 pcs = 25€",
    cent50: "Amount of 50 cent rolls, one roll = 40 pcs = 20€",
    cent20: "Amount of 20 cent rolls, one roll = 40 pcs = 8€",
    cent10: "Amount of 10 cent rolls, one roll = 40 pcs = 4€",
    cent5: "Amount of 5 cent rolls, one roll = 50 pcs = 2,50€",
    cent2: "Amount of 2 cent rolls, one roll = 50 pcs = 1€",
    cent1: "Amount of 1 cent rolls, one roll = 50 pcs = 0,50€",
    variableInEuro: "Additional variable stocking in euro",
    stockingTotal: "Total",
  },
  createUser: "Create User",
  updateUser: "Update User",
  userLogin: "Login",
  userDisplayName: "Display Name",
  userPassword: "Password",
  userDescription: "Description",
  userPrivileges: "Privileges",
  userCreateError: "Error while creating user: {{what}}",
  userUpdateError: "Error while updating user: {{what}}",
  deleteUser: "Delete User",
  deleteUserDescription: "Confirm user deletion",
  user: {
    roles: "Roles",
  },
  userRole: {
    name: "Name",
    create: "Create new user role",
    update: "Update user role",
    createError: "Error while creating user role: {{what}}",
    updateError: "Error while updating user role: {{what}}",
    privileges: "Privileges",
    delete: "Delete user role",
    deleteDescription: "Confirm user role deletion",
  },
};

export type Translations = typeof translations;

export default translations;