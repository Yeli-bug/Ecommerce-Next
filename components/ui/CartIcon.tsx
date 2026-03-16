import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
    return (
    <Link href="/cart" className="group relative">
        <ShoppingBag className="w-5 h-5 hover:text-primary-hover hoverEffect"/>
        <span className="absolute -top-2 -right-2 bg-primary-hover text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            0
        </span>
    </Link>
    );
};

export default CartIcon;