
const Navbar = () => {
    return ( 
        <div className="bg-navbar-fondo w-navbar h-screen flex justify-center pt-20 absolute">
            <div className="flex flex-col ">
                <div className="bg-blue-400 w-48 h-48 rounded-full flex items-center justify-center">
                    <div className="bg-white w-44 h-44 rounded-full flex items-center justify-center">
                    <p className="">
                        Profile photo
                    </p>
                    </div>
                </div>
                <div className="text-white flex justify-around pt-5">
                    <a href="#">Git</a>
                    <a href="#">FB</a>
                    <a href="#">TW</a>
                </div>
                <div className="text-white flex flex-col pt-16">
                    <a href="">Links1</a>
                    <a href="">Links2</a>
                    <a href="">Links3</a>
                    <a href="">Links4</a>
                </div>
                <div className=" flex flex-col content-end">
                    <button className="bg-white rounded-full py-2 px-3">Noche</button>
                    <button className="bg-white rounded-full py-2 px-3">English</button>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;