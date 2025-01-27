import React from 'react'

const Footer = () => {
  return (
    
    <footer className='w-full gap-10 h-auto bg-[#F7F7F7] flex flex-col justify-center px-16 py-8 mt-20 text-[#1E1E1E] font-poppins overflow-hidden '>
        <div className="footer-top">
        <img src="/Images/logodark.png" alt="logo" />
        </div>
        <div className="footer-content flex justify-between text-sm">
            <p>CORPORATE OFFICE <br />
                CRC HOMES PRIVATE LIMITED <br />
                Ground Floor, Tower A, Plot-5, <br />
                Logix Techno Park, Sector -127 Noida,<br />
                Gautam Buddha Nagar, Uttar Pradesh,<br />
                201313<br />
                EMAIL: marketing@crcgroup.in<br />
                P. No.:0120-4223834

            </p>

            <div><h3 className='text-[#F6973F] text-lg pb-2 '>Projects</h3>
            <ul className='list-disc list-inside'><li>Maesta</li>
            <li>Joyous</li>
            <li>Sublimis</li>
            <li>Mantra Happy</li>
            <li>Homes</li></ul>
            </div>

            <div><h3 className='text-[#F6973F] text-lg pb-2 '>About</h3>
            <ul className='list-disc list-inside'><li>About Management</li>
            <li>Leadership Team</li>
            <li>Vision & Mission</li>
            <li>FAQs</li>
            <li>Blog</li></ul>
            </div>

            <div><h3 className='text-[#F6973F] text-lg pb-2 '>About</h3>
            <ul className='list-disc list-inside'><li>Corporate Gallery</li>
            <li>Video Gallery</li>
            <li>Sublimis Gallery</li>
            <li>Mantra Happy Home Gallery</li>
            <li>Events</li></ul>
            </div>
        </div>
        <div className="footer-bottom flex text-sm justify-between"><p>Copyrigh 2021</p><div className='flex gap-4'><p>Terms & Condition</p><p>Privacy Policy</p></div></div>


    </footer>
  )
}

export default Footer
