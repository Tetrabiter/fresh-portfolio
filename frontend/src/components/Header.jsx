const Header = () => {
    return (
        <header className="w-full h-26 bg-blue-200">
            <div className="w-full h-full px-4 flex justify-between items-center">
                <div>
                    <h1 className="font-semibold underline decoration-sky-500">fresh presentation</h1>
                </div>

                <ul className="flex gap-6">
                    <li
                      className="hover:underline hover:decoration-wavy hover:text-white decoration-pink-500"  
                    ><a href="">github</a></li>
                    <li
                      className="hover:underline hover:decoration-wavy hover:text-white decoration-pink-500"  
                    ><a href="">other projects</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;