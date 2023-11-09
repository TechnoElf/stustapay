Hardcoded parameters that should be removed
===

- 150€ topup limit in app
- AGBs, FAQs in customer portal
- Payout enable
- Ticket price
- Initial admin user creation
- Roles

Fixes
===

- Use bigint for tag uid (in generated api)
  - Actually, use a string or something because JS can't deal with large numbers in JSON apparently
- Customer portal logout
