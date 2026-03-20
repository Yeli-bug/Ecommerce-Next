import { Heart } from "lucide-react";
import Link from "next/link";

const FavoriteButton = () => {
    return (
    <Link href="/favorite" className="group relative">
        <Heart className="w-5 h-5 hover:text-primary-hover hoverEffect"/>
        <span className="absolute -top-2 -right-2 bg-primary-hover text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            0
        </span>
    </Link>
    );
};

export default FavoriteButton;