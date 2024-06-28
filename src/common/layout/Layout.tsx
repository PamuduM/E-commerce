import { TopNav } from "../top-nav/TopNav";
import { Home } from "../../pages/home/Home";
import { Footer } from "../footer/Footer";
import { SideNav } from "../side-nav/SideNav";
import {Outlet} from "react-router-dom";

export function Layout() {
    return (
        <div className="bg-sky-950 grid grid-rows-[auto,1fr,auto] min-h-screen">
            {/* Top Navigation */}
            <div>
                <TopNav />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-[auto,1fr]">
                <SideNav />
                <main className="p-8">
                    <Outlet />
                </main>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}
