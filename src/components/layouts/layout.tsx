
import React from "react";
import Scroll from '@/components/layouts/Scroll/scroll';
import Header from '@/components/layouts/header/header'
import Footer from "./footer/footer";
const SiteLayout = ({ children }: any) => {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden relative">
			<Header />
			<main
				className="relative flex-grow"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>

			<Scroll />

			<Footer />
		</div>
	);
};

export const getLayout = (page: React.ReactElement) => (
	<SiteLayout>{page}</SiteLayout>
)

export default SiteLayout;
