import NavBar from "@/components/Navbar";
import { ReactNode } from "react";

export default function homeLayout({ children }: { children: ReactNode }) {
    return (
        <div className="px-[13%] py-10 relative">
            <div className="fixed top-6 inset-x-0 px-[13%] z-50">
                <NavBar />
            </div>
            <div className="pt-[110px]">{children}</div>
        </div>
    );
}
