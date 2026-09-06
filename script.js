/*
  Down To Finance — Support site
  --------------------------------
  No wallet-connect logic yet — this file is intentionally left
  as a placeholder. Wired up later:

  - Listening for the "Connect wallet" click(s) in
    .stake-card [data-state="disconnected"]
  - On a successful connection, hide the "disconnected" state and
    un-hide the "connected" state:
      document.querySelector('[data-state="disconnected"]').hidden = true;
      document.querySelector('[data-state="connected"]').hidden = false;
  - Populating the connected state's wallet address, balance,
    "Your stake" / "$DTF rewards" values, and enabling the
    Amount field + Stake button once an amount is entered.
*/
