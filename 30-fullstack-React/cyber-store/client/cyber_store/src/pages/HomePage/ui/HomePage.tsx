import {type JSX} from "react";
import HeroSection from "./HeroSection.tsx";
import CategoryTabs from "../../../widgets/TypeDevicesPanel/ui/CategoryTabs.tsx";
import { ProductGrid } from "../../../widgets/ProductGrid/index.ts";
import "../../../app/styles/main.scss";

const HomePage = (): JSX.Element => {

  return (
    <div className={``}>
      <HeroSection />
      <CategoryTabs />
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
            <ProductGrid />
        </section>

    </div>
  );
};

export default HomePage;

