import Image from "next/image";

const Header = () => {
    return (
        <header className="z-10 flex items-center justify-between pt-10">
            <a href="">
                <Image src="/logo.png" alt="Logo" height={50} width={100} />
            </a>

            <nav>
                <ul className="flex items-center gap-10 lg:hidden">
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Use case</a>
                    </li>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <a href="">Company</a>
                    </li>
                </ul>
            </nav>

            <button className="rounded-full border-2 border-black px-10 py-3 font-medium">
                Sign up
            </button>
        </header>
    );
};
export default Header;
