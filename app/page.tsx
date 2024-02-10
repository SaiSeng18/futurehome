import { BiSearch } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Home() {
    return (
        <main className="flex-center h-screen w-full flex-col p-5">
            <header className="mb-5 flex h-24 w-full justify-between rounded-3xl bg-gray-custom px-5">
                <div className="flex items-center">
                    <div>futurehome</div>
                    <nav className="bg-white ml-40 rounded-3xl px-5 py-4">
                        <ul className="flex items-center gap-5 font-medium">
                            <li>
                                <a href="">Shop</a>
                            </li>
                            <li>
                                <a href="">Collection</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex w-20 flex-col gap-2">
                        <div className="h-[2px] w-full bg-black"></div>
                        <div className="h-[2px] w-full bg-black"></div>
                    </div>

                    <HiOutlineShoppingBag size={35} />

                    <div className="bg-white flex-center gap-2 overflow-hidden rounded-full p-2">
                        <BiSearch
                            size={30}
                            className="text-white rounded-full bg-black p-2"
                        />
                        <input
                            type="text"
                            placeholder="Searching..."
                            className="w-32 bg-transparent focus:outline-none"
                        />
                    </div>
                </div>
            </header>

            <div className="flex-center h-full w-full gap-5">
                <div className="flex h-full w-1/2 flex-col justify-between">
                    <p className="text-7xl font-semibold">
                        Combine style <br /> and innovation
                    </p>
                    <p className="w-2/3 text-lg">
                        We offer a wide range of innovative and cutting-edge
                        decor elements that will allow you to create a unique
                        atmosphere and express your individually.
                    </p>

                    <div className="flex h-14 gap-10">
                        <button className="flex-between h-full w-fit gap-10 rounded-3xl border-2 border-primary bg-primary px-5">
                            <p className="text-xl">Go to shop</p>
                            <FaArrowRightLong />
                        </button>
                        <button className="flex-between h-full w-fit gap-10 rounded-3xl border-2 border-black px-5">
                            <p className="text-xl">View video</p>
                            <FaArrowRightLong />
                        </button>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-10">
                            <div className="flex h-[150px] gap-2 rounded-full bg-gray-custom p-2">
                                <div className="aspect-square h-full rounded-full bg-gray-300"></div>
                                <div className="aspect-square h-full rounded-full bg-gray-300"></div>
                                <div className="aspect-square h-full rounded-full bg-gray-300"></div>
                            </div>

                            <div className="aspect-square h-[150px] rounded-full bg-black"></div>
                        </div>

                        <div className="flex h-[180px] items-center gap-5">
                            <div className="flex-center h-full flex-col rounded-3xl bg-gray-custom p-5">
                                <p className="text-5xl font-semibold">+ 150</p>
                                <p>
                                    item names in the <br /> new collection
                                </p>
                            </div>
                            <div className="flex-center h-full gap-10 rounded-3xl bg-gray-custom p-5">
                                <p className="max-w-[250px]">
                                    With each collection, we strive to stand out
                                    from the crowd and bring a fresh wind of
                                    change
                                </p>
                                <div className="h-full w-44 rounded-3xl bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid h-full w-1/2 grid-cols-2 gap-5">
                    <div className="col-span-2 w-full rounded-3xl bg-primary"></div>
                    <div className="w-full rounded-3xl bg-primary"></div>
                    <div className="w-full rounded-3xl bg-primary"></div>
                </div>
            </div>
        </main>
    );
}
