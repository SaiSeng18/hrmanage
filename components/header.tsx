const Header = () => {
    return (
        <header className="flex items-center justify-between pt-10">
            <div>Hrmanage</div>
            <nav>
                <ul className="flex items-center gap-10 font-medium lg:hidden">
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
