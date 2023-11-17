import { Routes, Route } from "react-router-dom";
import { Home, Navigation, Authentication, Shop, Checkout } from './routes'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from './store/user/user.action';

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
