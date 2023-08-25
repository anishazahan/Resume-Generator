import RootLayout from "@/Components/Layout/RootLayout";

import HomePageResume from "@/Components/resum/HomePageResume";

const HomePage = () => {
  return (
    <div>
      <HomePageResume></HomePageResume>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
