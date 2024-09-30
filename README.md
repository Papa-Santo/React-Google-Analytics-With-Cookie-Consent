# React Google Analytics With Cookie Consent

This template provides google analytics linked to a cookie consent form. The analytics will only start when the user agrees to accept cookies.

The packages used are:

- [react-ga4](https://github.com/codler/react-ga4)
- [react-cookie-consent](https://github.com/Mastermindzh/react-cookie-consent)
- [react-router](https://github.com/remix-run/react-router)

## Usage

Create a .env file in the root of the project:

```
VITE_PROPERTY_ID=G-YOURTRACKING
VITE_COOKIE_NAME=GCook
```

To create custom google analytics events, follow this pattern:

```
import ReactGA from "react-ga4";

...

const monthlySubscriptionClick = () => {
  ReactGA.event({
    category: "Purchase",
    action: "Initiate Purchase",
    label: "Monthly Subscription Click",
  });
};
```

React router is currently pointed to src/pages/Home.tsx
