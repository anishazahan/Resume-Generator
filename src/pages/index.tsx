import RootLayout from "@/Components/Layout/RootLayout";

const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
