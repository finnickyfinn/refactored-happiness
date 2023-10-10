import React from 'react';
import logo from '../assets/Flag.png'

function Header() {
return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
        <a href="https://www.savethechildren.org/us/where-we-work/haiti">
            <button className="btn btn-ghost normal-case text-xl">
                <img class="h-10 w-20" src={logo} alt="Main Logo"/>
            </button>
        </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a href="https://www.google.com">About Us</a></li>
        <li><a href="https://geektyper.com/tegnio/">Contact</a></li>
        <li><a href="https://www.espn.com/nba/team/_/name/mia/miami-heat">Team</a></li>
        <li><a href="https://www.Poptropica.com">Sign In</a></li>
      </ul>
    </div>
    <div className="navbar-end">
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Get Help</button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
       

    </div>
  </div>
     );

 }

 export default Header;