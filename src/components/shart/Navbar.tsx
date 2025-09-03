export default function Navbar() {
    return (
        <header className="w-full  flex justify-between items-center px-8 ">
            <div className="container mx-auto flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <img src="/assets/logo.png" alt="AMI" className="w-40" />
                </div>

                <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <a href="#">HOME</a>
                    <a href="#">QUEM SOMOS</a>
                    <a href="#">PROJECTOS</a>
                    <a href="#">CONHEÇA A ASSOCIAÇÃO</a>
                </nav>

                <button className="border border-pink-600 text-pink-600 px-4 py-1 rounded-md hover:bg-pink-500 hover:text-white transition">
                    Cadastro
                </button>
            </div>
        </header>
    );
}
