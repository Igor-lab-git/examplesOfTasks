import {type JSX, useCallback, useState} from "react";
import CategoryTabs from "../../../widgets/TypeDevicesPanel/ui/CategoryTabs.tsx";
import {ProductGrid} from "../../../widgets/ProductGrid/index.ts";
// import PromoBannerFooter from "./PromoBannerFooter.tsx";
import {useGetAllDevicesQuery} from "../../../app/store/redusers/cyberStoreApi.ts";
import {Pagination, usePagination} from "../../../features/pagination";
import {HeroSection} from "../../../widgets/hero-home-page-section";
import "../../../app/styles/main.scss";

const HomePage = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {data: deviceData, isLoading} = useGetAllDevicesQuery({limit: 9, page: currentPage});

    const {totalPages, buttonArray} = usePagination(deviceData);

    const togglePage = useCallback(() => (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        };
    }, [totalPages]);

    if (isLoading) return <h2>Loading...</h2>;

    return (
        <div className={``}>
            {/*<HeroSection />*/}
            <HeroSection />
            <CategoryTabs/>
            <section className={`container-main`}>
                {/*DevicesTabsSection*/}
                <div>
                    <button
                        role="tab"
                        aria-selected="true"
                        aria-controls={`panel`}
                        tabIndex={0}>
                        <span>Новинки</span>
                    </button>
                    <button
                        role="tab"
                        aria-selected="true"
                        aria-controls={`panel`}
                        tabIndex={0}>
                        <span>Бестселлер</span>
                    </button>
                    <button
                        role="tab"
                        aria-selected="true"
                        aria-controls={`panel`}
                        tabIndex={0}>
                        <span>Рекомендуемые продукты</span>
                    </button>
                </div>
                <ProductGrid data={deviceData?.data}/>

                <Pagination
                    buttonArray={buttonArray}
                    totalPages={totalPages}
                    togglePage={togglePage}
                    currentPage={currentPage}/>
            </section>
            {/*<PromoBannerFooter/>*/}
        </div>
    );
};

export default HomePage;

