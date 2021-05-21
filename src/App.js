import './App.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe("pk_test_51IdwGbA1iO7CYfBE8ukaAS0Yy5ZSD8v4y6QmD28GkcLnhP9EQm0sC4S8TiTFEGKg9EnaumnZ0v3IifPcNrbNYZRF00RWkZSqcx");

const App = () => {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default App;
