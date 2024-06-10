import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import { Home } from "./components/home/Home";
import { Footer } from "./components/layout/footer/Footer";
import Shop from "./site/shop/Shop";
import ProductDetails from "./site/productDetails/ProductDetails";

import { useEffect, useState } from "react";
import store from "./store";
import { LoadUser } from "./actions/UserAction";
// import Loader from ".//loader/Loader";
// Loader
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./site/route/ProtectedRoute";
import { UpdateProfile } from "./site/account/assets/UpdateProfile";
import PasswordUpdate from "./site/account/assets/PasswordUpdate";
import Cart from "./site/cart/Cart";
import { Shipping } from "./site/shipping/Shipping";
import { ConfirmStep } from "./site/shipping/assets/ConfirmStep";
import ProccessPaymentStep from "./site/shipping/assets/ProccessPaymentStep";
import { OrderSuccess } from "./site/order/OrderSuccess";
import { OrderMe } from "./site/order/OrderMe";
import { OrderDetails } from "./site/order/assets/OrderDetails";
import { Dashboard } from "./admin/dashboard/Dashboard";
import { AllProducts } from "./admin/products/allproducts/AllProducts";
import { CreateProduct } from "./admin/products/createproduct/CreateProduct";
import UpdateProduct from "./admin/products/updateproduct/UpdateProduct";
import OrderList from "./admin/orders/orderlist/OrderList";
import { UpdateOrders } from "./admin/orders/updateorders/UpdateOrders";
import { AllUsers } from "./admin/users/allusers/AllUsers";
import UpdateUser from "./admin/users/updateuser/UpdateUser";
import { Reviews } from "./admin/productreviews/reviews/Reviews";
import AllImages from "./admin/ImageGellery/allImages/AllImages";
import PrivacyPolicy from "./site/PrivacyPolicy";
import TermsAndConditions from "./site/TermsAndConditions";
import Otpverification from "./site/user/Otpverification";
import ErrorPage from "./site/404Page/ErrorPage";
import ErrorBoundary from "./utils/ErrorBoundary";
import ForgetPassword from "./site/user/ForgetPassword";
import ResetPassword from "./site/user/ResetPassword";
import WishList from "./site/wishlist/WishList";
import Category from "./site/shop/category/Category";
import ContactUs from "./site/contact us/ContactUs";
import Producttracking from "./components/tracking/Producttracking";
import Ordercancel from "./components/tracking/Ordercancel";
import CreatePost from "./admin/post/createpost/CreatePost";
import AllPost from "./admin/post/allpost/AllPost";

