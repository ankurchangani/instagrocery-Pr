import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="success" className="text-white flex flex-col" onPress={onOpen}>
                <div className="flex items-center gap-2">
                    <FaShoppingCart size={20} />
                    <span>4 items</span>
                </div>
            </Button>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">My Cart</DrawerHeader>
                            <DrawerBody>
                            <div className=" z-50 flex justify-end">
                    <div className="h-screen w-96 bg-white py-3 overflow-y-auto">
                        
                        <div className="flex items-center py-3 rounded-md bg-white  ">
                            {/* <img src={Time} alt="time" className="w-12 object-cover" /> */}
                            <div className="p-0">
                                <h3 className="font-bold">Delivery in 13 minutes</h3>
                                <p className="text-sm text-gray-500">Shipment of 1 item</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-4 border-b bg-white  ">
                            {/* <img src={Logo} alt="Cheetos" className="w-16 h-16 rounded-lg" /> */}
                            <div>
                                <p className="font-bold">Cheetos Flamin Hot</p>
                                <p className="text-sm text-gray-500">28.3 g</p>
                                <p className="font-bold">
                                    ₹161 <span className="text-gray-400 line-through">₹170</span>
                                </p>
                            </div>
                            <div className="flex items-center bg-green-500 p-2 rounded-xl">
                                <button className="text-white px-3">
                                    <FaMinus />
                                </button>
                                <span className="text-white font-bold px-4">2</span>
                                <button className="text-white px-3">
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg p-4 rounded-lg mt-4">
                            <h3 className="font-bold mb-2">Bill details</h3>
                            <div className="flex justify-between text-sm">
                                <span>Items total</span> <span>₹161</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Delivery charge</span> <span className="text-green-500">FREE</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Handling charge</span> <span>₹4</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg mt-2">
                                <span>Grand total</span> <span>₹165</span>
                            </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-4">
                            <h3 className="font-bold">Cancellation Policy</h3>
                            <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                        </div>
                        {/* <button
                            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
                            onClick={() => setIsLoginOpen(true)}
                        >
                            Login to Proceed
                        </button> */}
                    </div>
                </div>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
