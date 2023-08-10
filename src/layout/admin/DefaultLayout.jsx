import React, { Fragment, useEffect, useRef, useState } from 'react'
import "../../assets/admin/css/portal.css"
import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    const [show, setShow] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(false);
    let sidePanel = useRef()

    const responsiveSidePanel = () => {
        let w = window.innerWidth;
        if (w >= 1200) {
            sidePanel.classList.remove('sidepanel-hidden');
            sidePanel.classList.add('sidepanel-visible');

        } else {
            sidePanel.classList.remove('sidepanel-visible');
            sidePanel.classList.add('sidepanel-hidden');
        }
    };

    const sidebarClickHandler = () => {
        if (sidePanel.classList.contains("sidepanel-visible")) {
            sidePanel.classList.remove("sidepanel-visible");
            sidePanel.classList.add("sidepanel-hidden");
        } else {
            sidePanel.classList.remove("sidepanel-hidden");
            sidePanel.classList.add("sidepanel-visible");
        }
    };

    useEffect(() => {
        responsiveSidePanel()
        window.addEventListener("resize", responsiveSidePanel);
        if (sidebarOpen) sidebarClickHandler()
    }, [sidebarOpen])

    return (
        <Fragment class="app">
            <div class="app-header fixed-top">
                <header class="app-header-inner">
                    <Header setSidebarOpen={setSidebarOpen} />
                </header>
                <aside ref={(i) => sidePanel = i} id="app-sidepanel" className="app-sidepanel">
                    <Sidebar show={show} setShow={setShow} setSidebarOpen={setSidebarOpen} />
                </aside>
            </div>
            <main class="app-wrapper">
                <div className="app-content pt-5 p-md-4 p-lg-5">
                    <Outlet />
                </div>
            </main>
        </Fragment>
    )
}

export default DefaultLayout