import PaymentDetails from "./admin/orders/updateorders/assets/PaymentDetails";
import AllCategory from "./admin/category/allCategory/AllCategory";
import UpdateCategory from "./admin/category/updateCtegory/UpdateCategory";
import BottomNav from "./components/layout/BottomNav/BottomNav";
import Editor from "./admin/editor/Editor";
import ImageUploader from "./admin/ImageGellery/uploadimage/ImageUploader";
import Blog from "./site/blog/allblog/Blog";
import SingleBlog from "./site/blog/singleblog/SingleBlog";
import UpdatePost from "./admin/post/update/UpdatePost";
import AllSeo from "./admin/seo/allseo/AllSeo";
import PostCategory from "./admin/post/category/PostCategory";
import UpdateSubCategory from "./admin/category/updateCtegory/UpdateSubCategory";
import Coupon from "./admin/marketing/coupon/Coupon";
import Attribute from "./admin/products/attribute/Attribute";
import ProductLabel from "./admin/products/attribute/label/ProductLabel";
import AllCoupon from "./admin/marketing/coupon/AllCoupon";
import BlogCategoryPage from "./site/blog/blogcategorypage/BlogCategoryPage";
import UpdateAttribute from "./admin/products/attribute/update/UpdateAttribute";
import UpdateAttributeLabel from "./admin/products/attribute/label/update/UpdateAttributeLabel";
import GetContactDetails from "./admin/contact/GetContactDetails";
import UserDashboard from "./site/account/UserDashboard";
// UserDashboard
import CouponUpdate from "./admin/marketing/update/CoupenUpdate ";
import SubCategory from "./site/shop/subcategory/SubCategory";
import Login_Form from "./site/user/Login_Form";
import SignUp_Form from "./site/user/SignUp_Form";
import Banners from "./admin/Home/banners/Banners";
import Add_New_Banner from "./admin/Home/banners/Add_New_Banner";
import Index from "./site/Index";
import Loader from "./utils/loader/Loader";
// SignUp_Form
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { loading } = useSelector((state) => state.user);
  const [pageLoad, SetLoad] = useState(true);

  useEffect(() => {
    store.dispatch(LoadUser());
    if (!loading) {
      SetLoad(false);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {pageLoad ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="page">
            <div className="main">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sign-in" element={<Login_Form />} />
                <Route path="/sing-up" element={<SignUp_Form />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/shop" element={<Shop />} />
                <Route
                  path="/user-dashboard"
                  element={<ProtectedRoute Component={UserDashboard} />}
                />
                <Route
                  path="/:category"
                  element={<Category />}
                />
                 <Route
                  path="/product-category/:category/:subcategory"
                  element={<SubCategory />}
                />
                 <Route
                  path="/:category/:id"
                  element={
                    // <ErrorBoundary>
                    <ProductDetails />
                    // </ErrorBoundary>
                  }
                />
                <Route
                  path="/admin/all-contact"
                  element={
                    <ProtectedRoute
                      isAdmin={true}
                      Component={GetContactDetails}
                    />
                  }
                />
               
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/otp-verification" element={<Otpverification />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route
                  path="/forget-password/:token"
                  element={<ResetPassword />}
                />
                <Route path="/blog" element={<Blog />} />
                <Route
                  path="/blog/category/:id"
                  element={<BlogCategoryPage />}
                />
                <Route path="/blog/:id" element={<SingleBlog />} />

               

                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/editor" element={<Editor />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />

                {/* <Route path="/category/:id" element={<Dolls />} /> */}

                <Route
                  path="/account/me/update"
                  element={<ProtectedRoute Component={UpdateProfile} />}
                />
                <Route
                  path="/account/password/update"
                  element={<ProtectedRoute Component={PasswordUpdate} />}
                />
                <Route
                  path="/shipping"
                  element={<ProtectedRoute Component={Shipping} />}
                />
                <Route
                  path="/shipping/order/confirm"
                  element={<ProtectedRoute Component={ConfirmStep} />}
                />
                <Route
                  path="/*"
                  element={<ProtectedRoute Component={ErrorPage} />}
                />
                <Route
                  path="/404"
                  element={<ProtectedRoute Component={ErrorPage} />}
                />
                <Route
                  path="/order/success"
                  element={<ProtectedRoute Component={OrderSuccess} />}
                />
                <Route
                  path="/orders"
                  element={<ProtectedRoute Component={OrderMe} />}
                />

                <Route
                  path="/order/:id"
                  element={<ProtectedRoute Component={OrderDetails} />}
                />
                <Route
                  path="/order/:id/:trackingid"
                  element={<ProtectedRoute Component={Producttracking} />}
                />
                <Route
                  path="/order/ordercancel"
                  element={<ProtectedRoute Component={Ordercancel} />}
                />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute isAdmin={true} Component={Dashboard} />
                  }
                />
                <Route
                  path="/admin/post/update/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdatePost} />
                  }
                />
                <Route
                  path="/admin/home/banner"
                  element={
                    <ProtectedRoute isAdmin={true} Component={Banners} />
                  }
                />
                <Route
                  path="/admin/home/add-banner"
                  element={
                    <ProtectedRoute isAdmin={true} Component={Add_New_Banner} />
                  }
                />
                <Route
                  path="/admin/all-seo"
                  element={<ProtectedRoute isAdmin={true} Component={AllSeo} />}
                />
                <Route
                  path="/admin/all-products"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllProducts} />
                  }
                />
                <Route
                  path="/admin/post/post-category"
                  element={
                    <ProtectedRoute isAdmin={true} Component={PostCategory} />
                  }
                />

                <Route
                  path="/admin/post/all-post"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllPost} />
                  }
                />
                <Route
                  path="/admin/post/add-new-post"
                  element={
                    <ProtectedRoute isAdmin={true} Component={CreatePost} />
                  }
                />

                <Route
                  path="/admin/create-product"
                  element={
                    <ProtectedRoute isAdmin={true} Component={CreateProduct} />
                  }
                />

                <Route
                  path="/admin/product-label/:attribute/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={ProductLabel} />
                  }
                />

                <Route
                  path="/admin/product-attribute"
                  element={
                    <ProtectedRoute isAdmin={true} Component={Attribute} />
                  }
                />
                <Route
                  path="/admin/update-attribute/:id"
                  element={
                    <ProtectedRoute
                      isAdmin={true}
                      Component={UpdateAttribute}
                    />
                  }
                />
                <Route
                  path="/admin/update-label/:id"
                  element={
                    <ProtectedRoute
                      isAdmin={true}
                      Component={UpdateAttributeLabel}
                    />
                  }
                />
                <Route
                  path="/admin/categorie"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllCategory} />
                  }
                />
                <Route
                  path="/admin/product/update-categorie/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdateCategory} />
                  }
                />

                <Route
                  path="/admin/update-sub-categorie/:id"
                  element={
                    <ProtectedRoute
                      isAdmin={true}
                      Component={UpdateSubCategory}
                    />
                  }
                />

                <Route
                  path="/admin/update-product/:product-id/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdateProduct} />
                  }
                />

                <Route
                  path="/admin/all-coupon"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllCoupon} />
                  }
                />
                <Route
                  path="/admin/update-coupon/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={CouponUpdate} />
                  }
                />

                <Route
                  path="/admin/coupon"
                  element={<ProtectedRoute isAdmin={true} Component={Coupon} />}
                />

                <Route
                  path="/admin/orders"
                  element={
                    <ProtectedRoute isAdmin={true} Component={OrderList} />
                  }
                />

                <Route
                  path="/admin/update-orders/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdateOrders} />
                  }
                />
                <Route
                  path="/admin/update-orders/:id/:paymentid"
                  element={
                    <ProtectedRoute isAdmin={true} Component={PaymentDetails} />
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllUsers} />
                  }
                />
                <Route
                  path="/admin/user-update/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdateUser} />
                  }
                />
                <Route
                  path="/admin/reviews"
                  element={
                    <ProtectedRoute isAdmin={true} Component={Reviews} />
                  }
                />
                <Route
                  path="/admin/upload/media-new"
                  element={
                    <ProtectedRoute isAdmin={true} Component={ImageUploader} />
                  }
                />
                <Route
                  path="/admin/upload/library"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllImages} />
                  }
                />
                <Route path="/cart" element={<Cart />} />
                {/* <Route
                  path="/shipping/proccess/payment"
                  element={
                    <ProtectedRoute Component={ProccessPaymentStep} />
                  }
                /> */}

                <Route
                  path="/shipping/proccess/payment"
                  element={<ProtectedRoute Component={ProccessPaymentStep} />}
                />
              </Routes>
            </div>
          </div>
          <Footer />
          {/* <BottomNav /> */}
        </>
      )}
    </Router>
  );
}

export default App;
