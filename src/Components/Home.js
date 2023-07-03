import React from 'react'

 function Home() {
  return (
    <div>
        <div className='d-flex justify-content-around mt-1 bg-color'>
            <div className='col-12 col-lg-4 '>
               <h1 className='mt-50 display-5'>Enjoy Your Healthy Delicious Food</h1>
               <p className='h6'>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
               <button className='btn mt-3 btn-danger'>BOOK A TAB</button>
            </div>
            <div className='col-12 col-lg-6 mt-5 mb-5'>
                <img src='assets/img/hero-img.png'></img>
            </div>
        </div>

        <div className='mt-5  justify-content-center'>
            <div className='col-12 '>
               <h1 className='h1 text-center'>Share Your Moments In Our Restaurant</h1>
            </div>
            <div className='row justify-content-around'>
                <div className='col-12 col-lg-3 mt-5 border bg-color p-3'>
                    <img src='assets/img/menu-item-1.png' className='w-100'></img>
                    <div className='card text-center'>
                        <h2>Magnam Tiste</h2>
                        <p className='h6'>Lorem, deren, trataro, filede, nerada</p>
                        <h2 className='text-danger'>$5.95</h2>
                    </div>
                </div>

                <div className='col-12 col-lg-3 mt-5 border bg-color p-3'>
                    <img src='assets/img/menu-item-2.png' className='w-100'></img>
                    <div className='card text-center'>
                        <h2>Magnam Tiste</h2>
                        <p className='h6'>Lorem, deren, trataro, filede, nerada</p>
                        <h2 className='text-danger'>$5.95</h2>
                    </div>
                </div>

                <div className='col-12 col-lg-3 mt-5 border bg-color p-3'>
                    <img src='assets/img/menu-item-3.png' className='w-100'></img>
                    <div className='card text-center'>
                        <h2>Magnam Tiste</h2>
                        <p className='h6'>Lorem, deren, trataro, filede, nerada</p>
                        <h2 className='text-danger'>$5.95</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className='d-flex justify-content-around mt-5 bg-color'>
            <div className='col-12 col-lg-6 mt-5 mb-5'>
                <img src='assets/img/about.jpg'className='w-100' ></img>
            </div>
            <div className='col-12 col-lg-4 lh-sm mt-40'>
               <p className='h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <p className='h6 mt-3'><span class="material-symbols-outlined pe-3">download_done</span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p className='h6'><span class="material-symbols-outlined pe-3">download_done</span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p className='h6'><span class="material-symbols-outlined pe-3">download_done</span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p className='h6'><span class="material-symbols-outlined pe-3">download_done</span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p className='h5 mt-3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
        </div>
    </div>
  )
}
export default Home;