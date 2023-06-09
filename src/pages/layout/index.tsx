import React from 'react';
import Header from '../../components/header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer';

// first method
// style={{display: "grid", gridTemplateRows: "auto 1fr auto"}}

// second method sticky
// you don' t need to use padding bottom and padding top bot you have to use margin-auto for footer if you want to saty your footer bottom of the page.

// If you use sticky, you have to realize that there is an problem when you try to scroll page up an down, your header and footer also moving up and down which is indeed is not a perfect behaviour.

//third method
// use position fixed with padding top and bottom which ensures your content dont move under the header and footer.

// fourth method
// you can use flex box give display flex and flex-direction: column for the flex container.After you can give for footer and header flex-grow and flex-shrink 0 and give flex-grow 1 for the main content.

const Layout = () => {
  return (
    <div className='min-h-screen layout flex flex-col py-[100px]' >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
