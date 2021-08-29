import React from 'react'

function Footer() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 py-14 bg-gray-100 px-10 sm:px-16 md:px-28 text-gray-600 gap-y-10">
            <div className="space-y-4 text-sm text-gray-800 gap-x-40"> 
                <h5 className="font-bold">ABOUT</h5>
                <p className="cursor-pointer">How Airbnb works?</p>
                <p className="cursor-pointer">Newsroom</p>
                <p className="cursor-pointer">Investors</p>
                <p className="cursor-pointer">Airbnb Plus</p>
                <p className="cursor-pointer">Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p className="cursor-pointer">Accessibility</p>
                <p className="cursor-pointer">This is not real site</p>
                <p className="cursor-pointer">Its a awesome clone</p>
                <p className="cursor-pointer">Airbnb clone</p>
                <p className="cursor-pointer">Airbnb</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p className="cursor-pointer">Airbnb clone by sahil</p>
                <p className="cursor-pointer">Frontend developer</p>
                <p className="cursor-pointer">ReactJs Love</p>
                <p className="cursor-pointer">Falling for NextJs</p>
                <p className="cursor-pointer">Dm on LinkedIn</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p className="cursor-pointer">Help center </p>
                <p className="cursor-pointer">Trust & safety</p>
                <p className="cursor-pointer">Privacy policy </p>
                <p className="cursor-pointer">Terms & conditions</p>
                <p className="cursor-pointer">Disclaimer</p>
            </div>
        </div>
    )
}

export default Footer
